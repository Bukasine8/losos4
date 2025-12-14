"use client";

import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Mock Projects Data
// Real Projects Data from Profile
const projects = [
    {
        id: 1,
        title: "Faculty of Mgmt Science Lecture Theater",
        category: "pm",
        desc: "Construction of Faculty of Management Science Lecture Theater at University of Abuja. Value: N250M.",
        status: "Completed",
        year: "2015",
        image: null // Placeholder
    },
    {
        id: 2,
        title: "AICL Garki Mall Executive Suites",
        category: "electrical",
        desc: "Electrical and mechanical services for executive office suites at Garki Mall.",
        status: "Completed",
        year: "2018",
        image: null
    },
    {
        id: 3,
        title: "AICL Area 3 Neighbourhood Center",
        category: "mechanical",
        desc: "Engineering services for the Area 3 Neighbourhood Center development.",
        status: "Completed",
        year: "2019",
        image: null
    },
    {
        id: 4,
        title: "AICL Mall Guzape",
        category: "fire",
        desc: "Fire safety and engineering systems for the Guzape Mall project.",
        status: "Completed",
        year: "2020",
        image: null
    },
    {
        id: 5,
        title: "Faculty of Agriculture",
        category: "pm",
        desc: "Construction and project management for Faculty of Agriculture facilities.",
        status: "Completed",
        year: "2016",
        image: null
    }
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">

            {/* 1. Hero Section */}
            <section className="w-full py-20 bg-background border-b border-border">
                <div className="container px-4 md:px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-primary">
                            Engineering Projects That <br /><span className="text-accent">Deliver Results</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A showcase of our technical precision in action across residential, commercial, and industrial sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Projects Grid with Filters */}
            <section className="w-full py-16 bg-slate-50 dark:bg-slate-950">
                <div className="container px-4 md:px-6">
                    <Tabs defaultValue="all" className="w-full">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Filter className="w-5 h-5" />
                                <span className="font-medium">Filter Projects:</span>
                            </div>
                            <TabsList className="bg-white dark:bg-card p-1 rounded-full border border-border overflow-x-auto max-w-full justify-start md:justify-center">
                                <TabsTrigger value="all" className="rounded-full px-4">All Projects</TabsTrigger>
                                <TabsTrigger value="mechanical" className="rounded-full px-4">Mechanical</TabsTrigger>
                                <TabsTrigger value="electrical" className="rounded-full px-4">Electrical</TabsTrigger>
                                <TabsTrigger value="fire" className="rounded-full px-4">Fire</TabsTrigger>
                                <TabsTrigger value="pm" className="rounded-full px-4">Project Mgmt</TabsTrigger>
                            </TabsList>
                        </div>

                        {["all", "mechanical", "electrical", "fire", "pm"].map((tab) => (
                            <TabsContent key={tab} value={tab} className="mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {projects
                                        .filter(p => tab === "all" || p.category === tab)
                                        .map((project) => (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <Card className="h-full overflow-hidden border-border/50 hover:shadow-xl hover:border-accent/40 transition-all duration-300 group flex flex-col">
                                                    <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                                                        {project.image ? (
                                                            <>
                                                                <Image
                                                                    src={project.image}
                                                                    alt={project.title}
                                                                    fill
                                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                />
                                                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/* Fallback Gradient */}
                                                                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-200 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-500"></div>
                                                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                                                    <span className="font-bold text-4xl text-slate-400 dark:text-slate-600">PROJECT</span>
                                                                </div>
                                                            </>
                                                        )}

                                                        <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white dark:bg-black/80 dark:text-white backdrop-blur-sm z-10">
                                                            {project.year}
                                                        </Badge>
                                                    </div>
                                                    <CardHeader>
                                                        <div className="flex justify-between items-start mb-2">
                                                            <Badge variant="outline" className="uppercase text-xs font-bold tracking-wider text-muted-foreground border-primary/20">
                                                                {project.category === 'pm' ? 'Management' : project.category}
                                                            </Badge>
                                                        </div>
                                                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                                                            {project.title}
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent className="flex-grow">
                                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                                            {project.desc}
                                                        </p>
                                                    </CardContent>
                                                    <CardFooter className="pt-0 pb-6">
                                                        <Button variant="ghost" className="w-full justify-between hover:bg-primary/5 hover:text-accent group-hover:translate-x-1 transition-all">
                                                            View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            </motion.div>
                                        ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="w-full py-20 bg-primary text-primary-foreground border-t border-border">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Have a Project in Mind?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl">
                        Whether it's a complex industrial facility or a high-end commercial space, we have the expertise to deliver.
                    </p>
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-slate-100 px-8 h-12 text-lg font-bold">
                        Start Your Project
                    </Button>
                </div>
            </section>

        </div>
    );
}
