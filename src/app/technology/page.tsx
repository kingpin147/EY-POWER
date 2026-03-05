import { Navbar } from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "LiFePO4 Battery Technology | EY Power Pakistan",
    description: "Learn about Advanced Lithium Iron Phosphate (LFP) chemistry, safety standards, and 6000+ cycle lifespan of EY Power batteries.",
};

export default function TechnologyPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />

            {/* Hero / Header */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-heading font-black tracking-tight">
                            ADVANCED <span className="text-accent">LiFePO4</span> CHEMISTRY
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Why EY Power chooses Lithium Iron Phosphate (LFP) as the foundation for Pakistan's most reliable energy storage solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Technology Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <Tabs defaultValue="safety" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 h-16 bg-muted/50 p-1 mb-12">
                            <TabsTrigger value="safety" className="text-lg font-heading font-bold data-[state=active]:bg-black data-[state=active]:text-accent transition-all">UNMATCHED SAFETY</TabsTrigger>
                            <TabsTrigger value="lifespan" className="text-lg font-heading font-bold data-[state=active]:bg-black data-[state=active]:text-accent transition-all">EXTENDED LIFESPAN</TabsTrigger>
                            <TabsTrigger value="efficiency" className="text-lg font-heading font-bold data-[state=active]:bg-black data-[state=active]:text-accent transition-all">SYSTEM EFFICIENCY</TabsTrigger>
                        </TabsList>

                        <TabsContent value="safety" className="space-y-12">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-heading font-bold">Thermal Stability & Safety</h2>
                                    <p className="text-lg text-muted-foreground">
                                        LiFePO4 is non-combustible. Unlike NMC (Nickel Manganese Cobalt) chemistries, LFP does not suffer from thermal runaway. Even under extreme conditions like puncture or short-circuit, it remains stable.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-accent rounded-full" />
                                            <span>High thermal runaway threshold (600°C+)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-accent rounded-full" />
                                            <span>No toxic fumes or risk of oxygen release during failure</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-accent rounded-full" />
                                            <span>Passive cooling design optimized for Pakistani heat</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative aspect-video bg-zinc-100 rounded-3xl border-2 border-dashed border-zinc-200 flex items-center justify-center p-12 text-center overflow-hidden">
                                    <div className="absolute top-4 left-4 bg-black text-accent px-3 py-1 text-xs font-bold uppercase rounded">Simulation</div>
                                    <p className="text-sm font-mono text-zinc-400">Thermal Gradient Visualization</p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="lifespan" className="space-y-12">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1 relative aspect-video bg-zinc-100 rounded-3xl border-2 border-dashed border-zinc-200 flex items-center justify-center text-center">
                                    <p className="text-sm font-mono text-zinc-400">Degradation Curve Analysis</p>
                                </div>
                                <div className="order-1 lg:order-2 space-y-6">
                                    <h2 className="text-3xl font-heading font-bold">6000+ Cycles. 15+ Year Life.</h2>
                                    <p className="text-lg text-muted-foreground">
                                        EY Power batteries are engineered for longevity. While traditional lead-acid batteries fail within 1-2 years, our LFP cells maintain superior capacity even after a decade of daily heavy-duty use.
                                    </p>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="text-lg font-bold">Deep Discharge (100% DoD)</AccordionTrigger>
                                            <AccordionContent>
                                                Unlike other chemistries that degrade quickly when fully discharged, LFP maintains high cycle counts even at 100% Depth of Discharge.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger className="text-lg font-bold">Low Internal Resistance</AccordionTrigger>
                                            <AccordionContent>
                                                Reduces heat generation during fast charging/discharging, further preserving the chemical structure of the cell.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="efficiency" className="space-y-12">
                            <div className="max-w-4xl mx-auto text-center space-y-8">
                                <h2 className="text-3xl font-heading font-bold">98% Round-Trip Efficiency</h2>
                                <p className="text-lg text-muted-foreground">
                                    Minimize energy loss during conversion. EY Power systems ensure that the energy you harvest from the sun or grid is available when you need it, with minimal heat dissipated.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Fast Charging", value: "1C Rate" },
                                        { label: "Energy Density", value: "High" },
                                        { label: "Maintenance", value: "Zero" },
                                        { label: "Weight", value: "40% Lighter" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
                                            <div className="text-2xl font-black">{stat.value}</div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
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
