"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">

            {/* 1. Hero */}
            <section className="w-full py-20 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-white">
                            Let's Talk About Your Project
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Ready to engineer excellence? Reach out to our team for a consultation or technical inquiry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Content: Form + Info */}
            <section className="w-full py-20 bg-background -mt-10">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Card className="border-border shadow-xl">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input id="firstName" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone (Optional)</Label>
                                            <Input id="phone" type="tel" placeholder="+234..." />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input id="subject" placeholder="Project Inquiry..." />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" placeholder="Tell us about your project requirements..." className="min-h-[150px]" />
                                        </div>
                                        <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-lg">
                                            Send Message <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right Column: Info & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Contact Details */}
                            <div className="grid grid-cols-1 gap-6">
                                <Card className="border-border hover:border-accent/40 transition-colors">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-primary mb-1">Our Office</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Suite DD11, Apo Sparklight Mall,<br />
                                                Opposite Living Faith Church,<br />
                                                Durumi, Abuja, Nigeria
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-border hover:border-accent/40 transition-colors">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-primary mb-1">Phone</h3>
                                            <p className="text-muted-foreground">
                                                +234 806 209 6090
                                            </p>
                                            <p className="text-sm text-slate-400 mt-1">Mon-Fri, 9am - 5pm WAT</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-border hover:border-accent/40 transition-colors">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-primary mb-1">Email</h3>
                                            <p className="text-muted-foreground">
                                                losos4consultants@gmail.com
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Map Embed (Placeholder) */}
                            {/* Map Embed (Iframe) */}
                            <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg border border-border relative bg-slate-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.540156943884!2d7.464614575899988!3d9.014389991046356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d0f0c0c0c0d%3A0x0!2sApo%20Sparklight%20Mall!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Losos4 Office Location"
                                ></iframe>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}
