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
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 bg-losos-dark/95 backdrop-blur-md",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-visible ml-16 md:ml-20">
                        <Image
                            src="/images/Logo.png"
                            alt="Losos4 Logo"
                            fill
                            className="object-contain scale-[3.5]"
                            priority
                        />
                    </div>

                </Link>

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

                {/* Mobile Menu Toggle (Simplified) */}
                <button className="md:hidden text-white">
                    MENU
                </button>
            </div>
        </header>
    );
}
