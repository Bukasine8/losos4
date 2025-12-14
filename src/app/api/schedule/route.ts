
import { NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/schemas/booking-schema';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real app, you would:
        // 1. Validate the body again with Zod
        // 2. Save to database
        // 3. Send emails

        // For now, we simulate success
        console.log("----- NEW BOOKING RECEIVED -----");
        console.log(JSON.stringify(body, null, 2));
        console.log("--------------------------------");

        return NextResponse.json({ success: true, message: "Booking confirmed" });
    } catch (error) {
        console.error("Booking API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process booking" },
            { status: 500 }
        );
    }
}
