import dynamic from "next/dynamic";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CompanyOverviewSection } from "@/components/about/CompanyOverviewSection";

// Lazy load components below the fold
const MissionVisionValuesSection = dynamic(() => import("@/components/about/MissionVisionValuesSection").then(mod => mod.MissionVisionValuesSection), { ssr: true });
const AboutCertificationsSection = dynamic(() => import("@/components/about/AboutCertificationsSection").then(mod => mod.AboutCertificationsSection), { ssr: true });
const AwardsSection = dynamic(() => import("@/components/about/AwardsSection").then(mod => mod.AwardsSection), { ssr: true });
const TeamSection = dynamic(() => import("@/components/about/TeamSection").then(mod => mod.TeamSection), { ssr: true });
const AboutCTASection = dynamic(() => import("@/components/about/AboutCTASection").then(mod => mod.AboutCTASection), { ssr: true });

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHeroSection />
            <CompanyOverviewSection />
            <MissionVisionValuesSection />
            <AboutCertificationsSection />
            <AwardsSection />
            <TeamSection />
            <AboutCTASection />
        </div>
    );
}
