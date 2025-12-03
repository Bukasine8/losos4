import { MechanicalHeroSection } from "@/components/services/mechanical/MechanicalHeroSection";
import { MechanicalOverviewSection } from "@/components/services/mechanical/MechanicalOverviewSection";
import { MechanicalServicesGrid } from "@/components/services/mechanical/MechanicalServicesGrid";
import { MechanicalDeliverablesSection } from "@/components/services/mechanical/MechanicalDeliverablesSection";
import { MechanicalProcessSection } from "@/components/services/mechanical/MechanicalProcessSection";
import { MechanicalCTASection } from "@/components/services/mechanical/MechanicalCTASection";

export const metadata = {
    title: "Mechanical Design Services | Losos4 Engineering",
    description: "Precision engineering for HVAC, plumbing, load calculations, and mechanical drafting.",
};

export default function MechanicalServicesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <MechanicalHeroSection />
            <MechanicalOverviewSection />
            <MechanicalServicesGrid />
            <MechanicalDeliverablesSection />
            <MechanicalProcessSection />
            <MechanicalCTASection />
        </main>
    );
}
