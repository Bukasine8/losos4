"use client";

import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-white"
                >
                    <div className="mb-6">
                        <TypewriterEffect
                            words={[
                                { text: "Ready" },
                                { text: "to" },
                                { text: "Transform" },
                                { text: "Your" },
                                { text: "Project?", className: "text-white" },
                            ]}
                            className="text-3xl md:text-5xl font-bold justify-center text-white"
                            cursorClassName="bg-white"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
                    >
                        Let's discuss how our engineering expertise can bring your vision to life
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform group"
                        >
                            <Link href="/book-meeting">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book a Consultation
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            <Link href="/contact">
                                Send Us a Message
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 text-sm text-white/70"
                    >
                        📞 Call us at{" "}
                        <a href="tel:+2348012345678" className="underline hover:text-white transition-colors">
                            +234 (801) 234-5678
                        </a>
                        {" "}or email{" "}
                        <a href="mailto:info@losos.com" className="underline hover:text-white transition-colors">
                            info@losos.com
                        </a>
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
