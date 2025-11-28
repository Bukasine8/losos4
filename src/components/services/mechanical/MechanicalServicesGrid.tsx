"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    LayoutDashboard,
    Fan,
    Settings2,
    Calculator,
    Droplets,
    PencilRuler,
    Layers,
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const services = [
    {
        icon: LayoutDashboard,
        title: "2D Mechanical Floor Plans",
        description: "Detailed equipment layouts and spatial planning for mechanical rooms and shafts.",
        color: "text-blue-400"
    },
    {
        icon: Fan,
        title: "HVAC System Design",
        description: "Heating, ventilation, and air conditioning systems tailored for optimal climate control.",
        color: "text-cyan-400"
    },
    {
        icon: Settings2,
        title: "Equipment Layout Planning",
        description: "Strategic placement of chillers, AHUs, pumps, and cooling towers for maintenance access.",
        color: "text-slate-400"
    },
    {
        icon: Calculator,
        title: "Load Calculation & Sizing",
        description: "Precise cooling/heating load analysis to size equipment correctly and efficiently.",
        color: "text-orange-400"
    },
    {
        icon: Droplets,
        title: "Plumbing & Piping Layouts",
        description: "Domestic water, sanitary, and storm drainage piping systems design.",
        color: "text-blue-500"
    },
    {
        icon: PencilRuler,
        title: "Mechanical Drafting",
        description: "High-quality AutoCAD and Revit drafting for construction documentation.",
        color: "text-purple-400"
    },
    {
        icon: Layers,
        title: "MEP Coordination",
        description: "Clash detection and coordination with structural and electrical systems.",
        color: "text-red-400"
    }
];

export function MechanicalServicesGrid() {
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
                                { text: "Mechanical" },
                                { text: "Capabilities", className: "text-orange-400" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From conceptual design to detailed fabrication drawings, we cover all mechanical engineering needs.
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
                            <GlassCard className="h-full p-6 group hover:border-orange-500/50 transition-colors duration-300">
                                <div className={`mb-4 p-3 rounded-lg bg-background/50 w-fit group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
