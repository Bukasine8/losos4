"use client";

import { useBooking } from "@/lib/store/booking-context";
import { Step1MeetingType } from "./Step1MeetingType";
import { Step2DateTime } from "./Step2DateTime";
import { Step3Details } from "./Step3Details";
import { Step4Review } from "./Step4Review";
import { Step5Success } from "./Step5Success";
import { motion, AnimatePresence } from "framer-motion";

export function BookingWizard() {
    const { step } = useBooking();

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8 md:mb-12">
                <div className="flex justify-between text-sm font-medium text-muted-foreground mb-4 px-2">
                    <span className={step >= 1 ? "text-primary" : ""}>Type</span>
                    <span className={step >= 2 ? "text-primary" : ""}>Time</span>
                    <span className={step >= 3 ? "text-primary" : ""}>Details</span>
                    <span className={step >= 4 ? "text-primary" : ""}>Review</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 5) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Step Content with Transitions */}
            <div className="bg-background rounded-2xl shadow-sm border border-border/40 p-6 md:p-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && <Step1MeetingType />}
                        {step === 2 && <Step2DateTime />}
                        {step === 3 && <Step3Details />}
                        {step === 4 && <Step4Review />}
                        {step === 5 && <Step5Success />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
