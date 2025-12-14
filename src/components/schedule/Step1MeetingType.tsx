"use client";

import { motion } from "framer-motion";
import { Building2, MousePointerClick, Phone, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBooking, MeetingType } from "@/lib/store/booking-context";
import { cn } from "@/lib/utils";

export function Step1MeetingType() {
    const { meetingType, setMeetingType, setStep } = useBooking();

    const handleSelect = (type: MeetingType) => {
        setMeetingType(type);
        // Slight delay to allow animation feedback
        setTimeout(() => setStep(2), 300);
    };

    const options: { id: MeetingType; title: string; desc: string; icon: React.ReactNode }[] = [
        {
            id: "virtual",
            title: "Virtual Meeting",
            desc: "Meet with our engineers online for convenience and speed.",
            icon: <Video className="h-8 w-8 text-primary" />,
        },
        {
            id: "in-person",
            title: "In-Person Meeting",
            desc: "Visit our office for a detailed project discussion.",
            icon: <Building2 className="h-8 w-8 text-primary" />,
        },
        {
            id: "phone",
            title: "Phone Consultation",
            desc: "Speak directly with an engineer over a call.",
            icon: <Phone className="h-8 w-8 text-primary" />,
        },
    ];

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Select Meeting Type</h2>
                <p className="text-muted-foreground mt-2">Choose how you&apos;d like to connect with our team.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.map((option) => (
                    <motion.div
                        key={option.id}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelect(option.id)}
                        className="cursor-pointer"
                    >
                        <Card
                            className={cn(
                                "h-full transition-all duration-300 border-2 hover:border-primary/50 hover:shadow-lg",
                                meetingType === option.id ? "border-primary bg-primary/5" : "border-border"
                            )}
                        >
                            <CardHeader className="text-center pb-2">
                                <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-border">
                                    {option.icon}
                                </div>
                                <CardTitle className="text-xl">{option.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground text-sm leading-relaxed">{option.desc}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
