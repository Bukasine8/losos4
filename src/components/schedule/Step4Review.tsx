"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ArrowLeft, CheckCircle, Calendar, ClipboardList, User, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBooking, MeetingType } from "@/lib/store/booking-context";
import { cn } from "@/lib/utils";

export function Step4Review() {
    const { meetingType, date, timeSlot, details, setStep } = useBooking();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Helper to format meeting type text
    const getMeetingTypeText = (type: MeetingType | null) => {
        switch (type) {
            case "virtual": return "Virtual Meeting (Google Meet)";
            case "in-person": return "In-Person Meeting (Office)";
            case "phone": return "Phone Consultation";
            default: return "Consultation";
        }
    };

    const handleConfirm = async () => {
        setIsSubmitting(true);

        // Simulate API call
        try {
            // In a real app, you would POST to your API here
            // await fetch('/api/schedule', { method: 'POST', body: JSON.stringify({...}) });

            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStep(5);
        } catch (error) {
            console.error("Booking failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!details || !date || !timeSlot) {
        return (
            <div className="text-center p-8">
                <p>Missing information. Please go back.</p>
                <Button onClick={() => setStep(1)} className="mt-4">Start Over</Button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Review & Confirm</h2>
                <p className="text-muted-foreground mt-2">Please ensure all details are correct.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Meeting Details Card */}
                <Card className="border-accent/20 bg-accent/5">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold text-lg mb-2">
                            <Calendar className="w-5 h-5" /> Meeting Details
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between border-b border-border/50 pb-2">
                                <span className="text-muted-foreground">Type</span>
                                <span className="font-medium text-right">{getMeetingTypeText(meetingType)}</span>
                            </div>
                            <div className="flex justify-between border-b border-border/50 pb-2">
                                <span className="text-muted-foreground">Date</span>
                                <span className="font-medium text-right">{format(new Date(date), "EEEE, MMMM do, yyyy")}</span>
                            </div>
                            <div className="flex justify-between border-b border-border/50 pb-2">
                                <span className="text-muted-foreground">Time</span>
                                <span className="font-medium text-right">{timeSlot}</span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span className="text-muted-foreground">Duration</span>
                                <span className="font-medium text-right">30 Minutes</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Client Details Card */}
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold text-lg mb-2">
                            <User className="w-5 h-5" /> Client Information
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-muted-foreground col-span-1">Name:</span>
                                <span className="font-medium col-span-2">{details.fullName}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-muted-foreground col-span-1">Email:</span>
                                <span className="font-medium col-span-2 truncate">{details.email}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-muted-foreground col-span-1">Phone:</span>
                                <span className="font-medium col-span-2">{details.phone}</span>
                            </div>
                            {details.companyName && (
                                <div className="grid grid-cols-3 gap-2">
                                    <span className="text-muted-foreground col-span-1">Company:</span>
                                    <span className="font-medium col-span-2">{details.companyName}</span>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Project Details Card */}
                <Card className="md:col-span-2">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold text-lg mb-2">
                            <ClipboardList className="w-5 h-5" /> Project Context
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-border/30 pb-1">
                                    <span className="text-muted-foreground">Category</span>
                                    <span className="font-medium capitalize">{details.projectCategory}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/30 pb-1">
                                    <span className="text-muted-foreground">Location</span>
                                    <span className="font-medium">{details.projectLocation}</span>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-border/30 pb-1">
                                    <span className="text-muted-foreground">Timeline</span>
                                    <span className="font-medium capitalize">{details.timeline || "Not specified"}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/30 pb-1">
                                    <span className="text-muted-foreground">Budget</span>
                                    <span className="font-medium capitalize">{details.budget || "Not specified"}</span>
                                </div>
                            </div>
                        </div>

                        {details.description && (
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <span className="text-muted-foreground text-sm block mb-1">Description:</span>
                                <p className="text-sm italic text-foreground/80">{details.description}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-between pt-6 border-t border-border">
                <Button variant="ghost" onClick={() => setStep(3)} disabled={isSubmitting}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Edit Details
                </Button>
                <Button
                    onClick={handleConfirm}
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-white min-w-[150px]"
                >
                    {isSubmitting ? "Confirming..." : "Confirm Meeting"}
                </Button>
            </div>
        </div>
    );
}
