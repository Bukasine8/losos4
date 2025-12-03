import { MEPHeroSection } from "@/components/services/mep/MEPHeroSection";
import { MEPIntroductionSection } from "@/components/services/mep/MEPIntroductionSection";
import { MEPServicesGrid } from "@/components/services/mep/MEPServicesGrid";
import { MEPMethodologySection } from "@/components/services/mep/MEPMethodologySection";
import { MEPDeliverablesSection } from "@/components/services/mep/MEPDeliverablesSection";
import { MEPCTASection } from "@/components/services/mep/MEPCTASection";

export const metadata = {
    title: "MEP Engineering & Consulting | Losos4 Engineering",
    description: "Integrated mechanical, electrical, and plumbing design and consulting for energy-efficient buildings.",
};

export default function MEPServicesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <MEPHeroSection />
            <MEPIntroductionSection />
            <MEPServicesGrid />
            <MEPMethodologySection />
            <MEPDeliverablesSection />
            <MEPCTASection />
        </main>
    );
}
