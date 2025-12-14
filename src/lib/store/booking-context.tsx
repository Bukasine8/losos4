"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type MeetingType = "virtual" | "in-person" | "phone";

export interface ClientDetails {
    fullName: string;
    companyName?: string;
    email: string;
    phone: string;
    projectCategory: string;
    projectLocation: string;
    timeline?: string;
    budget?: string;
    description?: string;
}

interface BookingState {
    step: number;
    meetingType: MeetingType | null;
    date: Date | undefined;
    timeSlot: string | null;
    details: ClientDetails | null;
}

interface BookingContextType extends BookingState {
    setStep: (step: number) => void;
    setMeetingType: (type: MeetingType) => void;
    setDate: (date: Date | undefined) => void;
    setTimeSlot: (slot: string | null) => void;
    setDetails: (details: ClientDetails) => void;
    reset: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [step, setStep] = useState(1);
    const [meetingType, setMeetingType] = useState<MeetingType | null>(null);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [timeSlot, setTimeSlot] = useState<string | null>(null);
    const [details, setDetails] = useState<ClientDetails | null>(null);

    const reset = () => {
        setStep(1);
        setMeetingType(null);
        setDate(undefined);
        setTimeSlot(null);
        setDetails(null);
    };

    return (
        <BookingContext.Provider
            value={{
                step,
                setStep,
                meetingType,
                setMeetingType,
                date,
                setDate,
                timeSlot,
                setTimeSlot,
                details,
                setDetails,
                reset,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}
