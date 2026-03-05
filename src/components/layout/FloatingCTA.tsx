"use client";

import { useEffect, useState } from "react";

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/923000000000" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
            >
                <span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-zinc-100 scale-0 group-hover:scale-100 transition-transform origin-right">
                    Chat on WhatsApp
                </span>
                <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.284.133.322.456 1.111.498 1.198s.07.189.013.303-.085.182-.17.282c-.084.1-.178.223-.253.3-.087.086-.177.181-.077.352.1.171.442.729.948 1.18.653.582 1.201.763 1.372.848.171.086.273.071.373-.043.1-.115.432-.505.547-.678.116-.173.231-.144.39-.086s1.011.477 1.184.564c.173.087.289.129.331.202.044.073.044.419-.1.824z" />
                    </svg>
                </div>
            </a>

            {/* Phone Button */}
            <a
                href="tel:+923000000000" // Replace with actual number
                className="group flex items-center gap-3"
            >
                <span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-zinc-100 scale-0 group-hover:scale-100 transition-transform origin-right">
                    Call Now
                </span>
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
            </a>
        </div>
    );
}
