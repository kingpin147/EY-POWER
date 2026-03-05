import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-black text-xl group-hover:scale-105 transition-transform">
                            EY
                        </div>
                        <span className="text-2xl font-heading font-black tracking-tighter group-hover:text-accent transition-colors">
                            POWER
                        </span>
                    </Link>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                        Engineering-driven Lithium Batteries and Industrial Energy Storage Systems (ESS/BESS) for Pakistan’s clean energy future.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-accent mb-6">Solutions</h4>
                    <ul className="space-y-4 text-sm text-zinc-400">
                        <li><Link href="/products" className="hover:text-white transition-colors">Residential Lithium Storage</Link></li>
                        <li><Link href="/applications" className="hover:text-white transition-colors">Industrial ESS / BESS</Link></li>
                        <li><Link href="/applications#inquire" className="hover:text-white transition-colors">Custom Solution Engineering</Link></li>
                        <li><Link href="/technology" className="hover:text-white transition-colors">LiFePO4 Technology</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-accent mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-zinc-400">
                        <li><Link href="/partners" className="hover:text-white transition-colors">Distribution Network</Link></li>
                        <li><Link href="/resources" className="hover:text-white transition-colors">Technical Hub & Datasheets</Link></li>
                        <li><Link href="/partners#dealer-form" className="hover:text-white transition-colors">Become a Distributor</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Support Center</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-accent mb-6">Contact</h4>
                    <div className="space-y-4 text-sm text-zinc-400">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-accent translate-y-1" />
                            <span>Plot 123, Korangi Industrial Area,<br />Sector 15, Karachi, Pakistan</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-accent" />
                            <span>+92 21 3XXX XXXX</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-accent" />
                            <span>info@eypower.com.pk</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                <p>&copy; {new Date().getFullYear()} EY POWER LTD. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-white transition-colors">ISO Certifications</Link>
                </div>
            </div>
        </footer>
    );
}
