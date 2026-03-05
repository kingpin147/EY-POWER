import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  ThermometerSnowflake, 
  Settings2,
  Atom
} from "lucide-react";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <Badge variant="accent" className="uppercase tracking-widest px-4 py-1">Inside the Tech</Badge>
            <h1 className="text-4xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              The Science of <br />
              <span className="text-accent">Industrial Reliability</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              We don't just sell batteries; we engineer energy systems.
              Our LiFePO4 technology is optimized for the harsh electrical and thermal conditions of the Pakistani grid.
            </p>
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      </section>

      {/* LiFePO4 Vs Others */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Why LiFePO4?</h2>
                 <p className="text-muted-foreground text-lg">Lithium Iron Phosphate (LiFePO4) is the gold standard for industrial and residential storage due to its inherent safety and cycle life.</p>
                 
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-black text-accent rounded-2xl flex items-center justify-center mb-6">
                           <ShieldCheck className="w-8 h-8" />
                        </div>
                       <h4 className="font-bold uppercase tracking-tight">Thermal Stability</h4>
                       <p className="text-sm text-muted-foreground">Highest resistance to "thermal runaway" compared to NMC or Lead-Acid.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-black text-accent rounded-2xl flex items-center justify-center mb-6">
                           <Atom className="w-8 h-8" />
                        </div>
                       <h4 className="font-bold uppercase tracking-tight">Eco-Friendly</h4>
                       <p className="text-sm text-muted-foreground">Zero Cobalt or Lead usage. Recyclable and sustainable for 15+ years.</p>
                    </div>
                 </div>
              </div>
              
              <div className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 text-white space-y-10 border border-zinc-800 shadow-2xl">
                 <div className="flex justify-between items-end border-b border-zinc-700 pb-6">
                    <div>
                       <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-1">Total Life Cycle</p>
                       <h4 className="text-4xl font-black font-heading tracking-tighter">6000+</h4>
                    </div>
                    <p className="text-zinc-500 text-xs font-bold font-mono">VS 1500 (Traditional)</p>
                 </div>
                 <div className="flex justify-between items-end border-b border-zinc-700 pb-6">
                    <div>
                       <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-1">Depth of Discharge</p>
                       <h4 className="text-4xl font-black font-heading tracking-tighter">95%</h4>
                    </div>
                    <p className="text-zinc-500 text-xs font-bold font-mono">VS 50% (Lead Acid)</p>
                 </div>
                 <div className="flex justify-between items-end">
                    <div>
                       <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-1">Operating Temp</p>
                       <h4 className="text-4xl font-black font-heading tracking-tighter">60°C</h4>
                    </div>
                    <p className="text-zinc-500 text-xs font-bold font-mono">Thermal Tolerance</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Engineering Internals */}
      <section className="py-24 border-t border-white/5">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
               <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Proprietary Engineering</h2>
               <p className="text-zinc-400">Our in-house design team focuses on three core pillars of battery intelligence.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors space-y-6">
                  <div className="w-14 h-14 bg-accent text-black rounded-2xl flex items-center justify-center">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Active BMS</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">Intelligence at the cell level. Our Bus Management System (BMS) balances charge, protects against over-voltage, and maximizes capacity utilization.</p>
               </div>

               <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors space-y-6">
                  <div className="w-14 h-14 bg-accent text-black rounded-2xl flex items-center justify-center">
                    <ThermometerSnowflake className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Thermal Control</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">Integrated airflow channels and premium heat-sink casing ensure cells stay within optimal operating range even in 45°C ambient heat.</p>
               </div>

               <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors space-y-6">
                  <div className="w-14 h-14 bg-accent text-black rounded-2xl flex items-center justify-center">
                    <Settings2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Modular Scaling</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">Designed for Daisy-Chain parallelism. Our architecture allows simple plug-and-play expansion as your energy needs grow.</p>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
