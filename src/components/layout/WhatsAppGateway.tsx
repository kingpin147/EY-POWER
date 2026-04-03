"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, MessageCircle } from "lucide-react";

interface WhatsAppGatewayProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
}

export function WhatsAppGateway({ isOpen, onClose, productName }: WhatsAppGatewayProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        city: "",
        audienceType: "Retail",
        batteryModel: "Select Model",
        quantity: "1",
        intendedUse: "Home Backup",
        message: "",
    });

    // Auto-sync the batteryModel if a productName prop is provided
    useEffect(() => {
        if (isOpen && productName) {
            setFormData(prev => ({ ...prev, batteryModel: productName }));
        } else if (isOpen && !productName) {
           setFormData(prev => ({ ...prev, batteryModel: "Select Model" }));
        }
    }, [isOpen, productName]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923003655263";
        const pageUrl = typeof window !== "undefined" ? window.location.href : "";
        
        const waMessage = `EY Power Battery Price Request
Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city}
---
Audience: ${formData.audienceType}
Model: ${formData.batteryModel}
Quantity: ${formData.quantity}
Use: ${formData.intendedUse}
Message: ${formData.message || "None"}
---
Page: ${pageUrl}`;
        
        const encodedMessage = encodeURIComponent(waMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, "_blank");
        onClose();
    };

    const inputClasses = "h-12 border-zinc-200 bg-zinc-50 rounded-2xl focus:ring-[#FFCC00] focus:border-[#FFCC00] text-sm";
    const labelClasses = "text-[10px] font-black uppercase tracking-widest text-zinc-400";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />
            
            <div className="relative bg-white w-full max-w-md max-h-[95vh] overflow-y-auto rounded-[2.5rem] border border-zinc-200 shadow-2xl animate-in zoom-in-95 duration-200 scrollbar-hide">
                {/* Header */}
                <div className="bg-[#FFCC00] p-6 text-black sticky top-0 z-10 shadow-sm">
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <MessageCircle className="w-6 h-6 fill-current mb-2" />
                    <h3 className="text-2xl font-heading font-black uppercase leading-tight">
                        Power Your <br />
                        Requirement
                    </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                    <div className="space-y-4">
                        {/* Basic Info */}
                        <div className="space-y-1.5">
                            <Label className={labelClasses}>Full Name</Label>
                            <Input 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter your full name"
                                className={inputClasses}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label className={labelClasses}>Phone</Label>
                                <Input 
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="0300-0000000"
                                    className={inputClasses}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label className={labelClasses}>City</Label>
                                <Input 
                                    required
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    placeholder="Karachi"
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        {/* Audience and Battery Selection */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label className={labelClasses}>Audience Type</Label>
                                <select 
                                    value={formData.audienceType}
                                    onChange={(e) => setFormData({ ...formData, audienceType: e.target.value })}
                                    className={`w-full ${inputClasses} px-3`}
                                >
                                    <option>Retail</option>
                                    <option>Installer / EPC</option>
                                    <option>Distributor / Wholesaler</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <Label className={labelClasses}>Battery Model</Label>
                                <select 
                                    value={formData.batteryModel}
                                    onChange={(e) => setFormData({ ...formData, batteryModel: e.target.value })}
                                    className={`w-full ${inputClasses} px-3 border-[#FFCC00]/50`}
                                >
                                    <option disabled>Select Model</option>
                                    <option>EY Power 2.56kWh</option>
                                    <option>EY Power 5.12kWh</option>
                                    <option>EY Power 14.33kWh</option>
                                </select>
                            </div>
                        </div>

                        {/* Quantity and Use Case */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label className={labelClasses}>Quantity</Label>
                                <select 
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    className={`w-full ${inputClasses} px-3`}
                                >
                                    <option>1</option>
                                    <option>2-5</option>
                                    <option>6-15</option>
                                    <option>16+</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <Label className={labelClasses}>Intended Use</Label>
                                <select 
                                    value={formData.intendedUse}
                                    onChange={(e) => setFormData({ ...formData, intendedUse: e.target.value })}
                                    className={`w-full ${inputClasses} px-3`}
                                >
                                    <option>Home Backup</option>
                                    <option>Hybrid Solar System</option>
                                    <option>Commercial Backup</option>
                                    <option>EPC Project</option>
                                    <option>Retail / Resale</option>
                                </select>
                            </div>
                        </div>

                        {/* Additional Message */}
                        <div className="space-y-1.5 pt-2">
                           <Label className={labelClasses}>Special Requirements</Label>
                           <Textarea 
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Inverter model, backup hours, load kW, etc."
                                className="min-h-[100px] border-zinc-200 bg-zinc-50 rounded-2xl focus:ring-[#FFCC00] p-4 text-sm resize-none"
                           />
                        </div>
                    </div>

                    <Button 
                        type="submit"
                        className="w-full h-14 bg-[#FFCC00] text-black hover:bg-yellow-500 rounded-full font-black uppercase tracking-widest shadow-lg shadow-yellow-200 transition-all hover:scale-[1.02] active:scale-95"
                    >
                        Send Via WhatsApp
                    </Button>

                    <p className="text-[9px] text-center text-zinc-400 font-bold uppercase tracking-tighter">
                        Page & Product details will be attached automatically
                    </p>
                </form>
            </div>
        </div>
    );
}
