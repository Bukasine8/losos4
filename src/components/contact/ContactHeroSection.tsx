import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ContactHeroSection() {
    return (
        <section className="py-20 bg-muted/30 border-b">
            <div className="container text-center">
                <div className="mb-4">
                    <TypewriterEffect
                        words={[
                            { text: "Contact" },
                            { text: "Us", className: "text-primary" },
                        ]}
                        className="text-4xl md:text-5xl font-bold justify-center"
                    />
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Get in touch with our expert team. We typically respond to all enquiries within 24 hours.
                </p>
            </div>
        </section>
    );
}
