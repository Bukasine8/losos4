"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBooking } from "@/lib/store/booking-context";
import { bookingSchema, BookingFormValues } from "@/lib/schemas/booking-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Step3Details() {
    const { details, setDetails, setStep } = useBooking();

    const form = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            fullName: details?.fullName || "",
            companyName: details?.companyName || "",
            email: details?.email || "",
            phone: details?.phone || "",
            projectCategory: details?.projectCategory || "",
            projectLocation: details?.projectLocation || "",
            timeline: details?.timeline || "",
            budget: details?.budget || "",
            description: details?.description || "",
        },
    });

    const onSubmit = (data: BookingFormValues) => {
        setDetails(data);
        setStep(4);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Project Details</h2>
                <p className="text-muted-foreground mt-2">Tell us a bit about yourself and your needs.</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Section 1: Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2 text-primary/80">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name (Optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Acme Construction Ltd." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@example.com" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+234 800 000 0000" type="tel" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Section 2: Project Info */}
                    <div className="space-y-4 pt-4">
                        <h3 className="text-lg font-semibold border-b pb-2 text-primary/80">Project Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="projectCategory"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Category *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                                                <SelectItem value="electrical">Electrical Engineering</SelectItem>
                                                <SelectItem value="fire">Fire Engineering</SelectItem>
                                                <SelectItem value="civil">Civil Engineering</SelectItem>
                                                <SelectItem value="pm">Project Management</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="projectLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Location *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Abuja, Lagos" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="timeline"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Preferred Timeline</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select timeline" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="immediate">Immediate</SelectItem>
                                                <SelectItem value="1-3-months">1-3 Months</SelectItem>
                                                <SelectItem value="3-6-months">3-6 Months</SelectItem>
                                                <SelectItem value="6-plus-months">6+ Months</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Budget Range (Optional)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select budget range" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="under-1m">Under ₦1M</SelectItem>
                                                <SelectItem value="1m-5m">₦1M - ₦5M</SelectItem>
                                                <SelectItem value="5m-20m">₦5M - ₦20M</SelectItem>
                                                <SelectItem value="20m-plus">₦20M+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="col-span-1 md:col-span-2">
                                        <FormLabel>Project Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Briefly describe your project requirements..."
                                                className="min-h-[100px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between pt-6 border-t border-border">
                        <Button variant="ghost" onClick={() => setStep(2)} type="button">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button type="submit" className="bg-primary hover:bg-primary/90">
                            Review Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
