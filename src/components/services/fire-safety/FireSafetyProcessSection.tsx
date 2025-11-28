"use client";

import { motion } from "framer-motion";
import { Search, PenTool, MonitorPlay, FileCheck, CheckCircle } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const steps = [
    {
        icon: Search,
        title: "Risk Study",
        description: "Identifying potential fire hazards and occupancy risks."
    },
    {
        icon: PenTool,
        title: "Concept Draft",
        description: "Developing the initial safety strategy and system selection."
    },
    {
        icon: MonitorPlay,
        title: "Simulation/Design",
        description: "Detailed hydraulic calculations and smoke modeling."
    },
    {
        icon: FileCheck,
        title: "Compliance Review",
        description: "Verifying design against NFPA and local fire codes."
    },
    {
        icon: CheckCircle,
        title: "Handover",
        description: "Final documentation and approval for installation."
    }
];

export function FireSafetyProcessSection() {
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
                                { text: "Compliance" },
                                { text: "Workflow", className: "text-red-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground">
                        A rigorous process to ensure maximum safety and regulatory approval.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border-2 border-red-500/20 flex items-center justify-center mb-6 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 z-10">
                                <step.icon className="w-10 h-10 text-red-500" />
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
