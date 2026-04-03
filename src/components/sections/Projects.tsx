import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "500kW Industrial BESS",
        location: "SITE, Karachi",
        type: "Peak Shaving",
        image: "/project-bess.jpg", // Placeholder
        description: "Multi-rack industrial storage system for a large textile facility."
    },
    {
        title: "100kWh Commercial Backup",
        location: "Islamabad Highway",
        type: "Critical Power",
        image: "/project-commercial.jpg", // Placeholder
        description: "High-uptime energy storage for commercial plazas and offices."
    },
    {
        title: "Solar-Hybrid C&I",
        location: "Ferozepur Road, Lahore",
        type: "Self-Consumption",
        image: "/project-solar.jpg", // Placeholder
        description: "Integrated solar storage for a commercial manufacturing plant."
    }
];

export function Projects() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Proven Industrial Engineering</h2>
                        <p className="text-muted-foreground">EY Power systems are deployed across Pakistan’s most demanding industrial environments, ensuring uptime where it matters most.</p>
                    </div>
                    <div>
                        <Link href="/applications" className="group flex items-center gap-2 font-bold text-sm tracking-widest uppercase hover:text-accent transition-colors">
                            Explore All Solutions <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <div key={i} className="group relative bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-[#FFCC00] transition-all p-6 space-y-6 shadow-sm">
                            <div className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                                {/* This would be an Image component with actual project photos */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-mono text-xs uppercase tracking-widest">Project Visual</div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-black bg-[#FFCC00] px-2 py-0.5 rounded">
                                        {project.type}
                                    </span>
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground">{project.location}</span>
                                </div>
                                <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
