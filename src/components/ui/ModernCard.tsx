// ModernCard component
import React from "react";
import { cn } from "@/lib/utils";

interface ModernCardProps extends React.HTMLProps<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient" | "minimal";
  hover?: "scale" | "lift" | "glow" | "none";
  children?: React.ReactNode;
}

export const ModernCard = ({
  variant = "default",
  hover = "lift",
  className,
  children,
  ...props
}: ModernCardProps) => {
  const variants = {
    default: "bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark",
    glass: "glassmorphism dark:glassmorphism-dark",
    gradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/20",
    minimal: "bg-transparent border-b-2 border-primary/30",
  };

  const hoverEffects = {
    scale: "hover:scale-105 hover:shadow-xl transition-all duration-300",
    lift: "hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300",
    glow: "hover:shadow-2xl hover:shadow-primary/40 hover:border-primary/50 transition-all duration-300",
    none: "",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300 h-full flex flex-col",
        variants[variant],
        hoverEffects[hover],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ModernCard;
