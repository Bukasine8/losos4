import { FireSafetyHeroSection } from "@/components/services/fire-safety/FireSafetyHeroSection";
import { FireSafetyOverviewSection } from "@/components/services/fire-safety/FireSafetyOverviewSection";
import { FireSafetyServicesGrid } from "@/components/services/fire-safety/FireSafetyServicesGrid";
import { FireSafetyDeliverablesSection } from "@/components/services/fire-safety/FireSafetyDeliverablesSection";
import { FireSafetyProcessSection } from "@/components/services/fire-safety/FireSafetyProcessSection";
import { FireSafetyCTASection } from "@/components/services/fire-safety/FireSafetyCTASection";

export const metadata = {
    title: "Fire Safety & Management Services | Losos4 Engineering",
    description: "Certified fire protection system design, risk assessment, and compliance consulting.",
};

export default function FireSafetyServicesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <FireSafetyHeroSection />
            <FireSafetyOverviewSection />
            <FireSafetyServicesGrid />
            <FireSafetyDeliverablesSection />
            <FireSafetyProcessSection />
            <FireSafetyCTASection />
        </main>
    );
}
