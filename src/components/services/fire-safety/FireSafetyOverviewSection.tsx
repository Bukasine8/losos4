"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, Flame, FileCheck } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function FireSafetyOverviewSection() {
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
                                    { text: "Protecting" },
                                    { text: "Lives" },
                                    { text: "&" },
                                    { text: "Assets" },
                                    { text: "with" },
                                    { text: "Compliance", className: "text-red-400" },
                                ]}
                                className="text-3xl font-bold font-display justify-start"
                            />
                        </div>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                Fire safety engineering is a critical component of building design that cannot be compromised. At Losos4, we combine engineering precision with deep regulatory knowledge to create fire protection systems that save lives and protect property.
                            </p>
                            <p>
                                Our certified specialists design comprehensive fire suppression and detection systems that strictly adhere to NFPA standards and local fire codes. We ensure your facility is prepared for emergencies while minimizing false alarms and maintenance overhead.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {[
                                { icon: ShieldCheck, text: "NFPA Compliant" },
                                { icon: Flame, text: "Advanced Detection" },
                                { icon: FileCheck, text: "Code Approval" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg bg-background/30 border border-white/5">
                                    <item.icon className="w-8 h-8 text-red-400 mb-2" />
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
                        <GlassCard className="p-2 overflow-hidden border-red-500/20">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1615818499660-3035c694a500?q=80&w=2070&auto=format&fit=crop')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent mix-blend-overlay" />
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
