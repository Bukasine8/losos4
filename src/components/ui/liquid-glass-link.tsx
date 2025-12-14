"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { liquidbuttonVariants, GlassFilter } from "./liquid-glass-button";

interface LiquidGlassLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
}

export function LiquidGlassLink({ href, label, isActive = false }: LiquidGlassLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                "relative group transition-all duration-300 rounded-full",
                // Base styles for the link container to ensure it handles the liquid button variants correctly
                isActive
                    ? liquidbuttonVariants({ variant: "active", size: "default" })
                    : "px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            )}
        >
            <span className="relative z-10">{label}</span>
            {isActive && <GlassFilter />}

            {/* Hover effect for non-active items to hint at the glass texture */}
            {!isActive && (
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
            )}
        </Link>
    );
}
