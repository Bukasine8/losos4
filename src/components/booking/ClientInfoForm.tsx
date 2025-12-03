"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/ui/GlassCard";
import { ChevronLeft } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { format } from "date-fns";

interface ClientInfoFormProps {
    meetingType: "physical" | "online";
    date: Date;
    time: string;
    onSubmit: (data: any) => void;
    onBack: () => void;
}

export function ClientInfoForm({
    meetingType,
    date,
    time,
    onSubmit,
    onBack,
}: ClientInfoFormProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        companyName: "",
        additionalNotes: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabaseBrowser
                .from("meetings")
                .insert([
                    {
                        client_name: formData.clientName,
                        client_email: formData.clientEmail,
                        client_phone: formData.clientPhone,
                        company_name: formData.companyName,
                        meeting_type: meetingType,
                        meeting_date: format(date, "yyyy-MM-dd"),
                        meeting_time: time,
                        additional_notes: formData.additionalNotes,
                        status: "pending",
                    },
                ])
                .select()
                .single();

            if (error) throw error;

            onSubmit({ ...formData, ...data, date, time, meetingType });
        } catch (error) {
            console.error("Error booking meeting:", error);
            alert("Failed to book meeting. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
            </Button>

            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">Your Information</h2>
                <p className="text-muted-foreground">
                    Tell us about you so we can prepare for the meeting
                </p>
            </div>

            <GlassCard className="p-8 max-w-2xl mx-auto">
                {/* Meeting Summary */}
                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Meeting Details</h3>
                    <div className="space-y-1 text-sm">
                        <p>
                            <span className="text-muted-foreground">Type:</span>{" "}
                            <span className="capitalize">{meetingType} Meeting</span>
                        </p>
                        <p>
                            <span className="text-muted-foreground">Date:</span>{" "}
                            {format(date, "MMMM d, yyyy")}
                        </p>
                        <p>
                            <span className="text-muted-foreground">Time:</span> {time}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Full Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                            required
                            value={formData.clientName}
                            onChange={(e) =>
                                setFormData({ ...formData, clientName: e.target.value })
                            }
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email Address <span className="text-destructive">*</span>
                        </label>
                        <Input
                            required
                            type="email"
                            value={formData.clientEmail}
                            onChange={(e) =>
                                setFormData({ ...formData, clientEmail: e.target.value })
                            }
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Phone Number <span className="text-destructive">*</span>
                        </label>
                        <Input
                            required
                            type="tel"
                            value={formData.clientPhone}
                            onChange={(e) =>
                                setFormData({ ...formData, clientPhone: e.target.value })
                            }
                            placeholder="+234 xxx xxx xxxx"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Company Name
                        </label>
                        <Input
                            value={formData.companyName}
                            onChange={(e) =>
                                setFormData({ ...formData, companyName: e.target.value })
                            }
                            placeholder="Your Company (optional)"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Additional Notes
                        </label>
                        <Textarea
                            value={formData.additionalNotes}
                            onChange={(e) =>
                                setFormData({ ...formData, additionalNotes: e.target.value })
                            }
                            placeholder="Tell us about your project or any specific requirements..."
                            rows={4}
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Booking..." : "Book Meeting"}
                    </Button>
                </form>
            </GlassCard>
        </div>
    );
}
