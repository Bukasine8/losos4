"use client";

import { motion } from "framer-motion";
import { Map, Calendar, Hammer, Activity, PackageCheck } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const steps = [
    {
        icon: Map,
        title: "Planning",
        description: "Defining scope, objectives, and resource requirements."
    },
    {
        icon: Calendar,
        title: "Scheduling",
        description: "Creating detailed timelines and critical path analysis."
    },
    {
        icon: Hammer,
        title: "Execution",
        description: "Coordinating teams and managing on-site activities."
    },
    {
        icon: Activity,
        title: "Monitoring",
        description: "Tracking progress, costs, and quality against baselines."
    },
    {
        icon: PackageCheck,
        title: "Delivery",
        description: "Final inspection, commissioning, and project closure."
    }
];

export function ProjectManagementWorkflowSection() {
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
                                { text: "Project" },
                                { text: "Lifecycle", className: "text-blue-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground">
                        A structured methodology for predictable success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border-2 border-blue-500/20 flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 z-10">
                                <step.icon className="w-10 h-10 text-blue-500" />
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
