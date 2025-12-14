import { BookingProvider } from "@/lib/store/booking-context";
import { BookingWizard } from "@/components/schedule/BookingWizard";

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 md:py-20">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary mb-4">
                        Schedule a Meeting
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Plan a meeting with our engineering team to discuss your project needs.
                    </p>
                </div>

                <BookingProvider>
                    <BookingWizard />
                </BookingProvider>
            </div>
        </div>
    );
}
