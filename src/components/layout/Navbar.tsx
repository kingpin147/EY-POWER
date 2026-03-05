import Link from "next/link";
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
    { href: "/products", label: "Products" },
    { href: "/technology", label: "Technology" },
    { href: "/applications", label: "Applications" },
    { href: "/partners", label: "Partners" },
    { href: "/resources", label: "Resources" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded flex items-center justify-center font-bold text-black text-lg md:text-xl group-hover:scale-105 transition-transform">
                        EY
                    </div>
                    <span className="text-xl md:text-2xl font-heading font-black tracking-tighter group-hover:text-accent transition-colors">
                        POWER
                    </span>
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
                    <Link href="/contact">
                        <Button
                            variant="ghost"
                            className="text-accent border border-accent/20 hover:bg-accent hover:text-black"
                        >
                            B2B Inquiry
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button className="bg-accent text-black font-bold hover:bg-accent/90">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className="lg:hidden flex items-center gap-4">
                    {/* B2B Inquiry button on mobile (condensed) */}
                    <Link href="/contact" className="hidden sm:block">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-accent border border-accent/20 px-3 h-9 text-xs"
                        >
                            B2B Inquiry
                        </Button>
                    </Link>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:text-accent p-0 w-10 h-10">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-black border-white/10 text-white p-0 flex flex-col">
                            <SheetHeader className="p-6 border-b border-white/10">
                                <SheetTitle className="text-white flex items-center gap-3">
                                    <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-black">EY</div>
                                    <span className="font-black tracking-tighter">POWER</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-1 p-4 flex-grow">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center h-14 px-4 text-lg font-bold border-b border-white/5 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="p-6 mt-auto space-y-3 border-t border-white/10 bg-zinc-900/50">
                                <Link href="/contact" className="block w-full">
                                    <Button className="w-full bg-zinc-800 text-white hover:bg-zinc-700 h-12 font-bold border border-white/5">
                                        B2B Inquiry
                                    </Button>
                                </Link>
                                <Link href="/contact" className="block w-full">
                                    <Button className="w-full bg-accent text-black hover:bg-yellow-400 h-12 font-black transition-all active:scale-95">
                                        Get Started
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
