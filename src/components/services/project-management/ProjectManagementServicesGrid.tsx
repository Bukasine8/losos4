"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    KanbanSquare,
    HardHat,
    CircleDollarSign,
    Users,
    CalendarClock,
    ClipboardCheck,
    MessageSquare
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const services = [
    {
        icon: KanbanSquare,
        title: "Full Lifecycle Management",
        description: "Comprehensive oversight from project initiation to closure.",
        color: "text-blue-400"
    },
    {
        icon: HardHat,
        title: "Construction Supervision",
        description: "On-site management to ensure construction aligns with design specifications.",
        color: "text-orange-400"
    },
    {
        icon: CircleDollarSign,
        title: "Budgeting & Cost Estimation",
        description: "Detailed financial planning and ongoing cost tracking to prevent overruns.",
        color: "text-green-400"
    },
    {
        icon: Users,
        title: "Vendor Coordination",
        description: "Managing contractors and suppliers to ensure timely delivery and quality.",
        color: "text-purple-400"
    },
    {
        icon: CalendarClock,
        title: "Schedule Management",
        description: "Developing and maintaining critical path schedules to meet deadlines.",
        color: "text-cyan-400"
    },
    {
        icon: ClipboardCheck,
        title: "QA/QC Monitoring",
        description: "Rigorous quality assurance processes to maintain high standards.",
        color: "text-red-400"
    },
    {
        icon: MessageSquare,
        title: "Stakeholder Communication",
        description: "Transparent reporting and risk management for all project stakeholders.",
        color: "text-yellow-400"
    }
];

export function ProjectManagementServicesGrid() {
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
                                { text: "Management" },
                                { text: "Capabilities", className: "text-blue-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We bring structure, clarity, and accountability to complex engineering projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full p-6 group hover:border-blue-500/50 transition-colors duration-300">
                                <div className={`mb-4 p-3 rounded-lg bg-background/50 w-fit group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
