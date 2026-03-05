import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Factory, Home } from "lucide-react";

export function Segments() {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Tailored Energy Solutions</h2>
                    <p className="text-muted-foreground">Whether you are powering a luxury residence or a multi-megawatt industrial complex, EY Power delivers precision engineering.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* B2C - Residential */}
                    <div className="relative group overflow-hidden rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all p-8 md:p-12 flex flex-col justify-between h-[400px]">
                        <div className="space-y-6 relative z-10">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-black">
                                <Home className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-heading font-black uppercase tracking-tight">Residential & Retail</h3>
                            <p className="text-muted-foreground max-w-sm">Premium LiFePO4 batteries for homes and small businesses. Safe, long-lasting, and maintenance-free storage for Pakistan's environment.</p>
                        </div>
                        <div className="relative z-10">
                            <Link href="/products">
                                <Button size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-full px-8 group">
                                    View Product Range <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                        {/* Subtle background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                    </div>

                    {/* B2B - Industrial */}
                    <div className="relative group overflow-hidden rounded-3xl bg-black text-white p-8 md:p-12 flex flex-col justify-between h-[400px]">
                        <div className="space-y-6 relative z-10">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-black">
                                <Factory className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-heading font-black uppercase tracking-tight">Industrial & B2B</h3>
                            <p className="text-zinc-400 max-w-sm">MW-scale ESS/BESS solutions, peak shaving, and load management for C&I clients, utility providers, and EPC contractors.</p>
                        </div>
                        <div className="relative z-10">
                            <Link href="/applications">
                                <Button size="lg" className="bg-accent text-black hover:bg-yellow-400 rounded-full px-8 group">
                                    Industrial Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                        {/* Subtle background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full -mr-20 -mt-20 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
