"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Settings, Zap, Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const services = [
    {
        icon: Settings,
        title: "Mechanical Engineering",
        description: "Comprehensive HVAC, plumbing, and mechanical systems design for optimal performance",
        href: "/services/mechanical",
    },
    {
        icon: Zap,
        title: "Electrical Engineering",
        description: "Power distribution, lighting design, and electrical infrastructure solutions",
        href: "/services/electrical",
    },
    {
        icon: Shield,
        title: "Fire Safety Systems",
        description: "Advanced fire detection, suppression, and life safety systems engineering",
        href: "/services/fire-safety",
    },
];

export function ServicesTeaserSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-4"
                    >
                        <span className="text-sm font-medium text-primary">Our Services</span>
                    </motion.div>

                    <div className="mb-6">
                        <TypewriterEffect
                            words={[
                                { text: "Engineering" },
                                { text: "Excellence" },
                                { text: "Across" },
                                { text: "All", className: "text-primary" },
                                { text: "Disciplines", className: "text-primary" },
                            ]}
                            className="text-3xl md:text-5xl font-bold justify-center"
                        />
                    </div>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Delivering innovative MEP solutions tailored to your project needs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={service.href}>
                                <GlassCard className="p-8 h-full hover:border-primary/50 transition-all duration-300 group">
                                    <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </GlassCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:gap-3 transition-all"
                    >
                        View All Services
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
