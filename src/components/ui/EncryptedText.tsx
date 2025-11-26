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

const EncryptedTextInternal: React.FC<EncryptedTextProps> = ({
    text,
    className,
    revealDelayMs = 50,
    charset = DEFAULT_CHARSET,
    flipDelayMs = 50,
    encryptedClassName,
    revealedClassName,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    const [revealCount, setRevealCount] = useState<number>(0);
    const [scrambleChars, setScrambleChars] = useState<string[]>(() =>
        text ? generateGibberishPreservingSpaces(text, charset).split("") : [],
    );
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(0);
    const lastFlipTimeRef = useRef<number>(0);

    useEffect(() => {
        if (!isInView) return;

        startTimeRef.current = performance.now();
        lastFlipTimeRef.current = startTimeRef.current;

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
                return;
            }

            const timeSinceLastFlip = now - lastFlipTimeRef.current;
            if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
                setScrambleChars(prevScrambleChars => {
                    const newScrambleChars = [...prevScrambleChars];
                    for (let index = 0; index < totalLength; index += 1) {
                        if (index >= currentRevealCount) {
                            if (text[index] !== " ") {
                                newScrambleChars[index] =
                                    generateRandomCharacter(charset);
                            } else {
                                newScrambleChars[index] = " ";
                            }
                        }
                    }
                    return newScrambleChars;
                });
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
    }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

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
                const displayChar = isRevealed
                    ? char
                    : char === " "
                        ? " "
                        : scrambleChars[index] ?? generateRandomCharacter(charset);

                return (
                    <span
                        key={index}
                        className={cn(
                            isRevealed ? revealedClassName : encryptedClassName,
                        )}
                    >
                        {displayChar}
                    </span>
                );
            })}
        </motion.span>
    );
};

export const EncryptedText: React.FC<EncryptedTextProps> = (props) => {
    const key = `${props.text}-${props.revealDelayMs}-${props.charset}-${props.flipDelayMs}`;
    return <EncryptedTextInternal {...props} key={key} />;
};
