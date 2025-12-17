import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface DateTimeSelectionProps {
    date: Date | undefined;
    timeSlot: string | null;
    onDateSelect: (date: Date | undefined) => void;
    onTimeSelect: (time: string) => void;
}

const TIME_SLOTS = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export function DateTimeSelection({ date, timeSlot, onDateSelect, onTimeSelect }: DateTimeSelectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-4 w-full text-center md:text-left">Select Date</h3>
                <div className="border border-gray-200 p-4">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={onDateSelect}
                        className="rounded-none border-none shadow-none"
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6} // Disable past dates and weekends
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Select Time</h3>
                {!date ? (
                    <p className="text-gray-400 italic">Please select a date first.</p>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        {TIME_SLOTS.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => onTimeSelect(slot)}
                                className={cn(
                                    "py-3 px-4 border border-gray-300 text-sm font-bold transition-all duration-300 hover:border-losos-blue hover:text-losos-blue rounded-none",
                                    timeSlot === slot ? "bg-losos-blue text-white hover:bg-losos-blue hover:text-white" : "bg-transparent text-gray-700"
                                )}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
