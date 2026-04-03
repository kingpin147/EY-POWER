"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  LayoutGrid
} from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const offices = [
  { city: "Karachi", type: "Head Office & Service Center", address: "Industrial Hub, Sector 15" },
  { city: "Lahore", type: "Regional Sales Hub", address: "Commercial District" },
  { city: "Islamabad", type: "Federal Liaison Office", address: "Corporate Zone" },
  { city: "Sargodha", type: "Regional Support", address: "Agri-Industrial Zone" },
  { city: "Chakwal", type: "Regional Support", address: "Industrial Park" },
  { city: "Hyderabad", type: "Regional Support", address: "Manufacturing Zone" },
];

export default function ContactPage() {
  const handleWhatsAppGateway = () => {
    const event = new CustomEvent("open-whatsapp-gateway", {
      detail: { productName: "General Inquiry" }
    });
    window.dispatchEvent(event);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#FFCC00] text-black uppercase tracking-widest px-4 py-1 hover:bg-yellow-500">Contact Us</Badge>
            <h1 className="text-4xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9] text-black">
              Let's Power <br />
              <span className="text-[#000000] underline decoration-[#FFCC00]/60 underline-offset-8">Your Next Project</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a technical question or need a project quote? Our engineering team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
             <div className="space-y-12">
                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl space-y-4">
                      <Mail className="w-8 h-8 text-accent" />
                      <div>
                        <h4 className="font-bold uppercase tracking-tight text-xs text-zinc-400 mb-1">Email Support</h4>
                        <p className="font-bold text-sm">{process.env.NOTIFICATION_EMAIL || "pk.eyenterprise@gmail.com"}</p>
                      </div>
                   </div>
                   <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl space-y-4">
                      <Clock className="w-8 h-8 text-accent" />
                      <div>
                        <h4 className="font-bold uppercase tracking-tight text-xs text-zinc-400 mb-1">Response Time</h4>
                        <p className="font-bold text-sm">Within 24 Hours</p>
                      </div>
                   </div>
                </div>

                {/* Office List */}
                <div className="space-y-8">
                   <div className="space-y-2">
                     <h3 className="text-2xl font-black font-heading uppercase tracking-tight">Our Presence</h3>
                     <div className="w-12 h-1 bg-accent" />
                   </div>
                   <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                      {offices.map((office, i) => (
                        <div key={i} className="space-y-1">
                           <h4 className="font-black text-sm uppercase tracking-tight flex items-center gap-2">
                              {office.city}
                              {office.type.includes("Head") && <Badge variant="outline" className="text-[8px] h-4 px-1.5 border-accent text-accent">HQ</Badge>}
                           </h4>
                           <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{office.type}</p>
                           <p className="text-xs text-muted-foreground">{office.address}</p>
                        </div>
                      ))}
                   </div>
                </div>
                
                {/* WhatsApp Direct */}
                <div className="p-8 bg-white text-black rounded-[3rem] border border-zinc-200 shadow-sm space-y-6 relative overflow-hidden group hover:border-[#FFCC00] transition-colors">
                   <div className="relative z-10 space-y-4">
                      <h4 className="text-2xl font-black font-heading uppercase tracking-tight">Prefer WhatsApp?</h4>
                      <p className="text-zinc-600 text-sm">Instant support for distributors and installers.</p>
                      <Button 
                        onClick={handleWhatsAppGateway}
                        className="bg-[#FFCC00] text-black hover:bg-yellow-500 rounded-full px-8 font-black"
                      >
                        Open WhatsApp Chat
                      </Button>
                   </div>
                   <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-5 group-hover:scale-110 transition-transform text-[#FFCC00]">
                      <LayoutGrid className="w-48 h-48" />
                   </div>
                </div>
             </div>

             {/* Form Container */}
             <div className="lg:sticky lg:top-32">
                <InquiryForm type="general" title="General Inquiry Form" />
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
