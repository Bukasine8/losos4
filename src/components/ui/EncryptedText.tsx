"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
    text: string;
    className?: string;
    revealDelayMs?: number;
    charset?: string;
    flipDelayMs?: number;
    encryptedClassName?: string;
    revealedClassName?: string;
    onComplete?: () => void;
};

const DEFAULT_CHARSET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
    const index = Math.floor(Math.random() * charset.length);
    return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
    original: string,
    charset: string,
): string {
    if (!original) return "";
    let result = "";
    for (let i = 0; i < original.length; i += 1) {
        const ch = original[i];
        result += ch === " " ? " " : generateRandomCharacter(charset);
    }
    return result;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
    text,
    className,
    revealDelayMs = 50,
    charset = DEFAULT_CHARSET,
    flipDelayMs = 50,
    encryptedClassName,
    revealedClassName,
    onComplete,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    const [revealCount, setRevealCount] = useState<number>(0);
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(0);
    const lastFlipTimeRef = useRef<number>(0);
    const scrambleCharsRef = useRef<string[]>(
        text ? generateGibberishPreservingSpaces(text, charset).split("") : [],
    );

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isInView || !isMounted) return;

        const initial = text
            ? generateGibberishPreservingSpaces(text, charset)
            : "";
        scrambleCharsRef.current = initial.split("");
        startTimeRef.current = performance.now();
        lastFlipTimeRef.current = startTimeRef.current;
        setRevealCount(0);

        let isCancelled = false;

        const update = (now: number) => {
            if (isCancelled) return;

            const elapsedMs = now - startTimeRef.current;
            const totalLength = text.length;
            const currentRevealCount = Math.min(
                totalLength,
                Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
            );

            setRevealCount(currentRevealCount);

            if (currentRevealCount >= totalLength) {
                if (!isCancelled && onComplete) {
                    onComplete();
                }
                return;
            }

            const timeSinceLastFlip = now - lastFlipTimeRef.current;
            if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
                for (let index = 0; index < totalLength; index += 1) {
                    if (index >= currentRevealCount) {
                        if (text[index] !== " ") {
                            scrambleCharsRef.current[index] =
                                generateRandomCharacter(charset);
                        } else {
                            scrambleCharsRef.current[index] = " ";
                        }
                    }
                }
                lastFlipTimeRef.current = now;
            }

            animationFrameRef.current = requestAnimationFrame(update);
        };

        animationFrameRef.current = requestAnimationFrame(update);

        return () => {
            isCancelled = true;
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isInView, text, revealDelayMs, charset, flipDelayMs, onComplete]);

    if (!text) return null;

    return (
        <motion.span
            ref={ref}
            className={cn(className)}
            aria-label={text}
            role="text"
        >
            {text.split("").map((char, index) => {
                const isRevealed = index < revealCount;
                // Use a stable character (e.g., the original char or a placeholder) for the initial server render
                // to avoid hydration mismatch. Ideally, we should only start scrambling on the client.
                // However, since we want the effect to start immediately, we can use a state to track if mounted.
                // For now, let's just ensure the random generation is consistent or deferred.

                // Better approach: Use a state 'isMounted' to control rendering of random chars.
                // But to fix the immediate error without major refactor:
                // We will render the original text initially (hidden or not) and then switch to scrambled on mount.
                // Actually, the issue is `generateRandomCharacter` being called during render.

                const displayChar = isRevealed
                    ? char
                    : char === " "
                        ? " "
                        : isMounted
                            ? (scrambleCharsRef.current[index] ?? generateRandomCharacter(charset))
                            : char; // Show original char on server/initial render

                return (
                    <span
                        key={index}
                        className={cn(isRevealed ? revealedClassName : encryptedClassName)}
                    >
                        {displayChar}
                    </span>
                );
            })}
        </motion.span>
    );
};
