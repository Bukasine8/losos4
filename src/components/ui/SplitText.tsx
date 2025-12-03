"use client";

import { motion, useSpring, useTransform, SpringOptions } from "framer-motion";
import { useEffect } from "react";

interface SplitTextProps {
    children: string;
    className?: string;
    delay?: number;
}

export function SplitText({ children, className, delay = 0 }: SplitTextProps) {
    const text = children;
    const springConfig: SpringOptions = { damping: 15, stiffness: 200, mass: 0.5 };

    return (
        <span className={className}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 200,
                        mass: 0.5,
                        delay: delay + i * 0.03,
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
