"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LiquidNavLink, LiquidGlassFilters } from "@/components/ui/liquid-glass-navlink";


const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] md:w-[95%] max-w-[1400px] transition-all duration-300",
                "border border-white/20 bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]", // Base glass
                "after:absolute after:inset-0 after:z-[-1] after:rounded-[inherit] after:bg-gradient-to-br after:from-white/10 after:to-transparent after:pointer-events-none", // Upper left shine
                "before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] before:pointer-events-none", // Inner rim
                isOpen ? "rounded-3xl" : "rounded-2xl"
            )}
            style={{ backdropFilter: 'blur(16px) saturate(180%) url("#navbar-glass")' }} // The Real Liquid Effect
        >
            <div className="w-full relative flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo - Aligned Left */}
                <Link href="/" className="flex items-center space-x-2 mr-auto">
                    <Image
                        src="/images/Logo.gif"
                        alt="Losos4 Logo"
                        width={156}
                        height={52}
                        className="h-[52px] w-auto object-contain"
                        priority
                    />
                </Link>

                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-1">
                    {navLinks.map((link) => (
                        <LiquidNavLink
                            key={link.href}
                            href={link.href}
                        >
                            {link.label}
                        </LiquidNavLink>
                    ))}
                    <LiquidGlassFilters />
                </nav>

                {/* Contact Button - Aligned Right */}
                <div className="hidden md:flex items-center ml-auto">
                    <Link href="/contact">
                        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-sm" size="sm">
                            Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle - Aligned Right (Mobile Only) */}
                <button
                    className="flex md:hidden p-2 text-white hover:text-accent transition-colors ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-white/10 bg-transparent"
                >
                    <div className="container flex flex-col space-y-4 py-6 px-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-accent",
                                    pathname === link.href ? "text-accent" : "text-white"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white shadow-sm">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
