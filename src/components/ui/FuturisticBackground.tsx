import { cn } from "@/lib/utils";

interface FuturisticBackgroundProps {
    className?: string;
}

export function FuturisticBackground({ className }: FuturisticBackgroundProps) {
    return (
        <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px),
                                     linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
    );
}
