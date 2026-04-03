"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitInquiry } from "@/lib/actions";

interface InquiryFormProps {
    type: "general" | "b2b" | "distributor";
    title?: string;
    dark?: boolean;
}

export function InquiryForm({ type, title, dark = false }: InquiryFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        formData.set("type", type);

        const result = await submitInquiry(formData);

        if (result.success) {
            setStatus({ success: true });
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus({ error: typeof result.error === "string" ? result.error : "Validation failed. Please check your inputs." });
        }
        setIsSubmitting(false);
    };

    return (
        <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl border bg-white border-zinc-200 shadow-xl shadow-black/5">
            <h3 className="text-lg md:text-xl font-heading font-bold text-center mb-6">{title || "Send an Inquiry"}</h3>

            {status?.success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-500 text-xs md:text-sm rounded-lg text-center font-medium">
                    Thank you! Our engineering team will contact you shortly.
                </div>
            )}

            {status?.error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs md:text-sm rounded-lg text-center font-medium">
                    {status.error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</Label>
                    <Input name="name" required placeholder="John Doe" className="h-11 md:h-12 border-zinc-200 bg-white text-black" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email</Label>
                        <Input name="email" type="email" required placeholder="john@company.com" className="h-11 md:h-12 border-zinc-200 bg-white text-black" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone</Label>
                        <Input name="phone" required placeholder="+92 XXX XXXXXXX" className="h-11 md:h-12 border-zinc-200 bg-white text-black" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company (Optional)</Label>
                    <Input name="company" placeholder="EY Power Ltd" className="h-11 md:h-12 border-zinc-200 bg-white text-black" />
                </div>

                <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">How can we help?</Label>
                    <Textarea name="message" required placeholder="Tell us about your project or requirement..." className="min-h-[100px] border-zinc-200 bg-white text-black" />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 md:h-14 font-black text-base md:text-lg transition-transform active:scale-95 bg-[#FFCC00] text-black hover:bg-yellow-500 border border-[#FFCC00]"
                >
                    {isSubmitting ? "Sending..." : "Send Inquiry Now"}
                </Button>

                <p className="text-[9px] md:text-[10px] text-center uppercase tracking-tighter text-zinc-500">
                    Lead will be routed to the {type === "distributor" ? "partnership" : "sales"} engineering desk.
                </p>
            </form>
        </div>
    );
}
