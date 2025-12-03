import { ProjectManagementHeroSection } from "@/components/services/project-management/ProjectManagementHeroSection";
import { ProjectManagementOverviewSection } from "@/components/services/project-management/ProjectManagementOverviewSection";
import { ProjectManagementServicesGrid } from "@/components/services/project-management/ProjectManagementServicesGrid";
import { ProjectManagementWorkflowSection } from "@/components/services/project-management/ProjectManagementWorkflowSection";
import { ProjectManagementDeliverablesSection } from "@/components/services/project-management/ProjectManagementDeliverablesSection";
import { ProjectManagementTestimonialsSection } from "@/components/services/project-management/ProjectManagementTestimonialsSection";
import { ProjectManagementCTASection } from "@/components/services/project-management/ProjectManagementCTASection";

export const metadata = {
    title: "Project Management Services | Losos4 Engineering",
    description: "End-to-end engineering project coordination, construction supervision, and cost management.",
};

export default function ProjectManagementServicesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <ProjectManagementHeroSection />
            <ProjectManagementOverviewSection />
            <ProjectManagementServicesGrid />
            <ProjectManagementWorkflowSection />
            <ProjectManagementDeliverablesSection />
            <ProjectManagementTestimonialsSection />
            <ProjectManagementCTASection />
        </main>
    );
}
