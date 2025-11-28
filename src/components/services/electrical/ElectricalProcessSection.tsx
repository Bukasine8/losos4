"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, Calculator, FileCheck, CheckCircle } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const steps = [
    {
        icon: ClipboardList,
        title: "Requirements",
        description: "We gather detailed project requirements and constraints."
    },
    {
        icon: PenTool,
        title: "Conceptual Layout",
        description: "Initial design sketches and system architecture planning."
    },
    {
        icon: Calculator,
        title: "Calculations",
        description: "Rigorous load analysis and equipment sizing."
    },
    {
        icon: FileCheck,
        title: "Detailed Drafting",
        description: "Production of construction-ready drawings and schedules."
    },
    {
        icon: CheckCircle,
        title: "Final Review",
        description: "Quality assurance and code compliance verification."
    }
];

export function ElectricalProcessSection() {
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
                                { text: "Design" },
                                { text: "Workflow", className: "gradient-text" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground">
                        A structured approach ensuring precision at every stage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 z-10">
                                <step.icon className="w-10 h-10 text-primary" />
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
