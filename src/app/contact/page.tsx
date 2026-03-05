import { Navbar } from "@/components/layout/Navbar";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact EY Power | Industrial Leads & Support",
    description: "Contact our technical engineering team for BESS project consultations or general inquiries. Offices in Karachi, Lahore, and Islamabad.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />

            <section className="py-24 bg-zinc-50 flex-grow">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-7xl font-heading font-black tracking-tight uppercase leading-none">
                                    GET IN <span className="text-accent underline decoration-accent/30 underline-offset-8">TOUCH</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                                    Whether you are looking for a residential battery quote or a MW-scale industrial solution, our technical team is ready to assist.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-black text-accent rounded-xl flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Headquarters</h4>
                                        <p className="text-muted-foreground text-sm">Plot 123, Korangi Industrial Area, Sector 15, Karachi, Pakistan</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-black text-accent rounded-xl flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Support</h4>
                                        <p className="text-muted-foreground text-sm">info@eypower.com.pk</p>
                                        <p className="text-muted-foreground text-sm">support@eypower.com.pk</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-black text-accent rounded-xl flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Industrial Hotline</h4>
                                        <p className="text-muted-foreground text-sm">+92 21 3XXX XXXX</p>
                                        <p className="text-muted-foreground text-sm">Mon - Sat, 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <InquiryForm type="general" title="General Inquiry" />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-black border-t border-white/10 text-white/40 text-sm">
                <div className="container mx-auto px-6 text-center">
                    &copy; {new Date().getFullYear()} EY POWER. Engineering Tomorrow, Scaling Today.
                </div>
            </footer>
        </main>
    );
}
