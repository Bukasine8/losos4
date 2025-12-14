"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, LayoutGrid, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonials } from "@/components/home/Testimonials";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";


const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

            {/* SECTION 1: HERO (Gradient + Curved Divider) */}
            <section className="relative bg-gradient-to-br from-indigo-600 to-blue-500 pt-24 pb-48 md:pt-32 md:pb-60 lg:pt-40 lg:pb-72 overflow-hidden">

                {/* Irregular solid dark blue blob - Top Left (Partially Hidden) */}
                <div className="absolute -top-64 -left-64 w-[800px] h-[800px] z-0 opacity-100 pointer-events-none mix-blend-multiply">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#010513]">
                        <path d="M42.7,-72.2C56.3,-65.8,69.1,-58.1,78.3,-47.5C87.5,-36.9,93.1,-23.4,91.8,-10.3C90.5,2.8,82.3,15.5,73.5,26.9C64.7,38.3,55.3,48.4,44.5,56.9C33.7,65.4,21.5,72.3,8.7,73.8C-4.1,75.3,-17.5,71.4,-29.4,65.3C-41.3,59.2,-51.7,50.9,-60.8,40.8C-69.9,30.7,-77.7,18.8,-79.3,5.9C-80.9,-7,-76.3,-20.9,-68.6,-32.8C-60.9,-44.7,-50.1,-54.6,-38.2,-61.7C-26.3,-68.8,-13.2,-73.1,0.6,-74.1C14.4,-75.1,29.1,-78.6,42.7,-72.2Z" transform="translate(100 100)" />
                    </svg>
                </div>

                {/* Hero Content */}
                <div className="container relative z-10 px-4 md:px-6 mt-12">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="flex flex-col items-start gap-6 max-w-[850px]"
                    >
                        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
                            Trusted Engineering Consultants
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#ECF0FE]">
                            Engineering You Can Trust. <br />
                            Results You Can Measure.
                        </h1>
                        <p className="max-w-[700px] text-lg md:text-xl leading-relaxed" style={{ color: '#ECF0FE' }}>
                            Delivering precise, reliable, and innovative engineering solutions across Mechanical, Electrical, Fire, and Project Management disciplines.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link href="/schedule">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="bg-white text-indigo-600 hover:bg-gray-100 flex items-center space-x-2 px-8 py-3 text-base h-12 font-semibold"
                                >
                                    <span>Schedule a Meeting</span>
                                </HoverBorderGradient>
                            </Link>
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8 h-12 text-base bg-transparent">
                                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Divider → NEXT section (slate-950) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[160px]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path d="M0,80 C240,140 480,140 720,100 960,60 1200,40 1440,60 L1440,160 L0,160 Z" fill="#020617" />
                    </svg>
                </div>
            </section>

            {/* SECTION 2: ABOUT PREVIEW (Slate-950 + Curved/Wavy) */}
            <section className="relative bg-slate-950 py-20 md:py-32">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Precision Engineering Meets <br className="hidden lg:block" />Practical Innovation</h2>
                            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                                LOSOS-4 CONSULTANTS LTD. is an indigenous multidisciplinary engineering consulting firm providing high-quality Mechanical, Electrical, Fire Engineering, and Project Management services.
                            </p>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                With over 200 years of combined technical experience, we help clients bring complex projects to life—safely, efficiently, and with precision.
                            </p>
                            <Link href="/about" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                                Learn More About Us <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-video w-full rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 group">
                                <Image
                                    src="/images/engineering-team.png"
                                    alt="Losos4 Engineering Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 right-0 p-8">
                                    <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10 max-w-[200px] transform transition-transform duration-500 hover:scale-105">
                                        <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Experience</p>
                                        <p className="text-4xl font-extrabold text-white">200+</p>
                                        <p className="text-xs font-medium text-slate-400">Years Combined Expertise</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Divider → NEXT section (slate-900) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[160px]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path d="M0,120 C300,40 600,40 900,80 1140,110 1320,120 1440,100 L1440,160 L0,160 Z" fill="#0f172a" />
                    </svg>
                </div>
            </section>

            {/* SECTION 3: CORE SERVICES (Slate-900 + Curve) */}
            <section className="relative bg-slate-900 py-24 md:py-32">
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Core Services</h2>
                        <p className="text-slate-400 text-lg">Comprehensive engineering solutions tailored to your unique project requirements.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { title: "Mechanical", icon: <Layers className="h-8 w-8" />, desc: "HVAC, ventilation, and mechanical systems design." },
                            { title: "Electrical", icon: <Zap className="h-8 w-8" />, desc: "Power distribution, lighting, metering, and fault analysis." },
                            { title: "Fire Engineering", icon: <ShieldCheck className="h-8 w-8" />, desc: "Fire strategy, safety reports, and code compliance." },
                            { title: "Project Management", icon: <LayoutGrid className="h-8 w-8" />, desc: "End-to-end planning, coordination, and delivery." },
                        ].map((service, index) => (
                            <motion.div key={index} variants={fadeIn}>
                                <Card className="h-full bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 group">
                                    <CardHeader>
                                        <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed text-slate-400">{service.desc}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Divider → NEXT section (slate-950) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[160px]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path d="M0,60 C240,100 480,120 720,110 960,100 1200,60 1440,80 L1440,160 L0,160 Z" fill="#020617" />
                    </svg>
                </div>
            </section>

            {/* SECTION 4: WHY CHOOSE US (Slate-950 + Angular Divider) */}
            <section className="relative bg-slate-950 py-24 md:py-32">
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Why Choose Losos4</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">We combine deep technical expertise with a commitment to reliability.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Precision-Driven", desc: "Simulation-driven design ensuring 100% accuracy." },
                            { title: "Regulatory Compliance", desc: "Full adherence to COREN, ASHRAE, and local codes." },
                            { title: "Proven Results", desc: "Successful delivery of complex projects across Nigeria." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-indigo-500/30 transition-colors">
                                <CheckCircle2 className="h-10 w-10 text-indigo-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Angular Divider → NEXT section (slate-900) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[160px]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path d="M0,40 L1440,120 L1440,160 L0,160 Z" fill="#0f172a" />
                    </svg>
                </div>
            </section>

            {/* SECTION 5: TESTIMONIALS (Slate-900 + Arc Divider) */}
            <section className="relative bg-slate-900 py-24 md:py-32">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

                <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">What Our Clients Say</h2>
                        <p className="text-slate-400 text-lg">Trusted by industry leaders for critical engineering projects.</p>
                    </div>

                    <div className="w-full flex justify-center mt-8">
                        <Testimonials />
                    </div>
                </div>

                {/* Arc Divider → NEXT section (slate-800) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[160px]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path d="M0,120 Q720,20 1440,120 L1440,160 L0,160 Z" fill="#1e293b" />
                    </svg>
                </div>
            </section>

            {/* SECTION 6: CTA (Slate-800 + Straight End) */}
            <section className="relative bg-slate-800 py-20 md:py-32">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-indigo-900/50 to-slate-900/50 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to start your project?</h2>
                            <p className="text-indigo-200 text-lg">Our expert engineers are here to help you build with confidence.</p>
                        </div>
                        <Link href="/schedule">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-indigo-600 hover:bg-indigo-500 text-white flex items-center space-x-2 px-8 py-4 text-lg h-14"
                            >
                                <span>Schedule a Meeting</span>
                            </HoverBorderGradient>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
