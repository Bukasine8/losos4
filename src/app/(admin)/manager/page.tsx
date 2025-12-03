"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileText, Users, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalRequests: 0,
        pendingRequests: 0,
        completedRequests: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const { data: requests, error } = await supabaseBrowser
                    .from("consultation_requests")
                    .select("status");

                if (error) throw error;

                const total = requests?.length || 0;
                const pending = requests?.filter((r) => r.status === "pending").length || 0;
                const completed = requests?.filter((r) => r.status === "completed").length || 0;

                setStats({
                    totalRequests: total,
                    pendingRequests: pending,
                    completedRequests: completed,
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    const statCards = [
        {
            title: "Total Requests",
            value: stats.totalRequests,
            icon: FileText,
            color: "text-blue-500",
        },
        {
            title: "Pending",
            value: stats.pendingRequests,
            icon: Clock,
            color: "text-yellow-500",
        },
        {
            title: "Completed",
            value: stats.completedRequests,
            icon: CheckCircle,
            color: "text-green-500",
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome to the Losos4 Admin Panel
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <GlassCard key={stat.title} className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        {stat.title}
                                    </p>
                                    <p className="text-3xl font-bold">
                                        {loading ? "..." : stat.value}
                                    </p>
                                </div>
                                <Icon className={`h-8 w-8 ${stat.color}`} />
                            </div>
                        </GlassCard>
                </div>
        </GlassCard>
        </div >
    );
}
