"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Lock, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const { data, error: signInError } = await supabaseBrowser.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) throw signInError;

            if (data.session) {
                router.push("/manager");
                router.refresh();
            }
        } catch (err: any) {
            setError(err.message || "Failed to sign in. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <FuturisticBackground variant="grid" />

            {/* Back to Home Link */}
            <Link
                href="/"
                className="absolute top-6 left-6 z-20 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md px-4">
                <GlassCard className="p-8 space-y-6">
                    {/* Logo/Brand */}
                    <div className="text-center space-y-2">
                        <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                            <Lock className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold gradient-text">Manager Portal</h1>
                        <p className="text-muted-foreground">
                            Sign in to access the management dashboard
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-destructive">{error}</p>
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@losos4.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10"
                                    required
                                    disabled={loading}
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10"
                                    required
                                    disabled={loading}
                                    autoComplete="current-password"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                            size="lg"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="text-center text-sm text-muted-foreground border-t pt-4">
                        <p>🔒 Authorized personnel only</p>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
