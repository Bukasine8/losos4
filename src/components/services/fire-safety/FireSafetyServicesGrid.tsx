"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    Droplets,
    Bell,
    AlertTriangle,
    Wind,
    DoorOpen,
    ClipboardCheck,
    HardHat
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const services = [
    {
        icon: Droplets,
        title: "Fire Protection Systems",
        description: "Design of sprinkler systems, hydrants, hose reels, and suppression networks.",
        color: "text-blue-400"
    },
    {
        icon: Bell,
        title: "Fire Alarm & Detection",
        description: "Intelligent alarm systems with smoke, heat, and flame detectors.",
        color: "text-red-400"
    },
    {
        icon: AlertTriangle,
        title: "Risk Assessment",
        description: "Comprehensive hazard analysis to identify and mitigate potential fire risks.",
        color: "text-yellow-400"
    },
    {
        icon: Wind,
        title: "Smoke Control",
        description: "Ventilation and pressurization systems to maintain tenable conditions during fire.",
        color: "text-slate-400"
    },
    {
        icon: DoorOpen,
        title: "Emergency Egress",
        description: "Evacuation planning, exit signage, and emergency lighting design.",
        color: "text-green-400"
    },
    {
        icon: ClipboardCheck,
        title: "Compliance Audits",
        description: "Inspections to ensure existing systems meet current fire safety regulations.",
        color: "text-purple-400"
    },
    {
        icon: HardHat,
        title: "Project Supervision",
        description: "On-site supervision to ensure fire safety systems are installed correctly.",
        color: "text-orange-400"
    }
];

export function FireSafetyServicesGrid() {
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
                                { text: "Fire" },
                                { text: "Safety" },
                                { text: "Solutions", className: "text-red-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive protection strategies designed to meet the highest safety standards.
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
                            <GlassCard className="h-full p-6 group hover:border-red-500/50 transition-colors duration-300">
                                <div className={`mb-4 p-3 rounded-lg bg-background/50 w-fit group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
