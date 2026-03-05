import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lithium Battery Catalog | 12V, 24V, 48V LFP | EY Power",
    description: "Browse our range of high-performance LiLifePO4 batteries for residential and industrial use in Pakistan. Technical specs for all models.",
};

const products = [
    {
        id: "ey-12-100",
        name: "EY-12-100 Lithium",
        series: "12V Standard Series",
        specs: {
            voltage: "12.8V",
            capacity: "100Ah",
            energy: "1280Wh",
            cycle: "6000+ @ 80% DoD"
        },
        category: "Residential / Small UPS"
    },
    {
        id: "ey-24-100",
        name: "EY-24-100 Pro",
        series: "24V Power Series",
        specs: {
            voltage: "25.6V",
            capacity: "100Ah",
            energy: "2560Wh",
            cycle: "6000+ @ 80% DoD"
        },
        category: "Solar / Telecom"
    },
    {
        id: "ey-48-100",
        name: "EY-48-100 Max",
        series: "48V Rackmount Series",
        specs: {
            voltage: "51.2V",
            capacity: "100Ah",
            energy: "5120Wh",
            cycle: "6000+ @ 80% DoD"
        },
        category: "C&I Storage / Server Room"
    },
    {
        id: "ey-48-200",
        name: "EY-48-200 Ultra",
        series: "48V High Capacity",
        specs: {
            voltage: "51.2V",
            capacity: "200Ah",
            energy: "10.24kWh",
            cycle: "6000+ @ 80% DoD"
        },
        category: "Industrial Power"
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />

            {/* Catalog Header */}
            <section className="py-20 bg-zinc-50 border-b border-zinc-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-heading font-black tracking-tight">
                            PRODUCT <span className="text-accent">CATALOG</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                            Industrial-grade LiFePO4 batteries designed for durability, safety, and efficiency. Explore our standard series for various applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.id} className="border border-zinc-100 shadow-sm hover:shadow-xl hover:border-accent transition-all group">
                                <CardHeader className="p-0 overflow-hidden aspect-[4/3] bg-zinc-100 flex items-center justify-center relative">
                                    <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                        {product.series}
                                    </div>
                                    {/* Placeholder for Product Image */}
                                    <div className="w-32 h-40 bg-zinc-200 border-x-4 border-t-4 border-zinc-300 rounded-lg relative flex flex-col items-center justify-center">
                                        <div className="absolute top-2 w-16 h-1 bg-accent/30 rounded" />
                                        <div className="text-[10px] font-mono font-bold text-zinc-400">EY POWER</div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <CardTitle className="text-xl font-heading font-bold">{product.name}</CardTitle>
                                        <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{product.category}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-3 pt-4 border-t border-zinc-100">
                                        {Object.entries(product.specs).map(([key, value]) => (
                                            <div key={key}>
                                                <div className="text-[10px] text-zinc-400 uppercase font-bold">{key}</div>
                                                <div className="text-sm font-bold text-black">{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 flex gap-3">
                                    <Button className="flex-1 bg-zinc-100 text-black font-black hover:bg-zinc-200 border-none uppercase tracking-widest text-[10px]">
                                        View Specs
                                    </Button>
                                    <Button className="flex-1 bg-accent text-black font-black hover:bg-yellow-400 border-none uppercase tracking-widest text-[10px]">
                                        Inquire
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Quote CTA */}
            <section className="py-20 bg-accent text-black overflow-hidden relative">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl font-heading font-black leading-tight uppercase">Custom Battery Packs & Large Scale BESS?</h2>
                        <p className="text-lg font-medium opacity-80">
                            We specialize in custom engineering for MW-scale projects. Speak with our technical team today.
                        </p>
                    </div>
                    <Button size="lg" className="bg-black text-white hover:bg-zinc-900 font-bold px-12 h-14">
                        Get Industrial Quote
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
