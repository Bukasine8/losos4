import { ElectricalHeroSection } from "@/components/services/electrical/ElectricalHeroSection";
import { ElectricalOverviewSection } from "@/components/services/electrical/ElectricalOverviewSection";
import { ElectricalServicesGrid } from "@/components/services/electrical/ElectricalServicesGrid";
import { ElectricalDeliverablesSection } from "@/components/services/electrical/ElectricalDeliverablesSection";
import { ElectricalProcessSection } from "@/components/services/electrical/ElectricalProcessSection";
import { ElectricalCTASection } from "@/components/services/electrical/ElectricalCTASection";

export const metadata = {
    title: "Electrical Design Services | Losos4 Engineering",
    description: "High-precision electrical layouts, power distribution planning, and energy-efficient solutions for residential and industrial projects.",
};

export default function ElectricalServicesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <ElectricalHeroSection />
            <ElectricalOverviewSection />
            <ElectricalServicesGrid />
            <ElectricalDeliverablesSection />
            <ElectricalProcessSection />
            <ElectricalCTASection />
        </main>
    );
}
