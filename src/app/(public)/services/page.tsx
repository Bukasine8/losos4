"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Flame,
    Wind,
    LayoutGrid,
    ArrowRight,
    CheckCircle2,
    Settings,
    Activity,
    FileText
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">

            {/* 1. Services Overview Hero */}
            <section className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>

                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <Settings className="mr-2 h-4 w-4" />
                            Multidisciplinary Expertise
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-primary">
                            Our Engineering Expertise
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Comprehensive, simulation-driven engineering solutions across Mechanical, Electrical, Fire, and Project Management disciplines.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Service Category Cards */}
            <section className="w-full py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                title: "Mechanical",
                                icon: Wind,
                                color: "text-blue-500",
                                desc: "HVAC, hydraulics, and thermal modeling for optimal building performance.",
                                link: "#mechanical"
                            },
                            {
                                title: "Electrical",
                                icon: Zap,
                                color: "text-yellow-500",
                                desc: "Power systems, lighting design, and low-voltage infrastructure.",
                                link: "#electrical"
                            },
                            {
                                title: "Fire Engineering",
                                icon: Flame,
                                color: "text-red-500",
                                desc: "Fire safety strategies, protection systems, and code compliance.",
                                link: "#fire"
                            },
                            {
                                title: "Project Management",
                                icon: LayoutGrid,
                                color: "text-emerald-500",
                                desc: "End-to-end delivery, cost control, and technical supervision.",
                                link: "#pm"
                            },
                        ].map((service, i) => (
                            <motion.div key={i} variants={fadeIn}>
                                <Card className="h-full border-border/50 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group">
                                    <CardHeader>
                                        <div className={`w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300`}>
                                            <service.icon className={`h-6 w-6 ${service.color} group-hover:text-white transition-colors`} />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base mb-4">{service.desc}</CardDescription>
                                        <Link href={service.link} className="inline-flex items-center text-accent text-sm font-medium hover:text-accent/80 transition-colors">
                                            View Details <ArrowRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. Detailed Services Grid */}
            <section className="w-full py-20 bg-slate-50 dark:bg-slate-900 border-t border-border/40">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Detailed Capabilities</h2>
                        <p className="text-muted-foreground text-lg">Explore our specific service offerings by discipline.</p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <Tabs defaultValue="mechanical" className="w-full">
                            <div className="flex justify-center mb-12">
                                <TabsList className="bg-white dark:bg-slate-800 p-1 rounded-full border border-border">
                                    <TabsTrigger value="mechanical" className="rounded-full px-6">Mechanical</TabsTrigger>
                                    <TabsTrigger value="electrical" className="rounded-full px-6">Electrical</TabsTrigger>
                                    <TabsTrigger value="fire" className="rounded-full px-6">Fire</TabsTrigger>
                                    <TabsTrigger value="pm" className="rounded-full px-6">Management</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="mechanical" className="mt-0 focus-visible:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Wind className="h-6 w-6 text-accent" /> HVAC Systems</h3>
                                        <ul className="space-y-4">
                                            {["Central Air Conditioning Design", "Ventilation & Air Quality Systems", "Thermal Load Calculations (HAP)", "VRF/VRV System Design"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Settings className="h-6 w-6 text-accent" /> Plumbing & Hydraulics</h3>
                                        <ul className="space-y-4">
                                            {["Water Supply & Distribution", "Sanitary & Drainage Systems", "Water Treatment Plants", "Pump Room Design"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="electrical" className="mt-0 focus-visible:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Zap className="h-6 w-6 text-accent" /> Power & Lighting</h3>
                                        <ul className="space-y-4">
                                            {["High & Low Voltage Distribution", "Indoor & Outdoor Lighting Design (Dialux)", "Emergency Power Systems", "Earthing & Lightning Protection"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Activity className="h-6 w-6 text-accent" /> Low Voltage (ELV)</h3>
                                        <ul className="space-y-4">
                                            {["Fire Detection & Alarm Systems", "CCTV & Security Systems", "Access Control & Public Address", "Telecommunication Systems (Data/Voice)", "Building Management Systems (BMS)"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="fire" className="mt-0 focus-visible:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Flame className="h-6 w-6 text-accent" /> Active Protection</h3>
                                        <ul className="space-y-4">
                                            {["Sprinkler System Design", "Hydrant & Hose Reel Systems", "Gas Suppression (FM200/Novec)", "Fire Pump Room Layouts"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><FileText className="h-6 w-6 text-accent" /> Strategy & Compliance</h3>
                                        <ul className="space-y-4">
                                            {["Fire Safety Strategy Reports", "Evacuation Planning", "Code Compliance Audits", "Smoke Management Systems"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="pm" className="mt-0 focus-visible:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><LayoutGrid className="h-6 w-6 text-accent" /> Delivery & Control</h3>
                                        <ul className="space-y-4">
                                            {["Construction Supervision", "Cost Estimation & Control", "Schedule Management", "Contract Administration"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-border shadow-sm">
                                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Activity className="h-6 w-6 text-accent" /> Quality Assurance</h3>
                                        <ul className="space-y-4">
                                            {["Testing & Commissioning", "Material Approval", "Snagging & Handoff", "As-Built Documentation"].map((item, i) => (
                                                <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" /> <span className="text-muted-foreground">{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>

                        </Tabs>
                    </div>
                </div>
            </section>

            {/* 4. Methodology Preview */}
            <section className="w-full py-24 bg-background border-t border-border">
                <div className="container px-4 md:px-6">
                    <div className="bg-[#264653] rounded-3xl p-8 md:p-16 text-center text-[#FDFFF7] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[size:24px_24px] opacity-20"></div>

                        <h2 className="text-3xl font-bold mb-6 relative z-10">Our Engineering Process</h2>
                        <p className="max-w-2xl mx-auto text-slate-300 text-lg mb-12 relative z-10">
                            We follow a rigorous Systems Engineering V-Model framework to ensure every design is validated, verified, and delivered to the highest standard.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            {["Requirements", "Design", "Implementation", "Testing", "Maintenance"].map((step, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm font-semibold hover:bg-white/20 transition-colors cursor-default">
                                        {step}
                                    </div>
                                    {i < 4 && <div className="w-8 h-0.5 bg-white/20 hidden md:block mx-2"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="w-full py-20 bg-background">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Start Your Engineering Project</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
                        From initial concept to final commissioning, Losos4 is the partner you can trust.
                    </p>
                    <Button size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-10 h-14 text-lg">
                        Speak With an Engineer
                    </Button>
                </div>
            </section>

        </div>
    );
}
