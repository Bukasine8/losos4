"use client";

import { motion } from "framer-motion";
import { KineticButton } from "@/components/ui/KineticButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function FireSafetyCTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20" />
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
                                { text: "Prioritize" },
                                { text: "Safety" },
                                { text: "in" },
                                { text: "Every" },
                                { text: "Project", className: "text-red-400" },
                            ]}
                            className="text-3xl md:text-5xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Ensure your building is compliant and your occupants are safe with our expert fire engineering.
                    </p>

                    <Link href="/contact">
                        <KineticButton
                            variant="primary"
                            size="lg"
                            className="bg-red-600 hover:bg-red-500 shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] border-red-400/50"
                        >
                            Request Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </KineticButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
