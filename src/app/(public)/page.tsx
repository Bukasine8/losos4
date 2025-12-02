import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { ServicesTeaserSection } from "@/components/home/ServicesTeaserSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ProjectsTeaserSection } from "@/components/home/ProjectsTeaserSection";
import { InfiniteTestimonials } from "@/components/ui/InfiniteTestimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <ValuePropsSection />
            <ServicesTeaserSection />
            <CertificationsSection />
            <ProjectsTeaserSection />
            <section className="py-20 bg-muted/10">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display">What Our Clients Say</h2>
                    <InfiniteTestimonials speed="slow" />
                </div>
            </section>
            <CTASection />
        </div>
    );
}
