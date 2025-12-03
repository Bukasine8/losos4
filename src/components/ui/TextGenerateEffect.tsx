"use client";

import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const controls = useAnimation();
    const wordsArray = words.split(" ");

    // Use a ref to track visibility
    // We need to attach this ref to the container element
    // But since we're returning a component that might be used in different ways,
    // let's use a wrapper div with the ref

    return (
        <div className={className}>
            <TextGenerateContent words={words} />
        </div>
    );
};

// Inner component to handle the animation logic
const TextGenerateContent = ({ words }: { words: string }) => {
    const controls = useAnimation();
    const wordsArray = words.split(" ");

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
            }}
        >
            {wordsArray.map((word, idx) => {
                return (
                    <motion.span
                        key={word + idx}
                        className="dark:text-white text-black opacity-0"
                        variants={{
                            hidden: { opacity: 0, filter: "blur(10px)" },
                            visible: { opacity: 1, filter: "blur(0px)" },
                        }}
                    >
                        {word}{" "}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};
