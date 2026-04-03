import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Factory, Home } from "lucide-react";

export function Segments() {
    return (
        <section className="py-12 md:py-24 bg-zinc-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tight uppercase">Tailored Energy Solutions</h2>
                    <p className="text-muted-foreground text-sm md:text-base">Whether you are powering a luxury residence or a multi-megawatt industrial complex, EY Power delivers precision engineering.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* B2C - Residential */}
                    <div className="relative group overflow-hidden rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all p-6 md:p-10 flex flex-col justify-between min-h-[350px] md:h-[400px]">
                        <div className="space-y-4 md:space-y-6 relative z-10">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center text-black">
                                <Home className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight">Residential & Retail</h3>
                            <p className="text-zinc-500 text-sm md:text-base max-w-sm">Premium LiFePO4 batteries for homes and small businesses. Safe, long-lasting, and maintenance-free storage for Pakistan's environment.</p>
                        </div>
                        <div className="relative z-10">
                            <Link href="/products">
                                <Button size="lg" className="bg-[#FFCC00] text-black hover:bg-yellow-500 rounded-full px-6 md:px-8 group h-12 font-bold">
                                    View Products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                        {/* Subtle background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                    </div>

                    {/* B2B - Industrial */}
                    <div className="relative group overflow-hidden rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-[#FFCC00] transition-all p-6 md:p-10 flex flex-col justify-between min-h-[350px] md:h-[400px]">
                        <div className="space-y-4 md:space-y-6 relative z-10">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-2xl flex items-center justify-center text-[#FFCC00]">
                                <Factory className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight text-black">Industrial & B2B</h3>
                            <p className="text-zinc-600 text-sm md:text-base max-w-sm">MW-scale ESS/BESS solutions, peak shaving, and load management for C&I clients, utility providers, and EPC contractors.</p>
                        </div>
                        <div className="relative z-10">
                            <Link href="/applications">
                                <Button size="lg" className="bg-[#FFCC00] text-black hover:bg-yellow-500 rounded-full px-6 md:px-8 group h-12 font-bold">
                                    Industrial Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                        {/* Subtle background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCC00]/10 rounded-full -mr-20 -mt-20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
        </section>
    );
}
