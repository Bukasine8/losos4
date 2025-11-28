"use client";

import { motion } from "framer-motion";
import { KineticButton } from "@/components/ui/KineticButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ProjectManagementCTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
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
                                { text: "Let" },
                                { text: "Us" },
                                { text: "Manage" },
                                { text: "Your" },
                                { text: "Next" },
                                { text: "Project", className: "text-blue-400" },
                            ]}
                            className="text-3xl md:text-5xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Experience the difference of professional engineering project management.
                    </p>

                    <Link href="/contact">
                        <KineticButton
                            variant="primary"
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] border-blue-400/50"
                        >
                            Start Project Discussion
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </KineticButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
