import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technical Hub | Datasheets & Manuals | EY Power",
    description: "Download official LiFePO4 battery datasheets, installation manuals, and industrial BESS technical documentation.",
};

const resources = [
    {
        title: "EY Power Company Profile",
        type: "Corporate Document",
        size: "4.2 MB",
        description: "Detailed overview of our engineering capabilities, historical milestones, and nationwide presence."
    },
    {
        title: "12V Standard Series Datasheet",
        type: "Technical Specifications",
        size: "1.8 MB",
        description: "Complete electrical and physical specifications for the 12.8V LFP battery range."
    },
    {
        title: "24V Power Series Datasheet",
        type: "Technical Specifications",
        size: "2.1 MB",
        description: "Performance curves and charging parameters for the 25.6V industrial battery series."
    },
    {
        title: "48V Rackmount Installation Manual",
        type: "User Guide",
        size: "5.5 MB",
        description: "Step-by-step assembly, wiring, and parallel configuration guide for server-room storage."
    },
    {
        title: "BESS Containerized Solutions (Brochure)",
        type: "Product Brochure",
        size: "8.9 MB",
        description: "Comprehensive look at our MW-scale energy storage containers for solar and grid integration."
    },
    {
        title: "Warranty & Safety Certificate",
        type: "Legal & Safety",
        size: "1.2 MB",
        description: "Official warranty terms and LiFePO4 safety handling certification (UN38.3 & MSDS)."
    }
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />

            {/* Resources Hero */}
            <section className="py-20 bg-zinc-50 border-b border-zinc-200">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-heading font-black tracking-tight leading-tight uppercase">
                            TECHNICAL <span className="text-accent underline decoration-accent/30 underline-offset-8">HUB</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Access the official documentation, CAD files, and technical datasheets required for professional energy system design.
                        </p>
                    </div>
                    <div className="p-8 bg-black rounded-3xl text-white space-y-6 shadow-2xl">
                        <h3 className="text-xl font-heading font-bold">Search Documentation</h3>
                        <div className="flex gap-2">
                            <Input placeholder="Search by model or keyword..." className="bg-zinc-900 border-zinc-800 text-white h-12" />
                            <Button className="bg-accent text-black font-bold h-12 px-6">Search</Button>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                            <span>Popular:</span>
                            <span className="text-white cursor-pointer hover:text-accent hover:underline transition-colors tracking-tight">48V Series</span>
                            <span className="text-white cursor-pointer hover:text-accent hover:underline transition-colors tracking-tight">MSDS</span>
                            <span className="text-white cursor-pointer hover:text-accent hover:underline transition-colors tracking-tight">BESS Manual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloads Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((res, i) => (
                            <Card key={i} className="border border-zinc-100 shadow-sm hover:border-black transition-all flex flex-col group">
                                <CardHeader className="bg-zinc-50 border-b border-zinc-100 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-white rounded-lg border border-zinc-100 group-hover:border-accent transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-[10px] font-black font-mono text-zinc-400 p-1 border border-zinc-200 rounded uppercase tracking-tighter">PDF / {res.size}</span>
                                    </div>
                                    <CardTitle className="text-xl font-heading font-bold">{res.title}</CardTitle>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1 group-hover:text-black transition-colors">{res.type}</p>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow">
                                    <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-zinc-200 pl-4">
                                        {res.description}
                                    </p>
                                </CardContent>
                                <div className="p-6 pt-0 mt-auto">
                                    <Button variant="outline" className="w-full border-black text-black font-bold hover:bg-black hover:text-white transition-all h-12">
                                        Download File &rarr;
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Support CTA */}
            <section className="py-24 bg-zinc-50 border-t border-zinc-200">
                <div className="container mx-auto px-6 text-center space-y-8">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-heading font-bold uppercase underline decoration-accent/30 underline-offset-8">Need Industrial DXF Files?</h2>
                        <p className="text-lg text-muted-foreground">
                            Our engineering team provides 2D/3D CAD models for consulting engineers and project planners upon request.
                        </p>
                    </div>
                    <Button size="lg" className="bg-black text-white hover:bg-zinc-800 px-12 h-14 font-black">
                        Request Engineering Assets
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-12 bg-black border-t border-white/10 text-white/40 text-sm">
                <div className="container mx-auto px-6 text-center">
                    &copy; {new Date().getFullYear()} EY POWER. Engineering Tomorrow, Scaling Today.
                </div>
            </footer>
        </main>
    );
}
