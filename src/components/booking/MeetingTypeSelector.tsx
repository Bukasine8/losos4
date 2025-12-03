"use client";

import { motion } from "framer-motion";
import { Video, MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

interface MeetingTypeSelectorProps {
    onSelect: (type: "physical" | "online") => void;
}

export function MeetingTypeSelector({ onSelect }: MeetingTypeSelectorProps) {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Schedule a Meeting</h1>
                <p className="text-muted-foreground">
                    Choose your preferred meeting type
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <GlassCard
                        className="p-8 cursor-pointer hover:border-primary/50 transition-all h-full"
                        onClick={() => onSelect("physical")}
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <MapPin className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold">Physical Meeting</h3>
                            <p className="text-muted-foreground">
                                Meet us at our office for an in-person consultation
                            </p>
                            <p className="text-sm text-primary font-medium">
                                Losos4 Engineering Office, Lagos
                            </p>
                        </div>
                    </GlassCard>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <GlassCard
                        className="p-8 cursor-pointer hover:border-primary/50 transition-all h-full"
                        onClick={() => onSelect("online")}
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                                <Video className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold">Online Meeting</h3>
                            <p className="text-muted-foreground">
                                Connect with us via video call from anywhere
                            </p>
                            <p className="text-sm text-secondary font-medium">
                                Google Meet Link Provided
                            </p>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
