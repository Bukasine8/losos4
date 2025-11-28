"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, Layers, CheckCircle2 } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const steps = [
    {
        icon: Search,
        title: "Assessment",
        description: "Evaluating existing conditions and project goals."
    },
    {
        icon: BarChart2,
        title: "Analysis",
        description: "Modeling performance and identifying optimization opportunities."
    },
    {
        icon: Layers,
        title: "Design Integration",
        description: "Synthesizing mechanical, electrical, and plumbing solutions."
    },
    {
        icon: CheckCircle2,
        title: "Verification",
        description: "Testing and validating system performance against design intent."
    }
];

export function MEPMethodologySection() {
    return (
        <section className="py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="mb-4">
                        <TypewriterEffect
                            words={[
                                { text: "Our" },
                                { text: "Methodology", className: "text-purple-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground">
                        A cyclical approach to continuous improvement and integrated design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border-2 border-purple-500/20 flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 z-10">
                                <step.icon className="w-10 h-10 text-purple-500" />
                            </div>
                            <div className="absolute top-0 right-0 text-6xl font-bold text-white/5 -z-10 select-none">
                                0{index + 1}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
