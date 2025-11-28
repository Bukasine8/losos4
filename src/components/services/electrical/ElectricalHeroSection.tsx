"use client";

import { motion } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { EncryptedText } from "@/components/ui/EncryptedText";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ElectricalHeroSection() {
    const subtitleWords = [
        { text: "High-precision" },
        { text: "electrical" },
        { text: "layouts," },
        { text: "power" },
        { text: "distribution" },
        { text: "planning," },
        { text: "and" },
        { text: "energy-efficient" },
        { text: "solutions." },
    ];

    return (
        <section className="relative h-[55vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image with Engineering Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            </div>

            {/* Particle Field */}
            <div className="absolute inset-0 z-0 opacity-50">
                <ParticleField particleCount={40} particleColor="rgba(56, 189, 248, 0.3)" />
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-6"
                    >
                        <span className="text-sm font-medium text-primary">Services / Electrical Design</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
                        <EncryptedText
                            text="Electrical Design Services"
                            className="gradient-text"
                            revealDelayMs={40}
                        />
                    </h1>

                    <div className="max-w-3xl mx-auto">
                        <TypewriterEffect
                            words={subtitleWords}
                            className="text-lg md:text-xl text-foreground/80 justify-center"
                            cursorClassName="bg-primary"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
