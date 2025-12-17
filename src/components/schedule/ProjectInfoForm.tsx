import { cn } from "@/lib/utils";

interface ProjectInfoFormProps {
    data: any;
    onChange: (data: any) => void;
}

export function ProjectInfoForm({ data, onChange }: ProjectInfoFormProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                    <input
                        name="name"
                        value={data.name || ""}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-losos-blue focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        value={data.email || ""}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-losos-blue focus:outline-none transition-colors"
                        placeholder="john@company.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Phone</label>
                    <input
                        name="phone"
                        type="tel"
                        value={data.phone || ""}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-losos-blue focus:outline-none transition-colors"
                        placeholder="+234..."
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Organization</label>
                    <input
                        name="company"
                        value={data.company || ""}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-losos-blue focus:outline-none transition-colors"
                        placeholder="Company Ltd"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Project Type</label>
                    <select
                        name="projectType"
                        value={data.projectType || ""}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-losos-blue focus:outline-none transition-colors bg-white"
                    >
                        <option value="">Select Type...</option>
                        <option value="commercial">Commercial</option>
                        <option value="institutional">Institutional</option>
                        <option value="industrial">Industrial</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Estimated Timeline</label>
                    <select
                        name="timeline"
                        value={data.timeline || ""}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-losos-blue focus:outline-none transition-colors bg-white"
                    >
                        <option value="">Select Timeline...</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="exploratory">Just Exploring</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Project Description</label>
                <textarea
                    name="description"
                    value={data.description || ""}
                    onChange={handleChange}
                    className="w-full h-32 p-4 border border-gray-300 rounded-none focus:border-losos-blue focus:outline-none transition-colors resize-none"
                    placeholder="Briefly describe the project scope and engineering needs..."
                />
            </div>
        </div>
    );
}
