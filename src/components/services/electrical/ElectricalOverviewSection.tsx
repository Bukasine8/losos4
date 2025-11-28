"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2 } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ElectricalOverviewSection() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="mb-4">
                            <TypewriterEffect
                                words={[
                                    { text: "Powering" },
                                    { text: "Your" },
                                    { text: "Infrastructure" },
                                    { text: "with" },
                                    { text: "Precision", className: "gradient-text" },
                                ]}
                                className="text-3xl font-bold font-display justify-start"
                            />
                        </div>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                At Losos4, we understand that a robust electrical system is the heartbeat of any modern facility. Our electrical design services go beyond simple wiring; we create intelligent, energy-efficient power distribution networks tailored to your specific operational needs.
                            </p>
                            <p>
                                From residential complexes to high-demand industrial plants, our engineers utilize advanced modeling software to ensure safety, compliance, and future scalability. We prioritize reliability and sustainability in every schematic we draw.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {["Safety First Approach", "Energy Efficient", "Future-Ready Design", "Code Compliant"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <GlassCard className="p-2 overflow-hidden">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
