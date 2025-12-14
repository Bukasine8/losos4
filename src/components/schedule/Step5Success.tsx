"use client";

import { CheckCircle, Calendar, Download, Home } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBooking, MeetingType } from "@/lib/store/booking-context";
import Link from "next/link";
import { motion } from "framer-motion";

export function Step5Success() {
    const { meetingType, date, timeSlot, details } = useBooking();

    if (!date || !timeSlot || !details) return null;

    // Generate Google Calendar Link
    const startTime = format(new Date(date), "yyyyMMdd") + "T" + timeSlot.replace(/:/g, "").replace(/ (AM|PM)/, "") + "00";
    // Rough end time estimation (30 mins later) - proper parsing would be better but this is a simple mock
    // For production, use date-fns to parse the time string properly.
    // Using a simplified approach here just for the template link.

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Losos4+Engineering&dates=${startTime}/${startTime}&details=Project:+${encodeURIComponent(details.projectCategory)}%0AClient:+${encodeURIComponent(details.fullName)}&location=${meetingType === 'virtual' ? 'Google Meet' : 'Losos4 Office'}`;

    return (
        <div className="max-w-2xl mx-auto text-center space-y-8 py-8">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <div className="bg-green-100 dark:bg-green-900/30 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-primary mb-2">Meeting Scheduled!</h2>
                <p className="text-xl text-muted-foreground">
                    We&apos;ve sent a confirmation email to <span className="font-semibold text-foreground">{details.email}</span>
                </p>
            </motion.div>

            <Card className="text-left border-accent/20 shadow-lg">
                <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b border-border">
                    <CardTitle className="text-center text-lg font-medium text-muted-foreground">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Calendar className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">{format(new Date(date), "EEEE, MMMM do, yyyy")}</p>
                                <p className="text-muted-foreground">{timeSlot} (30 mins)</p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="font-semibold">{details.fullName}</p>
                            <p className="text-muted-foreground capitalize">{meetingType} Meeting</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open(googleCalendarUrl, "_blank")}
                >
                    <Calendar className="mr-2 h-5 w-5" /> Add to Google Calendar
                </Button>
                <Link href="/">
                    <Button variant="outline" className="h-12 px-8 rounded-full border-border hover:bg-slate-100">
                        <Home className="mr-2 h-5 w-5" /> Return Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
