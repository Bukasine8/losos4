export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div className="container py-10">
            <h1 className="text-4xl font-bold mb-6">Service Detail: {slug}</h1>
            <p className="text-muted-foreground">Content coming soon...</p>
        </div>
    );
}
