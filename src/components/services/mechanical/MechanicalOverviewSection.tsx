"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Settings, Fan, Thermometer } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function MechanicalOverviewSection() {
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
                                    { text: "Optimizing" },
                                    { text: "Building" },
                                    { text: "Performance", className: "text-orange-400" },
                                    { text: "&" },
                                    { text: "Comfort" },
                                ]}
                                className="text-3xl font-bold font-display justify-start"
                            />
                        </div>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                Mechanical systems are the lungs of any building. Our mechanical design services focus on creating efficient, sustainable, and comfortable environments through precision HVAC engineering and plumbing design.
                            </p>
                            <p>
                                We specialize in complex mechanical system layouts that balance performance with energy efficiency. From load calculations to detailed ductwork routing, our designs ensure optimal airflow, temperature control, and water distribution for projects of all scales.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {[
                                { icon: Fan, text: "HVAC Efficiency" },
                                { icon: Thermometer, text: "Thermal Comfort" },
                                { icon: Settings, text: "System Reliability" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg bg-background/30 border border-white/5">
                                    <item.icon className="w-8 h-8 text-orange-400 mb-2" />
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
                        <GlassCard className="p-2 overflow-hidden border-orange-500/20">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent mix-blend-overlay" />
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
