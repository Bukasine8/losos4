import * as z from "zod";

export const bookingSchema = z.object({
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    companyName: z.string().optional(),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    projectCategory: z.string().min(1, { message: "Please select a project category." }),
    projectLocation: z.string().min(2, { message: "Project location is required." }),
    timeline: z.string().optional(),
    budget: z.string().optional(),
    description: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
