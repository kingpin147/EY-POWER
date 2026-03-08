import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="text-white pt-24 pb-12 border-t border-white/10" style={{ backgroundColor: '#111111' }}>
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image 
                            src="/EY-Power(main) logo.png" 
                            alt="EY Power Logo" 
                            width={160} 
                            height={48} 
                            className="h-10 w-auto group-hover:scale-105 transition-transform"
                        />
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
                    <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-accent mb-6">Industrial Solutions</h4>
                    <ul className="space-y-4 text-sm text-zinc-400">
                        <li><Link href="/products/lithium" className="hover:text-white transition-colors">Residential Lithium Storage</Link></li>
                        <li><Link href="/solutions/bess" className="hover:text-white transition-colors">Industrial ESS / BESS</Link></li>
                        <li><Link href="/technology" className="hover:text-white transition-colors">Battery Technology (LiFePO4)</Link></li>
                        <li><Link href="/solutions/bess#inquire" className="hover:text-white transition-colors">B2B Project Inquiry</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-accent mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-zinc-400">
                        <li><Link href="/distributors" className="hover:text-white transition-colors">Distributor Network</Link></li>
                        <li><Link href="/resources" className="hover:text-white transition-colors">Technical Datasheets</Link></li>
                        <li><Link href="/distributors#apply" className="hover:text-white transition-colors">Become a Partner</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-accent mb-6">Presence & Contact</h4>
                    <div className="space-y-4 text-sm text-zinc-400">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-accent translate-y-1" />
                            <div className="space-y-1">
                                <p className="text-white font-bold text-xs uppercase">Head Office</p>
                                <p>Industrial Area, Karachi</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-zinc-600 translate-y-1" />
                            <div className="text-xs">
                                <p className="font-bold">Regional Offices</p>
                                <p>Lahore · Sargodha · Chakwal · Islamabad · Hyderabad</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                            <Mail className="w-4 h-4 text-accent" />
                            <span>{process.env.NOTIFICATION_EMAIL || "pk.eyenterprise@gmail.com"}</span>
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
