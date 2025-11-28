import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function ServicesHeroSection() {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop')",
                }}
            />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />

            {/* Content */}
            <div className="container relative z-10 text-center text-white px-4">
                <div className="mb-4">
                    <TypewriterEffect
                        words={[
                            { text: "Our" },
                            { text: "Services", className: "text-primary" },
                        ]}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold justify-center text-white"
                        cursorClassName="bg-white"
                    />
                </div>
                <div className="mb-6">
                    <TypewriterEffect
                        words={[
                            { text: "Comprehensive" },
                            { text: "Engineering" },
                            { text: "&" },
                            { text: "Consultancy" },
                            { text: "Solutions" },
                        ]}
                        className="text-xl md:text-2xl font-light justify-center text-slate-200"
                        cursorClassName="bg-slate-200"
                    />
                </div>
                <p className="max-w-2xl mx-auto text-slate-300 text-lg">
                    From mechanical and electrical design to fire safety and project management,
                    we deliver precision-engineered solutions for complex infrastructure challenges.
                </p>
            </div>
        </section>
    );
}
