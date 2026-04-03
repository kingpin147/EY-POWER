"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WhatsAppGateway } from "./WhatsAppGateway";

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isGatewayOpen, setIsGatewayOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

    useEffect(() => {
        setIsVisible(true);

        const handleOpenGateway = (e: any) => {
            setSelectedProduct(e.detail?.productName);
            setIsGatewayOpen(true);
        };

        window.addEventListener("open-whatsapp-gateway", handleOpenGateway);
        return () => window.removeEventListener("open-whatsapp-gateway", handleOpenGateway);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
                {/* WhatsApp Button */}
                <button
                    onClick={() => {
                        setSelectedProduct(undefined);
                        setIsGatewayOpen(true);
                    }}
                    className="group flex items-center gap-3 outline-none"
                    aria-label="Contact on WhatsApp"
                >
                    <span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl border border-zinc-100 scale-0 group-hover:scale-100 transition-transform origin-right">
                        Live Support
                    </span>
                    <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                        <MessageCircle className="w-7 h-7 fill-current" />
                    </div>
                </button>
            </div>

            <WhatsAppGateway 
                isOpen={isGatewayOpen} 
                onClose={() => setIsGatewayOpen(false)} 
                productName={selectedProduct}
            />
        </>
    );
}
