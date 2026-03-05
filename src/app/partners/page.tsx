import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Distributor Network | EY Power Pakistan",
    description: "Find authorized EY Power partners and regional offices in Karachi, Lahore, Islamabad, Multan, Faisalabad, and Peshawar. Join our partner network.",
};

const offices = [
    // ... (previous offices stay same)
    {
        city: "Karachi (Head Office)",
        address: "Plot 123, Korangi Industrial Area, Sector 15, Karachi",
        type: "National Headquarter & Engineering Hub",
        phone: "+92 21 3XXX XXXX"
    },
    {
        city: "Lahore",
        address: "Gulberg III, Near Hussain Chowk, Lahore",
        type: "Regional Sales & Support Center",
        phone: "+92 42 3XXX XXXX"
    },
    {
        city: "Islamabad",
        address: "Sector I-10 Industrial Area, Islamabad",
        type: "Northern Regional Hub",
        phone: "+92 51 4XXX XXXX"
    },
    {
        city: "Multan",
        address: "Vehari Road, Industrial Estate, Multan",
        type: "Southern Punjab Support Unit",
        phone: "+92 61 6XXX XXXX"
    },
    {
        city: "Faisalabad",
        address: "Susan Road, Faisalabad",
        type: "Authorized Service Point",
        phone: "+92 41 8XXX XXXX"
    },
    {
        city: "Peshawar",
        address: "Hayatabad Industrial Estate, Peshawar",
        type: "KPK Regional Support",
        phone: "+92 91 5XXX XXXX"
    }
];

export default function PartnersPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />

            {/* Partners Hero */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/world-map.png')] bg-center bg-no-repeat bg-contain" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl lg:text-7xl font-heading font-black tracking-tight underline decoration-accent/30 underline-offset-8">
                            DISTRIBUTOR <span className="text-accent">NETWORK</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Serving industrial Pakistan across 6 regional offices and multiple authorized partners. Engineering support when and where you need it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Office Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map((office, i) => (
                            <Card key={i} className="border border-zinc-100 shadow-sm hover:border-accent transition-all group">
                                <CardHeader className="bg-zinc-50 border-b border-zinc-100 p-6 group-hover:bg-accent/10 transition-colors">
                                    <div className="w-10 h-10 bg-black text-accent rounded flex items-center justify-center font-bold mb-4 group-hover:bg-accent group-hover:text-black transition-colors">
                                        0{i + 1}
                                    </div>
                                    <CardTitle className="text-2xl font-heading font-bold">{office.city}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Office Category</div>
                                        <div className="text-sm font-bold text-black">{office.type}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Location</div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{office.address}</p>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Contact</div>
                                        <p className="text-sm font-black text-black">{office.phone}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join as Partner CTA */}
            <section className="py-24 bg-zinc-900 text-white">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-5xl font-heading font-black">BECOME AN AUTHORIZED <span className="text-accent">EY POWER</span> PARTNER</h2>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            We are expanding our retail and industrial network across Pakistan. Join the most advanced lithium energy movement in the country.
                        </p>
                        <div className="space-y-4 pt-4 text-sm font-bold opacity-80">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-black text-[10px]">✓</div>
                                <span>Access to Dealer Price Lists & Bulk Logistics</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-black text-[10px]">✓</div>
                                <span>In-person Engineering & Sales Training</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-black text-[10px]">✓</div>
                                <span>Nationwide Marketing & Lead Referrals</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <InquiryForm type="distributor" title="Partner Application" dark />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-12 bg-black border-t border-white/10 text-white/40 text-sm">
                <div className="container mx-auto px-6 text-center">
                    &copy; {new Date().getFullYear()} EY POWER. Engineering Tomorrow, Scaling Today.
                </div>
            </footer>
        </main>
    );
}
