import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden bg-black text-white pt-24 lg:pt-32">
            {/* Background overlay/texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid-texture.png')] bg-repeat pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pb-12 lg:pb-24">
                <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-[10px] md:text-sm font-medium tracking-widest uppercase rounded-full mb-2">
                        Engineering-Driven Reliability
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black leading-[1.1] tracking-tighter">
                        POWERING <span className="text-accent underline decoration-accent/30 underline-offset-8">PAKISTAN’S</span> INDUSTRIAL FUTURE
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Premium LiFePO4 Lithium Batteries and Industrial Energy Storage Systems (ESS/BESS) designed for uncompromising reliability and efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <Link href="/products" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-accent text-black hover:bg-yellow-400 font-black px-10 h-14">
                                Explore Products
                            </Button>
                        </Link>
                        <Link href="/solutions/bess#inquire" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-zinc-100 font-black px-10 h-14 shadow-xl">
                                Get Industrial Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile-Optimized Product Visual */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[450px] xl:h-[550px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full" />
                    <div className="relative z-10 w-full max-w-[500px] aspect-square bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl flex items-center justify-center p-6 md:p-12 shadow-2xl overflow-hidden group">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="text-center space-y-4 md:space-y-6">
                            <div className="w-12 md:w-16 h-1 bg-accent mx-auto" />
                            <p className="text-accent font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Industrial BESS</p>
                            <h3 className="text-2xl md:text-4xl font-heading font-black tracking-tight">1MW+ SCALE SOLUTIONS</h3>
                            <div className="flex gap-2 justify-center opacity-30">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-75" />
                                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-150" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
