"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote: "Losos4 transformed our facility with their exceptional electrical design. The efficiency gains were immediate.",
        name: "Alex Johnson",
        title: "Operations Director, TechFlow",
    },
    {
        quote: "Their project management team is top-notch. Delivered on time and under budget, which is rare in this industry.",
        name: "Sarah Williams",
        title: "Project Lead, BuildRight",
    },
    {
        quote: "The fire safety systems designed by Losos4 give us complete peace of mind. Highly professional service.",
        name: "Michael Chen",
        title: "Safety Officer, Metroplex",
    },
    {
        quote: "Innovative mechanical solutions that solved our complex HVAC challenges. Truly a futuristic engineering firm.",
        name: "Emily Davis",
        title: "Facility Manager, GreenSpace",
    },
    {
        quote: "We rely on Losos4 for all our MEP consulting needs. Their integrated approach is a game changer.",
        name: "David Wilson",
        title: "CEO, Wilson Developers",
    },
    {
        quote: "Professional, reliable, and cutting-edge. Losos4 is the partner you want for major infrastructure projects.",
        name: "Jessica Brown",
        title: "Director, City Infrastructure",
    },
    {
        quote: "Their attention to detail in compliance and safety is unmatched. We passed all inspections with flying colors.",
        name: "Robert Miller",
        title: "Compliance Head, SafeBuild",
    },
    {
        quote: "Losos4's energy audit saved us 20% on operational costs in the first year alone.",
        name: "Linda Taylor",
        title: "CFO, EcoManufacture",
    },
    {
        quote: "The best engineering consultancy we've worked with. Their team is knowledgeable and responsive.",
        name: "James Anderson",
        title: "VP of Engineering, ConstructCo",
    },
    {
        quote: "From concept to execution, Losos4 provided seamless support. Their designs are both functional and beautiful.",
        name: "Karen Thomas",
        title: "Architect, ModernDesigns",
    },
    {
        quote: "Highly recommended for any large-scale electrical implementation. They know their stuff.",
        name: "Daniel Martinez",
        title: "Site Supervisor, PowerGrid",
    },
    {
        quote: "Their mechanical drafting services are precise and error-free. Saved us weeks of rework.",
        name: "Patricia Hernandez",
        title: "Lead Engineer, DraftTech",
    },
    {
        quote: "Excellent communication throughout the project lifecycle. We always knew where we stood.",
        name: "Christopher Moore",
        title: "Client Relations, BigBuild",
    },
    {
        quote: "Losos4's sustainable design solutions helped us achieve LEED Platinum certification.",
        name: "Jennifer Martin",
        title: "Sustainability Coordinator, GreenTower",
    },
    {
        quote: "A visionary team that brings modern technology to traditional engineering problems.",
        name: "Matthew Jackson",
        title: "CTO, InfraTech",
    },
    {
        quote: "Reliable, efficient, and cost-effective. Losos4 delivers value at every stage.",
        name: "Elizabeth White",
        title: "Procurement Manager, ValueCorp",
    },
    {
        quote: "Their fire alarm systems are state-of-the-art. We feel much safer knowing Losos4 designed them.",
        name: "Joseph Lopez",
        title: "Security Chief, SecureHoldings",
    },
    {
        quote: "Great experience working with their plumbing design team. Efficient water systems that just work.",
        name: "Susan Gonzalez",
        title: "Plumbing Contractor, WaterWorks",
    },
    {
        quote: "Losos4 understands the complexities of modern construction. Their insights were invaluable.",
        name: "Charles Harris",
        title: "General Contractor, BuildMaster",
    },
    {
        quote: "We were impressed by their use of advanced simulation tools for airflow analysis.",
        name: "Margaret Clark",
        title: "Lab Director, ScienceHub",
    },
    {
        quote: "Top-tier consulting services. They helped us optimize our entire building management system.",
        name: "Thomas Lewis",
        title: "Building Manager, SkyHigh",
    },
    {
        quote: "Friendly, professional, and expert staff. A pleasure to work with on our new headquarters.",
        name: "Nancy Robinson",
        title: "HR Director, CorpHQ",
    },
    {
        quote: "They handled our complex retrofitting project with ease. Minimal disruption to our operations.",
        name: "Paul Walker",
        title: "Operations Manager, RetroFitters",
    },
    {
        quote: "Losos4's designs are future-proof. They anticipate needs we hadn't even considered.",
        name: "Lisa Hall",
        title: "Strategy VP, FutureCorp",
    },
    {
        quote: "The clarity of their technical reports is outstanding. Makes decision-making much easier.",
        name: "Steven Allen",
        title: "Investment Director, CapStone",
    },
    {
        quote: "We value their commitment to safety and quality above all else. A trusted partner.",
        name: "Betty Young",
        title: "Safety Director, SafeWork",
    },
    {
        quote: "Their electrical load calculations were spot on. No power issues since commissioning.",
        name: "Brian King",
        title: "Electrical Lead, PowerPlant",
    },
    {
        quote: "Responsive support and quick turnaround times on urgent design changes.",
        name: "Sandra Wright",
        title: "Project Manager, FastTrack",
    },
    {
        quote: "Losos4 brings a fresh perspective to engineering. Their solutions are creative and effective.",
        name: "Kevin Scott",
        title: "Creative Director, DesignStudio",
    },
    {
        quote: "We wouldn't trust anyone else with our critical infrastructure projects.",
        name: "Ashley Green",
        title: "Director of Facilities, MajorHospital",
    },
];

export const InfiniteTestimonials = ({
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    React.useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = React.useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {testimonials.map((item, idx) => (
                    <li
                        className="w-[350px] md:w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] aspect-video"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                        key={item.name + idx}
                    >
                        <GlassCard className="h-full flex flex-col justify-between p-6 bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
                            <div className="relative z-20">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                                    ))}
                                </div>
                                <Quote className="absolute right-0 top-0 w-8 h-8 text-slate-500/20" />
                                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                    "{item.quote}"
                                </span>
                            </div>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </GlassCard>
                    </li>
                ))}
            </ul>
        </div>
    );
};
