import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/forms/InquiryForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industrial ESS & BESS Solutions | EY Power Pakistan",
    description: "Scaleable Energy Storage Systems for Solar, Telecom, and Data Centers. Industrial grade BESS solutions from 100kWh to 50MWh.",
};

const applications = [
    {
        title: "C&I Solar Integration",
        description: "Maximizing ROI for Commercial and Industrial solar plants via Peak Shaving and Load Shifting.",
        content: "Store excess solar energy generated during the day and use it during peak tariff hours to drastically reduce electricity bills. Our BESS solutions integrate seamlessly with MW-scale solar inverters.",
        icon: "☀️"
    },
    {
        title: "Telecom BTS Backup",
        description: "High-density lithium storage for 24/7 uptime in remote cell towers and data centers.",
        content: "Lighter, smaller, and more temperature-resistant than lead-acid. EY Power 48V rack-mount series provides the highest reliability for mission-critical infrastructure.",
        icon: "📡"
    },
    {
        title: "UPS & Data Centers",
        description: "Instantaneous power switching with 10x faster discharge rates than traditional batteries.",
        content: "Precision-engineered BMS (Battery Management Systems) ensure zero-latency failover for data centers, hospitals, and high-frequency trading floors.",
        icon: "💻"
    },
    {
        title: "Micro-grids & Rural Power",
        description: "Bringing stable, clean energy to off-grid communities and agricultural sites.",
        content: "Modular and scalable designs that can grow with the community's energy needs. Ruggedized for harsh environmental conditions common in rural Pakistan.",
        icon: "🌾"
    }
];

export default function ApplicationsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />

            {/* Hero Section */}
            <section className="py-24 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent blur-3xl rounded-full translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl lg:text-7xl font-heading font-black tracking-tight leading-[1.1]">
                            INDUSTRIAL <br /><span className="text-accent underline decoration-accent/30 underline-offset-8">SCALE</span> SOLUTIONS
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            BESS (Battery Energy Storage Systems) engineered to handle Pakistan's largest energy challenges. From 100kWh to 50MWh, we scale with your industry.
                        </p>
                        <div className="pt-4 flex gap-4">
                            <Link href="#inquire">
                                <Button size="lg" className="bg-accent text-black font-bold h-14 px-8">Consult an Engineer</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Grid */}
            <section className="py-24 bg-zinc-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {applications.map((app, i) => (
                            <Card key={i} className="border-none shadow-xl shadow-black/5 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                                <CardHeader className="bg-white pb-4">
                                    <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{app.icon}</div>
                                    <CardTitle className="text-2xl font-heading font-bold">{app.title}</CardTitle>
                                    <CardDescription className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mt-2 group-hover:text-accent transition-colors">{app.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="bg-white pb-8">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {app.content}
                                    </p>
                                    <Button variant="link" className="px-0 mt-6 text-black font-black uppercase tracking-widest text-[10px] group-hover:text-accent group-hover:translate-x-1 transition-all">
                                        View Case Study &rarr;
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Spec Section */}
            <section className="py-24 bg-white border-y border-zinc-100">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold">Standardized BESS Cabinets</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our ready-to-deploy ESS cabinets come pre-wired with fire suppression, liquid or air cooling, and integrated EMS.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-zinc-50 rounded-xl space-y-1 border-l-4 border-accent">
                                <div className="text-sm font-bold text-zinc-400 uppercase">Configuration</div>
                                <div className="font-heading font-bold">Cabinet/Containerized</div>
                            </div>
                            <div className="p-4 bg-zinc-50 rounded-xl space-y-1 border-l-4 border-accent">
                                <div className="text-sm font-bold text-zinc-400 uppercase">Protection</div>
                                <div className="font-heading font-bold">IP54 / IP65</div>
                            </div>
                            <div className="p-4 bg-zinc-50 rounded-xl space-y-1 border-l-4 border-accent">
                                <div className="text-sm font-bold text-zinc-400 uppercase">Operating Temp</div>
                                <div className="font-heading font-bold">-20°C to 55°C</div>
                            </div>
                            <div className="p-4 bg-zinc-50 rounded-xl space-y-1 border-l-4 border-accent">
                                <div className="text-sm font-bold text-zinc-400 uppercase">Communication</div>
                                <div className="font-heading font-bold">RS485/CAN/SNMP</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] bg-black rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
                        <div className="absolute inset-0 opacity-40 bg-[url('/blueprint-grid.png')] bg-center opacity-10" />
                        <div className="text-center space-y-4 relative z-10">
                            <div className="w-20 h-1 bg-accent mx-auto" />
                            <p className="font-mono text-accent text-sm tracking-widest">BESS-M series</p>
                            <h3 className="text-4xl text-white font-heading font-bold tracking-tight">215kWh MEGA-BLOCK</h3>
                            <div className="text-zinc-500 text-sm">Industrial High-Density Cabinet</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Section */}
            <section id="inquire" className="py-24 bg-zinc-900 text-white border-t border-zinc-800">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-5xl font-heading font-black underline decoration-accent/30 underline-offset-8">CONSULT WITH AN <span className="text-accent">ENGINEER</span></h2>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Have a specific industrial requirement? Our engineering team in Karachi can help design a custom BESS solution for your facility.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-1">
                                <div className="text-accent font-bold text-xl">24/7</div>
                                <div className="text-xs uppercase text-zinc-500 font-bold">Uptime Support</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-accent font-bold text-xl">48hr</div>
                                <div className="text-xs uppercase text-zinc-500 font-bold">Design Turnaround</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <InquiryForm type="b2b" title="Project Inquiry" dark />
                    </div>
                </div>
            </section>

            <footer className="mt-auto py-12 bg-black border-t border-white/10 text-white/40 text-sm">
                <div className="container mx-auto px-6 text-center">
                    &copy; {new Date().getFullYear()} EY POWER. Engineering Tomorrow, Scaling Today.
                </div>
            </footer>
        </main>
    );
}
