"use client";

import { motion } from "framer-motion";
import { KineticButton } from "@/components/ui/KineticButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function MechanicalCTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20" />
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-6">
                        <TypewriterEffect
                            words={[
                                { text: "Start" },
                                { text: "Your" },
                                { text: "Mechanical" },
                                { text: "Design" },
                                { text: "Project" },
                                { text: "Today", className: "text-orange-400" },
                            ]}
                            className="text-3xl md:text-5xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Get expert HVAC and plumbing engineering solutions for your building.
                    </p>

                    <Link href="/contact">
                        <KineticButton
                            variant="primary"
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] border-orange-400/50"
                        >
                            Get a Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </KineticButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
