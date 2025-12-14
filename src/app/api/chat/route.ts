import { NextResponse } from "next/server";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions"; // Verify exact endpoint

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        if (!DEEPSEEK_API_KEY) {
            // Fallback or mock response if no key is present (for dev/demo)
            // return NextResponse.json({ reply: "I'm currently in demo mode. Please configure the API Key to chat properly." });
            console.warn("DEEPSEEK_API_KEY is missing");
            return NextResponse.json({
                reply: "I am currently unable to connect to my brain (API Key missing). Please contact the administrator."
            });
        }

        const response = await fetch(DEEPSEEK_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: "You are a helpful assistant for 'Losos4 Engineering Consulting'. You are professional, knowledgeable about civil and structural engineering, and eager to help potential clients schedule consultations." },
                    { role: "user", content: message },
                ],
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Deepseek API Error:", response.status, errorText);

            // Try to parse the error message if it's JSON
            try {
                const errorJson = JSON.parse(errorText);
                return NextResponse.json(
                    { error: errorJson.error?.message || "Failed to fetch from AI provider" },
                    { status: response.status }
                );
            } catch {
                return NextResponse.json({ error: "Failed to fetch from AI provider" }, { status: 500 });
            }
        }

        const data = await response.json();
        const reply = data.choices[0].message.content;

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
