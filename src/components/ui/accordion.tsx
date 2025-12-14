"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    value: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    className?: string;
}

export function AccordionItem({
    trigger,
    children,
    isOpen,
    onClick,
    className,
}: AccordionItemProps) {
    return (
        <div className={cn("border-b border-border", className)}>
            <button
                type="button"
                onClick={onClick}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-accent-foreground items-center w-full text-left [&[data-state=open]>svg]:rotate-180",
                    isOpen ? "text-accent focus:text-accent" : "text-foreground"
                )}
                data-state={isOpen ? "open" : "closed"}
            >
                {trigger}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-sm"
                    >
                        <div className="pb-4 pt-0 text-muted-foreground">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    type?: "single" | "multiple";
    className?: string;
    children: React.ReactNode;
}

export function Accordion({
    type = "single",
    className,
    children,
}: AccordionProps) {
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    const handleItemClick = (value: string) => {
        if (type === "single") {
            setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
        } else {
            setOpenItems((prev) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        }
    };

    return (
        <div className={cn("w-full", className)}>
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return null;

                // Check if the child is an AccordionItem and inject props
                if (child.type === AccordionItem) {
                    return React.cloneElement(child as React.ReactElement<AccordionItemProps>, { // Cast child to specific type
                        isOpen: openItems.includes((child.props as AccordionItemProps).value),
                        onClick: () => handleItemClick((child.props as AccordionItemProps).value),
                    });
                }

                return child;
            })}
        </div>
    );
}
