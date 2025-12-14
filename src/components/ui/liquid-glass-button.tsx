"use client";

import { cva } from "class-variance-authority";

export const liquidbuttonVariants = cva(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300",
    {
        variants: {
            variant: {
                default:
                    "bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-white/10 hover:border-white/20",
                active:
                    "bg-white/20 backdrop-blur-xl border border-white/40 text-white shadow-[0_0_30px_rgba(255,255,255,0.3)]",
            },
            size: {
                default: "px-6 py-2",
                sm: "px-4 py-1.5 text-xs",
                lg: "px-8 py-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export const GlassFilter = () => {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 z-0 pointer-events-none opacity-50"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer" />
        </div>
    );
};
