"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    LayoutTemplate,
    Zap,
    Lightbulb,
    Activity,
    Cable,
    Router,
    Leaf,
    FileSpreadsheet
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const services = [
    {
        icon: LayoutTemplate,
        title: "2D Electrical Floor Plans",
        description: "Detailed layouts showing outlet placement, switching logic, and fixture locations.",
        color: "text-blue-400"
    },
    {
        icon: Zap,
        title: "Power Distribution",
        description: "Comprehensive distribution planning from main switchboards to final circuits.",
        color: "text-yellow-400"
    },
    {
        icon: Lightbulb,
        title: "Lighting Planning",
        description: "Illumination design and simulation for optimal visual comfort and efficiency.",
        color: "text-amber-300"
    },
    {
        icon: Activity,
        title: "Single Line Diagrams (SLD)",
        description: "Schematic representation of the electrical installation for system analysis.",
        color: "text-red-400"
    },
    {
        icon: FileSpreadsheet,
        title: "Load Calculation",
        description: "Accurate sizing of cables, breakers, and transformers based on demand.",
        color: "text-green-400"
    },
    {
        icon: Cable,
        title: "Cable Routing Design",
        description: "Strategic routing paths for cable trays, ladders, and conduits.",
        color: "text-orange-400"
    },
    {
        icon: Router,
        title: "Low Voltage Systems",
        description: "Integration of CCTV, Access Control, Fire Alarm, and ICT networks.",
        color: "text-purple-400"
    },
    {
        icon: Leaf,
        title: "Energy Optimization",
        description: "Sustainable design strategies to reduce power consumption and costs.",
        color: "text-emerald-400"
    }
];

export function ElectricalServicesGrid() {
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
                                { text: "Core" },
                                { text: "Capabilities", className: "gradient-text" },
                            ]}
                            className="text-3xl md:text-4xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our comprehensive suite of electrical engineering services covers every aspect of your project lifecycle.
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
                            <GlassCard className="h-full p-6 group hover:border-primary/50 transition-colors duration-300">
                                <div className={`mb-4 p-3 rounded-lg bg-background/50 w-fit group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
