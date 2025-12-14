"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hello! How can I help you with your engineering project today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Failed to send message");
            }

            const data = await response.json();
            setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
        } catch (error: any) {
            console.error(error);
            const errorMessage = error.message === "Insufficient Balance"
                ? "My AI brain is currently out of credits. Please check your Deepseek account balance."
                : "Sorry, I'm having trouble connecting right now. Please try again later.";

            setMessages(prev => [...prev, { role: "assistant", content: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-[350px] sm:w-[400px]"
                    >
                        <Card className="border-border shadow-2xl overflow-hidden flex flex-col h-[500px]">
                            <CardHeader className="bg-primary p-4 flex flex-row items-center justify-between sticky top-0 z-10">
                                <div className="flex items-center gap-2 text-primary-foreground">
                                    <MessageCircle className="w-5 h-5" />
                                    <h3 className="font-bold">Losos4 Assistant</h3>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-primary-foreground hover:bg-primary/20 h-8 w-8"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Minimize2 className="w-4 h-4" />
                                </Button>
                            </CardHeader>

                            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                                            msg.role === "user"
                                                ? "bg-accent text-white ml-auto rounded-tr-none"
                                                : "bg-white dark:bg-card border border-border mr-auto rounded-tl-none text-foreground"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="bg-white dark:bg-card border border-border mr-auto rounded-tl-none rounded-2xl px-4 py-2 w-12 flex items-center justify-center">
                                        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </CardContent>

                            <CardFooter className="p-3 bg-background border-t border-border">
                                <form onSubmit={handleSubmit} className="flex w-full gap-2">
                                    <Input
                                        placeholder="Type your message..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1"
                                    />
                                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="shrink-0 bg-accent hover:bg-accent/90">
                                        <Send className="w-4 h-4 text-white" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-colors",
                    isOpen ? "bg-destructive text-white hover:bg-destructive/90" : "bg-primary text-white hover:bg-primary/90"
                )}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
            </motion.button>
        </div>
    );
}
