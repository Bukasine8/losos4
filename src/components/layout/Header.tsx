"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [mobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 bg-losos-dark/95 backdrop-blur-md",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="relative w-10 h-10 md:w-16 md:h-16 overflow-visible ml-4 md:ml-20">
                        <Image
                            src="/images/Logo.png"
                            alt="Losos4 Logo"
                            fill
                            className="object-contain scale-[2.5] md:scale-[3.5]"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium uppercase tracking-widest hover:text-losos-blue transition-colors",
                                pathname === item.href ? "text-losos-blue" : "text-gray-300"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" asChild>
                        <Link href="/schedule">Schedule a Meeting</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={cn("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen && "rotate-45 translate-y-2")} />
                        <span className={cn("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen && "opacity-0")} />
                        <span className={cn("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen && "-rotate-45 -translate-y-2.5")} />
                    </div>
                </button>

                {/* Mobile Fullscreen Menu */}
                <div className={cn(
                    "fixed inset-0 bg-losos-dark z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}>
                    <nav className="flex flex-col items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "text-2xl font-bold uppercase tracking-widest hover:text-losos-blue transition-colors",
                                    pathname === item.href ? "text-losos-blue" : "text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-8">
                            <Button variant="primary" size="lg" asChild onClick={() => setMobileMenuOpen(false)}>
                                <Link href="/schedule">Schedule a Meeting</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
