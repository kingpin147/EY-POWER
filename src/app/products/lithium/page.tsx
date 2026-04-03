"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Battery,
  Lightbulb,
  Home
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "ey-2-5kwh",
    name: "EY Power 2.56kWh",
    type: "Compact Series",
    specs: "100Ah | 25.6V | LiFePO4",
    features: ["6000+ Cycles", "Smart BMS", "RS485/CAN Support"],
    description: "Perfect for smaller setups and reliable backup power."
  },
  {
    id: "ey-5kwh",
    name: "EY Power 5.12kWh",
    type: "Wall-Mounted / Stackable",
    specs: "100Ah | 51.2V | LiFePO4",
    features: ["Max Efficiency", "Expandable", "LCD Display"],
    description: "The ideal choice for modern households. Compact, safe, and designed for 10+ years of maintenance-free service."
  },
  {
    id: "ey-14kwh",
    name: "EY Power 14.33kWh",
    type: "High Capacity Industrial",
    specs: "280Ah | 51.2V | LiFePO4",
    features: ["Standard Rack Design", "Parallel up to 15 Units", "Industrial Grade"],
    description: "Designed for commercial applications and maximum uptime. Industrial modular scalability at its finest."
  }
];

export default function LithiumPage() {
  const handleInquire = (productName: string) => {
    const event = new CustomEvent("open-whatsapp-gateway", {
      detail: { productName }
    });
    window.dispatchEvent(event);
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-accent text-black hover:bg-yellow-400 font-bold px-4 py-1 uppercase tracking-widest text-xs">B2C Product Range</Badge>
              <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
                Premium <span className="text-accent underline decoration-black/5 underline-offset-8">Lithium</span><br />
                LifePO4 Batteries
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Uncompromising safety and longevity for your home and business. 
                Our Tier-1 LiFePO4 cells ensure 15+ years of design life with zero maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => handleInquire("General Inquiry")}
                  className="bg-[#FFCC00] text-black hover:bg-yellow-500 font-bold px-8 w-full sm:w-auto h-14 uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95"
                >
                  Check Retail Price
                </button>
              </div>
            </div>
            
            <div className="relative aspect-video bg-zinc-100 rounded-[2rem] overflow-hidden border border-zinc-200">
               <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image 
                    src="/51.2V100Ah_LiFePO₄ Battery.png" 
                    alt="EY Power Lithium Battery" 
                    width={500} 
                    height={500} 
                    className="object-contain w-full h-full drop-shadow-2xl"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur p-6 rounded-2xl border border-white shadow-xl">
                      <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-1">Standard Warranty</p>
                      <h3 className="text-xl font-bold">5-10 Years Comprehensive</h3>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tight">Available Models</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-accent">{product.type}</p>
                    <h3 className="text-2xl font-heading font-black uppercase tracking-tight">{product.name}</h3>
                    <p className="text-sm font-bold text-zinc-400">{product.specs}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight">
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-50">
                  <Button 
                    onClick={() => handleInquire(product.name)}
                    className="w-full bg-[#FFCC00] text-black hover:bg-yellow-500 rounded-xl h-12 font-bold group"
                  >
                    Inquire Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Tech Section */}
      <section className="py-24 bg-white border-t border-zinc-200 text-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight leading-tight">
                  Why Install <span className="text-accent">EY Power</span> at Home?
                </h2>
                <div className="space-y-6 pt-4">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#FFCC00] text-black rounded-xl flex items-center justify-center shrink-0"><Zap className="w-6 h-6"/></div>
                      <div>
                        <h4 className="font-bold uppercase tracking-tight text-lg mb-1">High Discharge Rate</h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">Handle high-surge appliances like ACs and motors without voltage drops.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#FFCC00] text-black rounded-xl flex items-center justify-center shrink-0"><ShieldCheck className="w-6 h-6"/></div>
                      <div>
                        <h4 className="font-bold uppercase tracking-tight text-lg mb-1">Non-Combustible Chemistry</h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">LiFePO4 stays stable even under extreme heat, ensuring family safety.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#FFCC00] text-black rounded-xl flex items-center justify-center shrink-0"><Home className="w-6 h-6"/></div>
                      <div>
                        <h4 className="font-bold uppercase tracking-tight text-lg mb-1">Elegant Design</h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">Sleek, wall-mounted units that complement your modern home interior.</p>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="bg-zinc-50 rounded-[3rem] p-12 border border-zinc-200 relative overflow-hidden shadow-sm">
                <div className="space-y-4 relative z-10 text-center">
                   <Lightbulb className="w-14 h-14 text-accent mx-auto mb-6 drop-shadow-sm" />
                   <h3 className="text-3xl font-heading font-black uppercase tracking-tight">Become a Retailer?</h3>
                   <p className="text-zinc-600 font-medium">Join our nationwide distribution network and start offering Pakistan's premium lithium solution to your customers.</p>
                   <div className="pt-8">
                     <Link href="/distributors">
                        <Button size="lg" className="bg-[#FFCC00] text-black hover:bg-yellow-500 rounded-full font-black px-12 h-14 text-lg border-2 border-[#FFCC00]">Apply to Join</Button>
                     </Link>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
