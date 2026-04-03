import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { href: "/products/lithium", label: "Batteries" },
    { href: "/solutions/bess", label: "Industrial ESS" },
    { href: "/technology", label: "Technology" },
    { href: "/distributors", label: "Distributors" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-zinc-200 text-black bg-white/90">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <Image 
                        src="/EY-Power(main) logo.png" 
                        alt="EY Power Logo" 
                        width={140} 
                        height={40} 
                        className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/solutions/bess#inquire">
                        <Button
                            className="bg-[#FFCC00] text-black font-black hover:bg-yellow-500 h-11 px-8 uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-md border-b-2 border-black/10"
                        >
                            B2B Inquiry
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className="lg:hidden flex items-center gap-4">
                    {/* B2B Inquiry button on mobile (condensed) */}
                    <Link href="/solutions/bess#inquire" className="hidden sm:block">
                        <Button
                            className="bg-[#FFCC00] text-black font-black px-4 h-9 text-[10px] uppercase tracking-widest hover:bg-yellow-500"
                        >
                            B2B Inquiry
                        </Button>
                    </Link>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-black hover:text-[#FFCC00] p-0 w-10 h-10">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-white border-zinc-200 text-black p-0 flex flex-col">
                            <SheetHeader className="p-6 border-b border-zinc-100">
                                <SheetTitle className="text-black flex items-center gap-3">
                                    <Image 
                                        src="/EY-Power(main) logo.png" 
                                        alt="EY Power Logo" 
                                        width={120} 
                                        height={36} 
                                        className="h-8 w-auto"
                                    />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-1 p-4 flex-grow">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center h-14 px-4 text-lg font-bold border-b border-zinc-100 hover:text-[#FFCC00] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="p-6 mt-auto space-y-3 border-t border-zinc-200 bg-zinc-50">
                                <Link href="/solutions/bess#inquire" className="block w-full">
                                    <Button className="w-full bg-[#FFCC00] text-black hover:bg-yellow-500 h-14 font-black transition-all active:scale-95 uppercase tracking-widest text-xs">
                                        B2B Inquiry
                                    </Button>
                                </Link>
                                <p className="text-[10px] text-center text-zinc-500 uppercase font-black tracking-widest pt-4">
                                    EY POWER · Engineering Pakistan
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
