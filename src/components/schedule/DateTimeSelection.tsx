import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface DateTimeSelectionProps {
    date: Date | undefined;
    timeSlot: string | null;
    onDateSelect: (date: Date | undefined) => void;
    onTimeSelect: (time: string) => void;
    onConfirm: () => void;
    isStepValid: boolean;
}

const TIME_SLOTS = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"
];

export function DateTimeSelection({ date, timeSlot, onDateSelect, onTimeSelect, onConfirm, isStepValid }: DateTimeSelectionProps) {
    return (
        <div className="w-full max-w-[1000px] flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Main Calendar Card */}
            <div className="bg-white dark:bg-[#151b28] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                {/* Left Column: Calendar Picker */}
                <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            {/* Calendar Grid */}
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={onDateSelect}
                                className="rounded-none border-none shadow-none p-0"
                                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6} // Disable past dates and weekends
                            />
                        </div>
                        {/* Footer: Timezone Info */}
                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                <span className="material-symbols-outlined text-[18px]">public</span>
                                <span className="text-xs font-medium uppercase tracking-wide">Time Zone</span>
                            </div>
                            <span className="text-sm font-semibold text-[#111318] dark:text-gray-200">Eastern Time (US & Canada)</span>
                        </div>
                    </div>
                </div>
                {/* Right Column: Time Slot Selection */}
                <div className="w-full md:w-[360px] bg-gray-50 dark:bg-[#1a2230] p-6 md:p-8 flex flex-col border-l border-gray-100 dark:border-gray-800 transition-all">
                    {!date ? (
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-gray-400 italic">Please select a date first.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight mb-1">
                                    {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-sm">Available times for 30 min meeting</p>
                            </div>
                            {/* Scrollable Time Slots */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 -mr-2 space-y-3 mb-6">
                                {TIME_SLOTS.map((slot) => (
                                    <button
                                        key={slot}
                                        onClick={() => onTimeSelect(slot)}
                                        className={cn(
                                            "group w-full flex items-center justify-between p-3 rounded-lg border transition-all",
                                            timeSlot === slot
                                                ? "border-2 border-primary bg-primary/5 dark:bg-primary/10 ring-0 ring-primary shadow-sm"
                                                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151b28] hover:border-primary hover:ring-1 hover:ring-primary"
                                        )}
                                    >
                                        <span className={cn(
                                            "text-sm font-medium transition-colors",
                                            timeSlot === slot
                                                ? "text-primary dark:text-primary font-bold"
                                                : "text-[#111318] dark:text-gray-200 group-hover:text-primary"
                                        )}>
                                            {slot}
                                        </span>
                                        <span className={cn(
                                            "material-symbols-outlined text-primary text-[18px] transition-opacity",
                                            timeSlot === slot ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        )}>
                                            check_circle
                                        </span>
                                    </button>
                                ))}
                            </div>
                            {/* Confirm Button */}
                            <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={onConfirm}
                                    disabled={!isStepValid}
                                    className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-700 dark:hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="truncate">Confirm Selection</span>
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
