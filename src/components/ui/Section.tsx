import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    hasDivider?: boolean;
    divider?: "none" | "slope-left" | "slope-right" | "chevron" | "arrow-down";
    theme?: "dark" | "light" | "blue";
}

export function Section({
    children,
    className,
    hasDivider = false,
    divider = "slope-right",
    theme = "dark",
    ...props
}: SectionProps) {
    const bgColors = {
        dark: "bg-losos-dark text-white",
        light: "bg-losos-light text-losos-dark",
        blue: "bg-losos-blue text-white",
    };

    // Fill color for the divider (MUST match the background of THIS section)
    const fillColors = {
        dark: "fill-losos-dark",
        light: "fill-losos-light",
        blue: "fill-losos-blue",
    };

    // We position the divider at the TOP of the section, pointing UP into the previous section.
    // This allows this section to "cut into" the one above it.
    // Alternatively, we could put it at the bottom. 
    // Standard practice for "diagonal sections": The current section has a shape that overlays the previous one at the top.

    return (
        <section
            className={cn("relative py-16 md:py-32", bgColors[theme], className)}
            {...props}
        >
            {hasDivider && divider !== "none" && (
                <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] z-10">
                    <svg
                        className={cn("relative block w-full h-[60px] md:h-[100px]", fillColors[theme])}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        {divider === "slope-right" && <path d="M1200 120L0 16.48 0 120 1200 120z" />}
                        {divider === "slope-left" && <path d="M0 120L1200 16.48 1200 120 0 120z" />}
                        {divider === "chevron" && <path d="M600 120L0 0 0 120 1200 120 1200 0 600 120z" />}
                        {divider === "arrow-down" && <path d="M1200 0L600 120 0 0 0 120 1200 120z" />}
                        {/* Actually let's stick to the prompt's "Diagonal" focus. Implementing slope-right (default) and slope-left. */}
                    </svg>
                </div>
            )}

            <div className="container relative z-20">
                {children}
            </div>
        </section>
    );
}
