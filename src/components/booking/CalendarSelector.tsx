"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ChevronLeft } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { format } from "date-fns";

interface CalendarSelectorProps {
    meetingType: "physical" | "online";
    onSelect: (date: Date, time: string) => void;
    onBack: () => void;
}

const availableTimeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00"
];

export function CalendarSelector({
    meetingType,
    onSelect,
    onBack,
}: CalendarSelectorProps) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (selectedDate) {
            fetchBookedSlots(selectedDate);
        }
    }, [selectedDate]);

    const fetchBookedSlots = async (date: Date) => {
        const dateStr = format(date, "yyyy-MM-dd");
        const { data } = await supabaseBrowser
            .from("meetings")
            .select("meeting_time")
            .eq("meeting_date", dateStr)
            .neq("status", "cancelled");

        const booked = new Set(
            data?.map((m) => m.meeting_time.substring(0, 5)) || []
        );
        setBookedSlots(booked);
    };

    const handleContinue = () => {
        if (selectedDate && selectedTime) {
            onSelect(selectedDate, selectedTime);
        }
    };

    return (
        <div className="space-y-6">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
            </Button>

            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">Select Date & Time</h2>
                <p className="text-muted-foreground">
                    Choose an available slot for your {meetingType} meeting
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Calendar */}
                <GlassCard className="p-6">
                    <h3 className="font-semibold mb-4">Select Date</h3>
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                            date < new Date() || date.getDay() === 0 || date.getDay() === 6
                        }
                        className="rounded-md"
                    />
                </GlassCard>

                {/* Time Slots */}
                <GlassCard className="p-6">
                    <h3 className="font-semibold mb-4">Select Time</h3>
                    {!selectedDate ? (
                        <p className="text-muted-foreground text-center py-8">
                            Please select a date first
                        </p>
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            {availableTimeSlots.map((time) => {
                                const isBooked = bookedSlots.has(time);
                                const isSelected = selectedTime === time;

                                return (
                                    <button
                                        key={time}
                                        onClick={() => !isBooked && setSelectedTime(time)}
                                        disabled={isBooked}
                                        className={`p-3 rounded-lg border text-center font-medium transition-all ${isBooked
                                                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                                                : isSelected
                                                    ? "bg-primary text-white border-primary"
                                                    : "border-border hover:border-primary/50"
                                            }`}
                                    >
                                        {time}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    <Button
                        className="w-full mt-6"
                        onClick={handleContinue}
                        disabled={!selectedDate || !selectedTime}
                    >
                        Continue
                    </Button>
                </GlassCard>
            </div>
        </div>
    );
}
