"use client";

import { useState, useEffect } from "react";
import { format, addDays, isBefore, startOfToday } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useBooking } from "@/lib/store/booking-context";
import { cn } from "@/lib/utils";

// Mock available time slots
const TIME_SLOTS = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM",
];

export function Step2DateTime() {
    const { date, setDate, timeSlot, setTimeSlot, setStep } = useBooking();
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);

    // Simulate fetching slots when date changes
    useEffect(() => {
        if (date) {
            // In a real app, you'd fetch available slots from an API here
            setAvailableSlots(TIME_SLOTS);
        } else {
            setAvailableSlots([]);
        }
    }, [date]);

    const handleNext = () => {
        if (date && timeSlot) {
            setStep(3);
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Choose Date & Time</h2>
                <p className="text-muted-foreground mt-2">All times are in your local timezone.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Calendar Column */}
                <div className="flex justify-center">
                    <Card className="p-4 border-border shadow-sm">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(day) => isBefore(day, startOfToday()) || day.getDay() === 0 || day.getDay() === 6}
                            initialFocus
                            className="rounded-md border-0"
                        />
                    </Card>
                </div>

                {/* Time Slots Column */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-accent" />
                        <h3 className="font-semibold text-lg">Available Times</h3>
                    </div>

                    {!date ? (
                        <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-xl bg-muted/20">
                            <p className="text-muted-foreground">Please select a date first</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {availableSlots.map((slot) => (
                                <Button
                                    key={slot}
                                    variant={timeSlot === slot ? "default" : "outline"}
                                    onClick={() => setTimeSlot(slot)}
                                    className={cn(
                                        "w-full h-10 transition-all",
                                        timeSlot === slot ? "bg-accent hover:bg-accent/90 text-white border-accent" : "hover:border-accent hover:text-accent"
                                    )}
                                >
                                    {slot}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-border">
                <Button variant="ghost" onClick={() => setStep(1)}>
                    Back
                </Button>
                <Button onClick={handleNext} disabled={!date || !timeSlot} className="bg-primary hover:bg-primary/90">
                    Next Step
                </Button>
            </div>
        </div>
    );
}
