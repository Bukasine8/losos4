"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const deliverables = [
    "Detailed electrical floor plans (AutoCAD/Revit)",
    "Comprehensive Load Calculation Reports",
    "Single Line Diagrams (SLD) & Schematics",
    "Lighting Simulation Results (Dialux)",
    "Cable Sizing & Voltage Drop Calculations",
    "Panel Board Schedules",
    "Bill of Quantities (BOQ) for Electrical Works"
];

export function ElectricalDeliverablesSection() {
    return (
        <section className="py-20 bg-primary/5 border-y border-white/5">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="mb-6">
                            <TypewriterEffect
                                words={[
                                    { text: "What" },
                                    { text: "We" },
                                    { text: "Deliver", className: "gradient-text" },
                                ]}
                                className="text-3xl font-bold font-display justify-start"
                            />
                        </div>
                        <p className="text-muted-foreground mb-8">
                            We provide comprehensive documentation that ensures your project is ready for implementation, permitting, and construction.
                        </p>

                        <ul className="space-y-4">
                            {deliverables.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-lg">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 shadow-2xl text-center">
                            <FileText className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                            <h3 className="text-xl font-bold mb-2">Sample Documentation</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Download a sample set of our electrical design deliverables to see the quality of our work.
                            </p>
                            <button className="w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-colors">
                                <Download className="w-4 h-4" />
                                <span>Download Sample PDF</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
