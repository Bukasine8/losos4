
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
        </div>
    );
}
