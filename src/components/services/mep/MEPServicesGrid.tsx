"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    Cpu,
    BarChart3,
    FileText,
    Settings,
    ShieldCheck
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const services = [
    {
        icon: Cpu,
        title: "Integrated MEP Design",
        description: "Coordinated mechanical, electrical, and plumbing systems for seamless operation.",
        color: "text-purple-400"
    },
    {
        icon: BarChart3,
        title: "Energy Audits & Analysis",
        description: "Building performance analysis to identify savings and improve sustainability.",
        color: "text-green-400"
    },
    {
        icon: FileText,
        title: "Technical Reports",
        description: "Detailed feasibility studies, condition assessments, and as-built documentation.",
        color: "text-blue-400"
    },
    {
        icon: Settings,
        title: "System Optimization",
        description: "Consulting on retrofitting and upgrading existing systems for better performance.",
        color: "text-orange-400"
    },
    {
        icon: ShieldCheck,
        title: "Compliance Advisory",
        description: "Guidance on local codes, international standards, and green building certifications.",
        color: "text-red-400"
    }
];

export function MEPServicesGrid() {
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
                                { text: "Consulting" },
                                { text: "Expertise", className: "text-purple-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Strategic engineering advice to optimize your building's lifecycle value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full p-6 group hover:border-purple-500/50 transition-colors duration-300 hover:scale-[1.03]">
                                <div className={`mb-4 p-3 rounded-lg bg-background/50 w-fit group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
