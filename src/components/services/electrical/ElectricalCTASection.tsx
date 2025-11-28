"use client";

import { motion } from "framer-motion";
import { KineticButton } from "@/components/ui/KineticButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ElectricalCTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
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
                                { text: "Need" },
                                { text: "Electrical" },
                                { text: "Layouts" },
                                { text: "for" },
                                { text: "Your" },
                                { text: "Next" },
                                { text: "Project?", className: "gradient-text" },
                            ]}
                            className="text-3xl md:text-5xl font-bold font-display justify-center"
                        />
                    </div>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Partner with Losos4 for engineering solutions that power success.
                    </p>

                    <Link href="/contact">
                        <KineticButton
                            variant="primary"
                            size="lg"
                            className="shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]"
                        >
                            Request a Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </KineticButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
