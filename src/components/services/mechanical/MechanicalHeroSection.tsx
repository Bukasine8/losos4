"use client";

import { motion } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { EncryptedText } from "@/components/ui/EncryptedText";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function MechanicalHeroSection() {
    const subtitleWords = [
        { text: "Precision" },
        { text: "engineering" },
        { text: "for" },
        { text: "HVAC," },
        { text: "plumbing," },
        { text: "load" },
        { text: "calculations," },
        { text: "and" },
        { text: "mechanical" },
        { text: "drafting." },
    ];

    return (
        <section className="relative h-[55vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image with Engineering Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2532&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            </div>

            {/* Particle Field - Orange/Amber for Mechanical theme variation */}
            <div className="absolute inset-0 z-0 opacity-50">
                <ParticleField particleCount={40} particleColor="rgba(251, 146, 60, 0.3)" />
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full glass border border-orange-500/20 mb-6"
                    >
                        <span className="text-sm font-medium text-orange-400">Services / Mechanical Design</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
                        <EncryptedText
                            text="Mechanical Design Services"
                            className="gradient-text-accent"
                            revealDelayMs={40}
                        />
                    </h1>

                    <div className="max-w-3xl mx-auto">
                        <TypewriterEffect
                            words={subtitleWords}
                            className="text-lg md:text-xl text-foreground/80 justify-center"
                            cursorClassName="bg-orange-500"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
