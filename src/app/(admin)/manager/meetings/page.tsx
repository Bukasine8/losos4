"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { GlassCard } from "@/components/ui/GlassCard";
import { format } from "date-fns";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle, XCircle } from "lucide-react";

interface Meeting {
    id: string;
    client_name: string;
    client_email: string;
    client_phone: string | null;
    company_name: string | null;
    meeting_type: string;
    meeting_date: string;
    meeting_time: string;
    status: string;
    additional_notes: string | null;
    created_at: string;
}

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState<Meeting[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
    const [filterStatus, setFilterStatus] = useState<string>("all");

    useEffect(() => {
        fetchMeetings();

        // Subscribe to realtime updates
        const channel = supabaseBrowser
            .channel("meetings")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "meetings" },
                () => {
                    fetchMeetings();
                }
            )
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, []);

    async function fetchMeetings() {
        try {
            let query = supabaseBrowser
                .from("meetings")
                .select("*")
                .order("meeting_date", { ascending: false });

            if (filterStatus !== "all") {
                query = query.eq("status", filterStatus);
            }

            const { data, error } = await query;

            if (error) throw error;
            setMeetings(data || []);
        } catch (error) {
            console.error("Error fetching meetings:", error);
        } finally {
            setLoading(false);
        }
    }

    async function updateStatus(id: string, newStatus: string) {
        try {
            const { error } = await supabaseBrowser
                .from("meetings")
                .update({ status: newStatus })
                .eq("id", id);

            if (error) throw error;
            fetchMeetings();
            setSelectedMeeting(null);
        } catch (error) {
            console.error("Error updating status:", error);
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500/20 text-yellow-500";
            case "confirmed":
                return "bg-blue-500/20 text-blue-500";
            case "completed":
                return "bg-green-500/20 text-green-500";
            case "cancelled":
                return "bg-red-500/20 text-red-500";
            default:
                return "bg-gray-500/20 text-gray-500";
        }
    };

    const pendingCount = meetings.filter((m) => m.status === "pending").length;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold gradient-text mb-2">
                        Meeting Bookings
                    </h1>
                    <p className="text-muted-foreground">
                        Manage client meeting requests
                    </p>
                </div>
                {pendingCount > 0 && (
                    <Badge className="bg-yellow-500 text-white px-4 py-2">
                        {pendingCount} Pending
                    </Badge>
                )}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
                {["all", "pending", "confirmed", "completed", "cancelled"].map((status) => (
                    <Button
                        key={status}
                        variant={filterStatus === status ? "default" : "outline"}
                        onClick={() => {
                            setFilterStatus(status);
                            fetchMeetings();
                        }}
                        size="sm"
                        className="capitalize"
                    >
                        {status}
                    </Button>
                ))}
            </div>

            <GlassCard className="p-6">
                {loading ? (
                    <div className="text-center py-8">Loading...</div>
                ) : meetings.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                        No meetings found
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Date & Time</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {meetings.map((meeting) => (
                                    <TableRow key={meeting.id}>
                                        <TableCell>
                                            <div>
                                                <p className="font-medium">{meeting.client_name}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {meeting.client_email}
                                                </p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="capitalize">
                                            {meeting.meeting_type}
                                        </TableCell>
                                        <TableCell>
                                            {format(new Date(meeting.meeting_date), "MMM dd, yyyy")}
                                            <br />
                                            <span className="text-sm text-muted-foreground">
                                                {meeting.meeting_time}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(meeting.status)}>
                                                {meeting.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => setSelectedMeeting(meeting)}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </GlassCard>

            {/* Detail Modal */}
            {selectedMeeting && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedMeeting(null)}
                >
                    <div
                        className="glass max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto rounded-lg border border-white/10 backdrop-blur-xl bg-background/80"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4">Meeting Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-muted-foreground">Client Name</label>
                                <p className="font-medium">{selectedMeeting.client_name}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Email</label>
                                <p className="font-medium">{selectedMeeting.client_email}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Phone</label>
                                <p className="font-medium">{selectedMeeting.client_phone || "N/A"}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Company</label>
                                <p className="font-medium">{selectedMeeting.company_name || "N/A"}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Meeting Type</label>
                                <p className="font-medium capitalize">{selectedMeeting.meeting_type}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Date & Time</label>
                                <p className="font-medium">
                                    {format(new Date(selectedMeeting.meeting_date), "MMMM d, yyyy")} at{" "}
                                    {selectedMeeting.meeting_time}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Additional Notes</label>
                                <p className="font-medium whitespace-pre-wrap">
                                    {selectedMeeting.additional_notes || "None"}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Status</label>
                                <div className="flex gap-2 mt-2">
                                    {["pending", "confirmed", "completed", "cancelled"].map((status) => (
                                        <Button
                                            key={status}
                                            size="sm"
                                            variant={selectedMeeting.status === status ? "default" : "outline"}
                                            onClick={() => updateStatus(selectedMeeting.id, status)}
                                            className="capitalize"
                                        >
                                            {status}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <Button onClick={() => setSelectedMeeting(null)}>Close</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
