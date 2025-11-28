import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function AboutCTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container text-center">
                <div className="mb-8">
                    <TypewriterEffect
                        words={[
                            { text: "Work" },
                            { text: "With" },
                            { text: "Our" },
                            { text: "Expert" },
                            { text: "Engineering" },
                            { text: "Team", className: "text-white" },
                        ]}
                        className="text-3xl md:text-4xl font-bold justify-center text-white"
                        cursorClassName="bg-white"
                    />
                </div>
                <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    <Link href="/contact">
                        Request a Quote
                    </Link>
                </Button>
            </div>
        </section>
    );
}
