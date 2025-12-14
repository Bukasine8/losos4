"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";

interface LiquidNavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function LiquidNavLink({ href, children, className }: LiquidNavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={cn(
            "relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 group overflow-hidden",
            "text-white/70 hover:text-white hover:bg-white/5",
            isActive ? [
                "text-white",
                "bg-gradient-to-br from-white/20 to-white/5", // Subtle gradient surface
                "backdrop-blur-xl", // Deep frost
                "border border-white/20", // Physical edge definition
                "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-1px_0_0_rgba(0,0,0,0.1),0_4px_15px_-3px_rgba(0,0,0,0.2)]", // 3D Lighting: Top highlight, bottom shade, drop shadow
            ] : "border border-transparent",
            className
        )}>
            {/* Liquid Glass overlay - Animated */}
            {isActive && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 opacity-70 mix-blend-overlay pointer-events-none"
                >
                    <div
                        className="absolute inset-0 bg-white/30"
                        style={{ backdropFilter: 'url("#container-glass")' }}
                    />
                    {/* Specular sheen animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
            )}
            <span className="relative z-10 drop-shadow-sm">{children}</span>
        </Link>
    );
}

export function LiquidGlassFilters() {
    return (
        <svg className="hidden" aria-hidden="true">
            <defs>
                {/* Filter for individual Nav Links */}
                <filter
                    id="container-glass"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    colorInterpolationFilters="sRGB"
                >
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence" />
                    <feGaussianBlur in="turbulence" stdDeviation="1.5" result="blurredNoise" />
                    <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="12" xChannelSelector="R" yChannelSelector="G" result="displaced" />

                    <feSpecularLighting in="blurredNoise" surfaceScale="2" specularConstant="1" specularExponent="20" lightingColor="#ffffff" result="specularLight">
                        <fePointLight x="50" y="-50" z="200" />
                    </feSpecularLighting>
                    <feComposite in="specularLight" in2="SourceAlpha" operator="in" result="specularLight" />

                    <feComposite in="specularLight" in2="displaced" operator="over" result="final" />
                    <feComposite in="final" in2="SourceAlpha" operator="in" />
                </filter>

                {/* Filter for the Main Navbar Container - Smoother, Larger Scale, High Distortion */}
                <filter
                    id="navbar-glass"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    colorInterpolationFilters="sRGB"
                >
                    <feTurbulence type="fractalNoise" baseFrequency="0.003" numOctaves="3" result="turbulence" />
                    <feGaussianBlur in="turbulence" stdDeviation="8" result="blurredNoise" />
                    <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="40" xChannelSelector="R" yChannelSelector="G" result="displaced" />

                    {/* Strong Specular Highlights for "Wet" look */}
                    <feSpecularLighting in="blurredNoise" surfaceScale="8" specularConstant="1.5" specularExponent="35" lightingColor="#ffffff" result="specularLight">
                        <fePointLight x="100" y="-300" z="400" />
                    </feSpecularLighting>
                    <feComposite in="specularLight" in2="SourceAlpha" operator="in" result="specularLight" />
                    <feComposite in="specularLight" in2="displaced" operator="over" result="final" />
                    <feComposite in="final" in2="SourceAlpha" operator="in" />
                </filter>
            </defs>
        </svg>
    );
}
