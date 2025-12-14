"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { faqData } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

export default function FAQPage() {
    const [activeTab, setActiveTab] = React.useState("general");

    const categories = [
        { id: "general", label: "General" },
        { id: "services", label: "Our Services" },
        { id: "workflow", label: "Project Workflow" },
        { id: "certifications", label: "Certifications & Compliance" },
        { id: "billing", label: "Billing & Engagement" },
        { id: "technical", label: "Technical Questions" },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-muted/30 py-24 sm:py-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #264653 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Shapes */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1, rotate: 10 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -top-20 -right-20 h-96 w-96 rounded-full border border-primary/20"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1, rotate: -15 }}
                    transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full border border-secondary/20"
                />

                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                            Frequently Asked Questions
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Clear answers to help you better understand our engineering services and processes.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden leading-none">
                    <svg className="block h-full w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
                    </svg>
                </div>
            </section>

            {/* 2. FAQ Content */}
            <section className="container mx-auto px-4 py-16 sm:py-24">
                <Tabs
                    defaultValue="general"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="flex flex-col items-center"
                >
                    {/* Categories */}
                    <TabsList className="mb-12 flex h-auto w-full max-w-5xl flex-wrap justify-center gap-2 bg-transparent p-0">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className={cn(
                                    "rounded-full border border-transparent px-6 py-2.5 text-base font-medium transition-all hover:bg-muted/50 data-[state=active]:border-accent/20 data-[state=active]:bg-accent/10 data-[state=active]:text-accent text-muted-foreground",
                                    // Hover animation logic is handled by shadcn TabsTrigger defaults + our overrides
                                )}
                            >
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Answers */}
                    <div className="w-full max-w-3xl">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {categories.map((category) => (
                                <TabsContent key={category.id} value={category.id} className="mt-0">
                                    <div className="grid gap-6">
                                        <div className="mb-2 text-center md:text-left">
                                            <h2 className="text-2xl font-bold text-primary">{category.label}</h2>
                                            <div className="mt-2 h-1 w-20 rounded-full bg-accent md:mx-0 mx-auto" />
                                        </div>

                                        <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                                            <Accordion type="single" className="w-full">
                                                {(faqData[category.id as keyof typeof faqData] || []).map((item, index) => (
                                                    <AccordionItem
                                                        key={index}
                                                        value={`item-${index}`}
                                                        trigger={
                                                            <span className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                                                {item.question}
                                                            </span>
                                                        }
                                                        className={index === (faqData[category.id as keyof typeof faqData]?.length || 0) - 1 ? "border-b-0" : ""}
                                                    >
                                                        <p className="leading-relaxed text-muted-foreground">
                                                            {item.answer}
                                                        </p>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </div>
                                    </div>
                                </TabsContent>
                            ))}
                        </motion.div>
                    </div>
                </Tabs>
            </section>

            {/* Call to Action */}
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold">Still have questions?</h2>
                    <p className="mb-8 text-lg text-primary-foreground/80">Can&apos;t find the answer you&apos;re looking for? Please seek for chat with our friendly team.</p>
                    <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-white transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
}
