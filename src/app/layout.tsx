
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Google Analytics, ChatWidget imports
import { GoogleAnalytics } from "@next/third-parties/google";
import { ChatWidget } from "@/components/chat/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Losos4 Engineering Consulting",
  description: "Engineering You Can Trust. Results You Can Measure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
        <ChatWidget />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
