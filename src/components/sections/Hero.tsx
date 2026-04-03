import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] lg:minh-[100vh] flex items-center overflow-hidden bg-white text-black pt-24 lg:pt-32 border-b border-zinc-100">
            {/* Background overlay/texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('/grid-texture.png')] bg-repeat pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pb-12 lg:pb-24">
                <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-block px-3 py-1 bg-[#FFCC00]/20 border border-[#FFCC00] text-black text-[10px] md:text-sm font-bold tracking-widest uppercase rounded-full mb-2">
                        Engineering-Driven Reliability
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black leading-[1.1] tracking-tighter">
                        POWERING <span className="text-[#000000] underline decoration-[#FFCC00]/50 underline-offset-8 bg-[#FFCC00] px-2 leading-tight">PAKISTAN’S</span> INDUSTRIAL FUTURE
                    </h1>
                    <p className="text-base md:text-lg text-zinc-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                        Premium LiFePO4 Lithium Batteries and Industrial Energy Storage Systems (ESS/BESS) designed for uncompromising reliability and efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <Link href="/products" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-[#FFCC00] text-black hover:bg-yellow-500 font-black px-10 h-14 border border-[#FFCC00]">
                                Explore Products
                            </Button>
                        </Link>
                        <Link href="/solutions/bess#inquire" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 font-black px-10 h-14 shadow-xl">
                                Get Industrial Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile-Optimized Product Visual */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[450px] xl:h-[550px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#FFCC00]/10 blur-[100px] rounded-full" />
                    <div className="relative z-10 w-full max-w-[500px] aspect-square bg-white backdrop-blur-sm border-2 border-zinc-100 rounded-3xl flex items-center justify-center p-6 md:p-12 shadow-2xl overflow-hidden group hover:border-[#FFCC00] transition-colors">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="text-center space-y-4 md:space-y-6">
                            <div className="w-12 md:w-16 h-1 bg-[#FFCC00] mx-auto" />
                            <p className="text-black font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Industrial BESS</p>
                            <h3 className="text-2xl md:text-4xl font-heading font-black tracking-tight text-black">1MW+ SCALE SOLUTIONS</h3>
                            <div className="flex gap-2 justify-center opacity-30">
                                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse delay-75" />
                                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse delay-150" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
