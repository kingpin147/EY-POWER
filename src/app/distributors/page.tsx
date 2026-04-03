import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MapPin, 
  Truck, 
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  "Nationwide marketing & lead support",
  "Technical training for installers",
  "Priority stock allocation",
  "Exclusive regional territories",
  "Marketing collateral & brand assets",
  "24/7 technical support desk"
];

export default function DistributorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white border-b border-zinc-200 text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#FFCC00] text-black hover:bg-yellow-500 uppercase tracking-widest px-4 py-1 font-bold">Partnership</Badge>
            <h1 className="text-4xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              Grow Your Business <br />
              <span className="text-[#000000] underline decoration-[#FFCC00]/50 underline-offset-8">With EY Power</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
              Join Pakistan's fastest-growing network of energy professionals. We are looking for
              distributors and certified installers nationwide.
            </p>
          </div>
        </div>
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      </section>

      {/* Why Join Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Why Partner with us?</h2>
              <p className="text-muted-foreground text-lg">EY Power provides more than just products; we provide a complete ecosystem for our partners to succeed in the lithium revolution.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start">
                     <div className="w-5 h-5 bg-[#FFCC00] text-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                       <CheckCircle2 className="w-4 h-4" />
                     </div>
                    <span className="text-sm font-bold uppercase tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#FFCC00] text-black rounded-xl flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6" />
                   </div>
                  <h4 className="text-2xl font-black font-heading italic">200+</h4>
                  <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Active Partners</p>
               </div>
               <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#FFCC00] text-black rounded-xl flex items-center justify-center mx-auto">
                      <MapPin className="w-6 h-6" />
                   </div>
                  <h4 className="text-2xl font-black font-heading italic">6</h4>
                  <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Regional Hubs</p>
               </div>
               <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#FFCC00] text-black rounded-xl flex items-center justify-center mx-auto">
                      <Truck className="w-6 h-6" />
                   </div>
                  <h4 className="text-2xl font-black font-heading italic">24h</h4>
                  <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Dispatch Time</p>
               </div>
               <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#FFCC00] text-black rounded-xl flex items-center justify-center mx-auto">
                      <TrendingUp className="w-6 h-6" />
                   </div>
                  <h4 className="text-2xl font-black font-heading italic">40%</h4>
                  <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Market Growth</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
               <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Distributor Application</h2>
               <p className="text-muted-foreground">Please fill out the form for a formal partnership review. Our channel management team will reach out within 3 business days.</p>
               
               <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-4">
                   <h4 className="font-bold uppercase tracking-tight text-black border-l-4 border-accent pl-4">Minimum Requirements</h4>
                  <ul className="space-y-3 text-sm text-zinc-500">
                    <li className="flex gap-2"><span>•</span> Physical showroom or warehouse space</li>
                    <li className="flex gap-2"><span>•</span> Registered business with valid NTN</li>
                    <li className="flex gap-2"><span>•</span> Basic technical team for first-level support</li>
                    <li className="flex gap-2"><span>•</span> Commitment to EY Power brand standards</li>
                  </ul>
               </div>
            </div>

            <InquiryForm type="distributor" title="Application Form" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
