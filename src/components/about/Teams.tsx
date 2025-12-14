"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Teams() {
    const teamMembers = [
        {
            quote:
                "With over 45 years of experience, I've dedicated my career to delivering mechanical engineering solutions that prioritize safety, efficiency, and innovation across Africa's infrastructure.",
            name: "Engr. Solomon A.T. Oni",
            designation: "Director / Lead Mechanical Engineer | M.Sc | MNSE, COREN, MNIM, MASHRAE",
            src: "/images/team/engr_solomon_oni_1765481055634.png",
        },
        {
            quote:
                "Four and a half decades in electrical engineering have taught me that precision in design and unwavering adherence to standards are the pillars of successful infrastructure.",
            name: "Engr. O. A. Morakinyo",
            designation: "Senior Electrical Engineer | B.Eng | FNSE, COREN, MILE",
            src: "/images/team/engr_morakinyo_1765481076189.png",
        },
        {
            quote:
                "Nearly three decades of mechanical engineering expertise have equipped me to tackle complex HVAC, plumbing, and fire protection systems with confidence and precision.",
            name: "Engr. O. Shogo",
            designation: "Senior Mechanical Engineer | B.Eng | MNSE, COREN",
            src: "/images/team/engr_shogo_1765481097996.png",
        },
        {
            quote:
                "As a Senior Electrical Engineer and Project Manager, I bring technical expertise and strategic oversight to ensure every project is delivered on time, within budget, and to specification.",
            name: "Engr. G. A. Igbafe",
            designation: "Senior Electrical Engineer / Project Manager | B.Eng | MNSE, COREN, MBPM",
            src: "/images/team/engr_igbafe_1765481126084.png",
        },
        {
            quote:
                "With over two decades of hands-on mechanical engineering experience, I specialize in creating sustainable and efficient building systems that stand the test of time.",
            name: "Engr. Olufemi Tewobola",
            designation: "Mechanical Engineer | B.Eng | MNSE, COREN",
            src: "/images/team/engr_tewobola_1765481144125.png",
        },
        {
            quote:
                "A decade of electrical engineering practice has honed my skills in power distribution, lighting design, and building automation systems for modern facilities.",
            name: "Engr. Alexander M. Adakole",
            designation: "Electrical Engineer | HND, PGDEE | MNSE, COREN",
            src: "/images/team/engr_adakole_1765481162111.png",
        },
        {
            quote:
                "Dedicated to applying mechanical engineering principles to deliver robust solutions derived from over 6 years of industry engagement.",
            name: "Engr. James Sylvanus",
            designation: "Mechanical Engineer | B.Eng | COREN",
            src: "https://ui-avatars.com/api/?name=James+Sylvanus&background=0D8ABC&color=fff",
        },
        {
            quote:
                "Focused on electrical systems efficiency and safety, leveraging 5 years of practical engineering experience.",
            name: "Engr. Ighogboja Chovwe",
            designation: "Electrical Engineer | B.Eng | COREN",
            src: "https://ui-avatars.com/api/?name=Ighogboja+Chovwe&background=0D8ABC&color=fff",
        },
        {
            quote:
                "Bringing practical electrical engineering expertise to every project, ensuring reliable and standard-compliant installations.",
            name: "Iweha Stanley O.",
            designation: "Electrical Engineer | HND",
            src: "https://ui-avatars.com/api/?name=Iweha+Stanley+O&background=0D8ABC&color=fff",
        },
    ];
    return (
        <div className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-border/50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Our Leadership Team</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Meet the experienced engineers driving innovation and excellence at Losos4 Consultants.
                    </p>
                </div>
                <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />
            </div>
        </div>
    );
}
