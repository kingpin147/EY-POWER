import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full h-[80vh] flex items-center overflow-hidden bg-black text-white">
            {/* Background overlay/texture could go here */}
            <div className="absolute inset-0 opacity-20 bg-[url('/grid-texture.png')] bg-repeat pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-sm font-medium tracking-wider uppercase rounded-full">
                        Engineering-Driven Reliability
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight">
                        POWERING <span className="text-accent underline decoration-accent/30 underline-offset-8">PAKISTAN’S</span> INDUSTRIAL FUTURE
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                        Premium LiFePO4 Lithium Batteries and Industrial Energy Storage Systems (ESS/BESS) designed for uncompromising reliability and efficiency.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href="/products">
                            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-bold px-8">
                                Explore Products
                            </Button>
                        </Link>
                        <Link href="/applications#inquire">
                            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black font-bold px-8">
                                Get Industrial Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Placeholder for Product Visual/Image */}
                <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
                    {/* We'll use a placeholder for now, but a high-res BESS cabinet render would look amazing here */}
                    <div className="relative z-10 w-full aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center p-8 shadow-2xl overflow-hidden group">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="text-center space-y-4">
                            <div className="w-16 h-1 w-accent mx-auto" />
                            <p className="text-accent font-mono text-sm tracking-widest uppercase">EY Power Industrial BESS</p>
                            <h3 className="text-3xl font-heading font-bold">1MW+ SCALE SOLUTIONS</h3>
                            <div className="flex gap-2 justify-center opacity-50">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-75" />
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-150" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
