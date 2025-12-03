"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, Calendar as CalendarIcon, Video, MapPin } from "lucide-react";
import { format } from "date-fns";

interface BookingConfirmationProps {
    data: any;
}

export function BookingConfirmation({ data }: BookingConfirmationProps) {
    const router = useRouter();

    const handleAddToGoogleCalendar = () => {
        const startDateTime = `${data.meeting_date}T${data.meeting_time}:00`;
        const endDate = new Date(startDateTime);
        endDate.setHours(endDate.getHours() + 1);
        const endDateTime = format(endDate, "yyyyMMdd'T'HHmmss");
        const startFormatted = format(new Date(startDateTime), "yyyyMMdd'T'HHmmss");

        const title = `Meeting with Losos4 Engineering`;
        const description = `Meeting Type: ${data.meetingType}\\nNotes: ${data.additional_notes || "N/A"}`;
        const location =
            data.meetingType === "physical"
                ? "Losos4 Engineering Office, Lagos"
                : "Online (Google Meet link will be sent)";

        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            title
        )}&dates=${startFormatted}/${endDateTime}&details=${encodeURIComponent(
            description
        )}&location=${encodeURIComponent(location)}`;

        window.open(googleCalendarUrl, "_blank");
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Meeting Booked!</h2>
                <p className="text-muted-foreground">
                    Your meeting has been successfully scheduled
                </p>
            </div>

            <GlassCard className="p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Meeting Details</h3>

                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        {data.meetingType === "physical" ? (
                            <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        ) : (
                            <Video className="w-5 h-5 text-secondary mt-0.5" />
                        )}
                        <div>
                            <p className="font-medium">Meeting Type</p>
                            <p className="text-sm text-muted-foreground capitalize">
                                {data.meetingType} Meeting
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <CalendarIcon className="w-5 h-5 text-accent mt-0.5" />
                        <div>
                            <p className="font-medium">Date & Time</p>
                            <p className="text-sm text-muted-foreground">
                                {format(new Date(data.meeting_date), "MMMM d, yyyy")} at{" "}
                                {data.meeting_time}
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 border-t">
                        <p className="font-medium mb-2">Your Information</p>
                        <div className="text-sm space-y-1 text-muted-foreground">
                            <p>Name: {data.client_name}</p>
                            <p>Email: {data.client_email}</p>
                            <p>Phone: {data.client_phone}</p>
                            {data.company_name && <p>Company: {data.company_name}</p>}
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg">
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                        📧 A confirmation email has been sent to {data.client_email}
                    </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button
                        onClick={handleAddToGoogleCalendar}
                        variant="outline"
                        className="flex-1"
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Add to Google Calendar
                    </Button>
                    <Button onClick={() => router.push("/")} className="flex-1">
                        Back to Home
                    </Button>
                </div>
            </GlassCard>
        </div>
    );
}
