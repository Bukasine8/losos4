"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, TrendingUp, Shield } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ProjectManagementOverviewSection() {
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
                                    { text: "Delivering" },
                                    { text: "Projects" },
                                    { text: "on" },
                                    { text: "Time," },
                                    { text: "on" },
                                    { text: "Budget," },
                                    { text: "and" },
                                    { text: "Beyond" },
                                    { text: "Expectations", className: "text-blue-400" },
                                ]}
                                className="text-3xl font-bold font-display justify-start"
                            />
                        </div>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                Successful engineering projects require more than just technical drawings; they demand rigorous planning, strategic coordination, and proactive risk management. At Losos4, we treat project management as a discipline of precision.
                            </p>
                            <p>
                                Our approach ensures complete visibility and control over every phase of the project lifecycle. From initial cost estimation to final handover, we act as your dedicated partner, managing vendors, schedules, and quality standards to ensure flawless execution.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {[
                                { icon: Target, text: "Strategic Planning" },
                                { icon: TrendingUp, text: "Cost Control" },
                                { icon: Shield, text: "Risk Mitigation" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg bg-background/30 border border-white/5">
                                    <item.icon className="w-8 h-8 text-blue-400 mb-2" />
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
                        <GlassCard className="p-2 overflow-hidden border-blue-500/20">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay" />
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
