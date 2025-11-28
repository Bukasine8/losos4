"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, Calculator, FileCheck, CheckCircle } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const steps = [
    {
        icon: ClipboardList,
        title: "Concept & Requirements",
        description: "Understanding building usage, occupancy, and climate control needs."
    },
    {
        icon: PenTool,
        title: "Preliminary Draft",
        description: "Initial zoning, shaft location planning, and system selection."
    },
    {
        icon: Calculator,
        title: "Load Calculations",
        description: "Detailed thermal modeling to determine precise equipment capacity."
    },
    {
        icon: FileCheck,
        title: "Detailed Design",
        description: "Full ductwork routing, piping layout, and equipment specification."
    },
    {
        icon: CheckCircle,
        title: "Handover",
        description: "Final review, coordination checks, and delivery of construction set."
    }
];

export function MechanicalProcessSection() {
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
                                { text: "Design" },
                                { text: "Process" },
                                { text: "Flow", className: "text-orange-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground">
                        From initial concept to final construction documents.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border-2 border-orange-500/20 flex items-center justify-center mb-6 group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 z-10">
                                <step.icon className="w-10 h-10 text-orange-500" />
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
