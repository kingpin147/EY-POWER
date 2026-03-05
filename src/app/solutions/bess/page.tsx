import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  ShieldCheck, 
  Settings2, 
  BarChart3, 
  ArrowRight,
  Database,
  Building2,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { InquiryForm } from "@/components/forms/InquiryForm";

export default function BESSPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-6">
            <Badge className="bg-accent text-black hover:bg-yellow-400 font-bold px-4 py-1 uppercase tracking-widest text-xs">Industrial Solution</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-tight">
              MW-Scale <span className="text-accent">BESS</span> & Industrial Energy Storage
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Design, engineering, and deployment of containerized Battery Energy Storage Systems (BESS) for C&I 
              applications, utility-scale peak shaving, and micro-grid stabilization.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#inquire">
                <Button size="lg" className="bg-accent text-black hover:bg-yellow-400 font-black px-8 h-14">
                  Request Technical Proposal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Industrial Use Cases</h2>
                <p className="text-muted-foreground text-lg">Our ESS solutions are engineered to solve specific energy challenges for the Pakistani industrial sector.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6 p-6 border border-zinc-100 rounded-3xl hover:border-accent transition-colors bg-zinc-50/50">
                  <div className="w-14 h-14 bg-black text-accent rounded-2xl flex items-center justify-center shrink-0">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight">Peak Shaving</h3>
                    <p className="text-sm text-muted-foreground">Reduce multi-million rupee peak demand charges by discharging stored energy during high-tariff hours.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border border-zinc-100 rounded-3xl hover:border-accent transition-colors bg-zinc-50/50">
                  <div className="w-14 h-14 bg-black text-accent rounded-2xl flex items-center justify-center shrink-0">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight">C&I Backup</h3>
                    <p className="text-sm text-muted-foreground">Seamless transition for factories and hospitals during grid failure with UPS-grade response times.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border border-zinc-100 rounded-3xl hover:border-accent transition-colors bg-zinc-50/50">
                  <div className="w-14 h-14 bg-black text-accent rounded-2xl flex items-center justify-center shrink-0">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight">Micro-grid Integration</h3>
                    <p className="text-sm text-muted-foreground">Combine Solar, Wind, and Diesel generators with central ESS for 100% off-grid reliability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for Industrial Image/Diagram */}
            <div className="relative aspect-square bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl group border border-zinc-800">
               <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900/50 to-transparent z-10" />
               <div className="absolute inset-0 flex items-center justify-center p-12 z-20">
                  <div className="text-center space-y-6">
                     <p className="text-accent font-mono text-sm tracking-[0.3em] uppercase opacity-50">Engineering Diagram</p>
                     <h4 className="text-3xl font-heading font-black text-white uppercase tracking-tighter">BESS Container Architecture</h4>
                     <div className="w-24 h-1 bg-accent mx-auto" />
                     <p className="text-zinc-400 text-sm max-w-xs mx-auto">Proprietary Thermal Management & String-Level Monitoring Systems.</p>
                  </div>
               </div>
               {/* Decorative grid */}
               <div className="absolute inset-0 opacity-20 bg-[url('/grid-texture.png')] bg-repeat" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-black uppercase tracking-tight mb-4">Containerized Solution Specs</h2>
            <div className="h-1 w-20 bg-accent" />
          </div>

          <div className="overflow-x-auto border border-zinc-800 rounded-3xl">
            <table className="w-full text-left">
              <thead className="bg-zinc-900">
                <tr className="border-b border-zinc-800">
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-accent">Feature</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-accent">EY-POWER 250 (Basic)</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-accent">EY-POWER 500 (Industrial)</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-accent">EY-POWER 1000 (MW Scale)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr>
                  <td className="p-6 font-bold uppercase text-xs">Energy Capacity</td>
                  <td className="p-6 text-zinc-400">250 kWh</td>
                  <td className="p-6 text-zinc-400">512 kWh</td>
                  <td className="p-6 text-zinc-400">1024 kWh+</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold uppercase text-xs">Battery Chemistry</td>
                  <td className="p-6 text-zinc-400" colSpan={3}>Grade-A LiFePO4 (6000+ Cycles)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold uppercase text-xs">Response Time</td>
                  <td className="p-6 text-zinc-400" colSpan={3}>&lt; 10ms (UPS-Grade)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold uppercase text-xs">Monitoring</td>
                  <td className="p-6 text-zinc-400" colSpan={3}>Remote Cloud Management & EMS Integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inquiry Form Call to Action */}
      <section id="inquire" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white border-2 border-zinc-900 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
             <div className="relative z-10 space-y-8">
               <div className="text-center space-y-4">
                 <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">B2B Project Inquiry</h2>
                 <p className="text-muted-foreground">Our engineers will review your load profile and provide a customized energy storage proposal within 48 hours.</p>
               </div>
               
               {/* This will be replaced with the actual Form component once created */}
               <InquiryForm type="b2b" title="Industrial Project Inquiry" />
             </div>
             {/* Background branding */}
             <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none">
                <span className="text-9xl font-black text-zinc-900 leading-none">EY</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
