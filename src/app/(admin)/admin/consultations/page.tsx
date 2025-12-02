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
import { Eye, Download } from "lucide-react";

interface ConsultationRequest {
    id: string;
    created_at: string;
    full_name: string;
    company_name: string | null;
    email: string;
    phone: string | null;
    project_type: string;
    budget_range: string | null;
    description: string;
    file_url: string | null;
    status: string;
}

export default function ConsultationsPage() {
    const [requests, setRequests] = useState<ConsultationRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedRequest, setSelectedRequest] = useState<ConsultationRequest | null>(null);

    useEffect(() => {
        fetchRequests();
    }, []);

    async function fetchRequests() {
        try {
            const { data, error } = await supabaseBrowser
                .from("consultation_requests")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setRequests(data || []);
        } catch (error) {
            console.error("Error fetching requests:", error);
        } finally {
            setLoading(false);
        }
    }

    async function updateStatus(id: string, newStatus: string) {
        try {
            const { error } = await supabaseBrowser
                .from("consultation_requests")
                .update({ status: newStatus })
                .eq("id", id);

            if (error) throw error;
            fetchRequests();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500/20 text-yellow-500";
            case "in_progress":
                return "bg-blue-500/20 text-blue-500";
            case "completed":
                return "bg-green-500/20 text-green-500";
            default:
                return "bg-gray-500/20 text-gray-500";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold gradient-text mb-2">
                        Consultation Requests
                    </h1>
                    <p className="text-muted-foreground">
                        Manage incoming client consultation requests
                    </p>
                </div>
            </div>

            <GlassCard className="p-6">
                {loading ? (
                    <div className="text-center py-8">Loading...</div>
                ) : requests.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                        No consultation requests yet
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Project Type</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {requests.map((request) => (
                                    <TableRow key={request.id}>
                                        <TableCell>
                                            {format(new Date(request.created_at), "MMM dd, yyyy")}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {request.full_name}
                                        </TableCell>
                                        <TableCell>{request.company_name || "-"}</TableCell>
                                        <TableCell>{request.email}</TableCell>
                                        <TableCell className="capitalize">
                                            {request.project_type.replace("-", " ")}
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(request.status)}>
                                                {request.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    onClick={() => setSelectedRequest(request)}
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                {request.file_url && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={() => window.open(request.file_url!, "_blank")}
                                                    >
                                                        <Download className="h-4 w-4" />
                                                    </Button>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </GlassCard>

            {/* Detail Modal */}
            {selectedRequest && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedRequest(null)}
                >
                    <GlassCard
                        className="max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4">Request Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-muted-foreground">Full Name</label>
                                <p className="font-medium">{selectedRequest.full_name}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Company</label>
                                <p className="font-medium">{selectedRequest.company_name || "N/A"}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Email</label>
                                <p className="font-medium">{selectedRequest.email}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Phone</label>
                                <p className="font-medium">{selectedRequest.phone || "N/A"}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Project Type</label>
                                <p className="font-medium capitalize">
                                    {selectedRequest.project_type.replace("-", " ")}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Budget Range</label>
                                <p className="font-medium">{selectedRequest.budget_range || "N/A"}</p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Description</label>
                                <p className="font-medium whitespace-pre-wrap">
                                    {selectedRequest.description}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Status</label>
                                <div className="flex gap-2 mt-2">
                                    {["pending", "in_progress", "completed"].map((status) => (
                                        <Button
                                            key={status}
                                            size="sm"
                                            variant={selectedRequest.status === status ? "default" : "outline"}
                                            onClick={() => updateStatus(selectedRequest.id, status)}
                                        >
                                            {status}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <Button onClick={() => setSelectedRequest(null)}>Close</Button>
                        </div>
                    </GlassCard>
                </div>
            )}
        </div>
    );
}
