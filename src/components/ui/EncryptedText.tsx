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

    const [displayedText, setDisplayedText] = useState(text);
    const [isMounted, setIsMounted] = useState(false);
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(0);
    const lastFlipTimeRef = useRef<number>(0);

    useEffect(() => {
        requestAnimationFrame(() => setIsMounted(true));
    }, []);

    useEffect(() => {
        if (!isInView || !isMounted) return;

        const scrambleChars = generateGibberishPreservingSpaces(text, charset).split("");
        startTimeRef.current = performance.now();
        lastFlipTimeRef.current = startTimeRef.current;
        requestAnimationFrame(() => setDisplayedText(scrambleChars.join("")));

        let isCancelled = false;

        const update = (now: number) => {
            if (isCancelled) return;

            const elapsedMs = now - startTimeRef.current;
            const totalLength = text.length;
            const currentRevealCount = Math.min(
                totalLength,
                Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
            );

            if (currentRevealCount >= totalLength) {
                requestAnimationFrame(() => setDisplayedText(text));
                if (!isCancelled && onComplete) {
                    onComplete();
                }
                return;
            }

            const timeSinceLastFlip = now - lastFlipTimeRef.current;
            if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
                const newScrambleChars = [...scrambleChars];
                for (let index = currentRevealCount; index < totalLength; index++) {
                    if (text[index] !== " ") {
                        newScrambleChars[index] = generateRandomCharacter(charset);
                    }
                }
                scrambleChars.splice(0, scrambleChars.length, ...newScrambleChars);
                lastFlipTimeRef.current = now;
            }

            const newDisplayText =
                text.substring(0, currentRevealCount) +
                scrambleChars.slice(currentRevealCount).join("");
            requestAnimationFrame(() => setDisplayedText(newDisplayText));


            animationFrameRef.current = requestAnimationFrame(update);
        };

        animationFrameRef.current = requestAnimationFrame(update);

        return () => {
            isCancelled = true;
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isInView, text, revealDelayMs, charset, flipDelayMs, onComplete, isMounted]);


    if (!text) return null;

    return (
        <motion.span
            ref={ref}
            className={cn(className)}
            aria-label={text}
            role="text"
        >
            {isMounted ? displayedText : text}
        </motion.span>
    );
};
