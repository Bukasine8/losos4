"use client";

import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ContactCTASection() {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container text-center">
                <div className="mb-6">
                    <TypewriterEffect
                        words={[
                            { text: "Ready" },
                            { text: "to" },
                            { text: "Start" },
                            { text: "Your" },
                            { text: "Project?", className: "text-white" },
                        ]}
                        className="text-3xl font-bold justify-center text-white"
                        cursorClassName="bg-white"
                    />
                </div>
                <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                    onClick={() => {
                        // Scroll to form
                        document.getElementById("name")?.focus();
                    }}
                >
                    Submit Your Request
                </Button>
            </div>
        </section>
    );
}
