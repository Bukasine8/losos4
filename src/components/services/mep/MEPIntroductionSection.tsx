"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Layers, Zap, Droplets } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function MEPIntroductionSection() {
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
                                    { text: "Holistic" },
                                    { text: "Building" },
                                    { text: "Systems" },
                                    { text: "for" },
                                    { text: "Maximum" },
                                    { text: "Efficiency", className: "text-purple-400" },
                                ]}
                                className="text-3xl font-bold font-display justify-start"
                            />
                        </div>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                Modern buildings require seamless integration of Mechanical, Electrical, and Plumbing (MEP) systems. Our consulting approach breaks down silos to create unified designs where systems work in harmony, not in isolation.
                            </p>
                            <p>
                                We bring multidisciplinary expertise to every project, ensuring that HVAC loads are matched with electrical capacity, and plumbing layouts respect structural constraints. The result is a high-performance building that is cost-effective to build and operate.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {[
                                { icon: Layers, text: "Integrated Design" },
                                { icon: Zap, text: "Energy Synergy" },
                                { icon: Droplets, text: "Resource Efficiency" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg bg-background/30 border border-white/5">
                                    <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                                    <span className="text-sm font-medium">{item.text}</span>
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
                        <GlassCard className="p-2 overflow-hidden border-purple-500/20">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent mix-blend-overlay" />
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
