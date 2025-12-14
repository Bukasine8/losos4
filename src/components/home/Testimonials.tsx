"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function Testimonials() {
    return (
        <div className="h-[40rem] flex items-center justify-center w-full">
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Dr. Adebayo Ogunlesi",
        designation: "CTO, Zenith Structures",
        content: (
            <p>
                Losos4's structural analysis was <Highlight>absolutely precise</Highlight>.
                They identified potential failure points in our high-rise design that others missed.
                True engineering excellence.
            </p>
        ),
    },
    {
        id: 1,
        name: "Sarah Williams",
        designation: "Project Lead, Apex Construction",
        content: (
            <p>
                Working with Losos4 on the <Highlight>Lagos Civic Centre</Highlight> renovation was seamless.
                Their HVAC solutions reduced our energy costs by 40%. Highly recommended.
            </p>
        ),
    },
    {
        id: 2,
        name: "Michael Chen",
        designation: "Director, Industrial Power Grids",
        content: (
            <p>
                The <Highlight>electrical synchronization</Highlight> they designed for our factory backup systems is a masterpiece.
                Zero downtime since implementation. A robust engineering feat.
            </p>
        ),
    },
    {
        id: 3,
        name: "Chidinma Okeke",
        designation: "Manager, Green Estates",
        content: (
            <p>
                Their <Highlight>solar microgrid design</Highlight> completely transformed our estate's power reliability.
                Sustainable, efficient, and beautifully executed engineering.
            </p>
        ),
    },
    {
        id: 4,
        name: "Engr. Tunde Bakare",
        designation: "Head of Operations, OilServ",
        content: (
            <p>
                Safety is paramount in our field. Losos4's <Highlight>Fire Engineering</Highlight> report and sprinkler design
                passed all regulatory checks on the first go. Impressive attention to detail.
            </p>
        ),
    },
    {
        id: 5,
        name: "Jessica Lee",
        designation: "Architect, Urban Flow",
        content: (
            <p>
                I love how they integrate <Highlight>MEP systems</Highlight> without compromising architectural integrity.
                The ventilation ducts were practically invisible yet incredibly effective.
            </p>
        ),
    },
    {
        id: 6,
        name: "David Opara",
        designation: "Facility Manager, Grand Hotel",
        content: (
            <p>
                The <Highlight>water treatment plant</Highlight> upgrade was handled professionally from start to finish.
                Clean water, compliant systems, and happy guests. Thank you, Losos4.
            </p>
        ),
    },
    {
        id: 7,
        name: "Amina Yusuf",
        designation: "Principal, Yusuf & Partners",
        content: (
            <p>
                Their project management team is top-tier. They delivered the <Highlight>hospital wing</Highlight>
                two weeks ahead of schedule and under budget. A rare find in this industry.
            </p>
        ),
    },
    {
        id: 8,
        name: "Robert Stone",
        designation: "CEO, TechHub Towers",
        content: (
            <p>
                We needed a <Highlight>tier-4 data center</Highlight> cooling solution. Losos4 delivered a design that exceeds
                industry standards for efficiency and redundancy. simply brilliant.
            </p>
        ),
    },
    {
        id: 9,
        name: "Fatima Bello",
        designation: "Director, Public Works",
        content: (
            <p>
                A trustworthy partner for public infrastructure. Their work on the <Highlight>city drainage system</Highlight>
                has significantly mitigated flood risks this season.
            </p>
        ),
    },
];
