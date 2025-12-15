import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl",
                "bg-white/10 backdrop-blur-md",
                "border border-white/20",
                "shadow-xl shadow-black/10",
                className
            )}
        >
            {children}
        </div>
    );
}
