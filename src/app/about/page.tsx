import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Certificates } from "@/components/about/Certificates";

export default function AboutPage() {
    return (
        <div className="pt-24">
            <Section theme="dark" hasDivider divider="slope-right">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold mb-8">About Losos4</h1>
                    <p className="text-xl leading-relaxed text-gray-300">
                        Losos4 Consultants Limited is an indigenous engineering consulting firm established in 2018.
                        We provide multidisciplinary services across mechanical, electrical, fire engineering, and project management.
                        Our team comprises experienced professionals with decades of combined expertise delivering large-scale
                        institutional, commercial, industrial, and infrastructure projects.
                    </p>
                </div>
            </Section>

            <Section theme="light">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-losos-dark">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            To deliver precise, reliable, and technically sound engineering solutions that enable our clients
                            to plan, build, and operate complex facilities with confidence.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-losos-dark">Our Vision</h2>
                        <p className="text-lg text-gray-700">
                            To be a trusted engineering consulting partner recognized for technical excellence, integrity,
                            and the successful delivery of complex, large-scale projects.
                        </p>
                    </div>
                </div>
            </Section>

            <Section theme="blue" hasDivider divider="slope-left">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Integrity", desc: "We operate with honesty, transparency, and professional responsibility." },
                        { title: "Precision", desc: "We are detail-driven and committed to engineering accuracy." },
                        { title: "Reliability", desc: "We deliver dependable solutions that perform as designed." }
                    ].map((val) => (
                        <div key={val.title} className="bg-white/10 p-8 border border-white/20 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                            <p className="text-white/80">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section theme="light" hasDivider divider="slope-right">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] w-full bg-gray-200">
                        <div className="absolute inset-0 bg-losos-blue/10 z-10" />
                        {/* Using the group team photo found in root images */}
                        <Image
                            src="/images/engineering-team.png"
                            alt="Losos4 Engineering Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-losos-dark">Our Team</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Success in engineering is built on the collective expertise of dedicated professionals.
                            At Losos4, our multidisciplinary team of engineers, project managers, and technical specialists
                            work in unison to solve complex challenges.
                        </p>
                        <p className="text-lg text-gray-700 mb-8">
                            Combined, our leadership brings over 20 years of experience in high-stakes infrastructure
                            and commercial development. We are united by a shared commitment to precision and safety.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border-l-4 border-losos-blue pl-4">
                                <div className="font-bold text-2xl text-losos-dark">20+</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div className="border-l-4 border-losos-blue pl-4">
                                <div className="font-bold text-2xl text-losos-dark">100%</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Project Delivery</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Certificates />
        </div>
    );
}
