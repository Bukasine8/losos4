"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Losos4's project management team kept our complex industrial renovation on track despite numerous unforeseen challenges. Their communication was impeccable.",
        author: "Michael Chen",
        role: "Director of Operations, TechFab Industries"
    },
    {
        quote: "The level of detail in their cost estimation and schedule management saved us significant capital. Highly recommended for large-scale infrastructure projects.",
        author: "Sarah Williams",
        role: "Project Lead, City Infrastructure Dept."
    }
];

export function ProjectManagementTestimonialsSection() {
    return (
        <section className="py-20 bg-muted/10">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold font-display">Client Success Stories</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <GlassCard className="p-8 h-full flex flex-col relative">
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-500/20" />
                                <p className="text-lg text-muted-foreground italic mb-6 flex-grow">
                                    "{item.quote}"
                                </p>
                                <div>
                                    <p className="font-bold text-foreground">{item.author}</p>
                                    <p className="text-sm text-blue-400">{item.role}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
