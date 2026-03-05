import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-black text-xl group-hover:scale-105 transition-transform">
                        EY
                    </div>
                    <span className="text-2xl font-heading font-black tracking-tighter group-hover:text-accent transition-colors">
                        POWER
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/products" className="text-sm font-medium hover:text-accent transition-colors">Products</Link>
                    <Link href="/technology" className="text-sm font-medium hover:text-accent transition-colors">Technology</Link>
                    <Link href="/applications" className="text-sm font-medium hover:text-accent transition-colors">Applications</Link>
                    <Link href="/partners" className="text-sm font-medium hover:text-accent transition-colors">Partners</Link>
                    <Link href="/resources" className="text-sm font-medium hover:text-accent transition-colors">Resources</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/contact">
                        <Button variant="ghost" className="text-accent border border-accent/20 hover:bg-accent hover:text-black">
                            B2B Inquiry
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button className="bg-accent text-black font-bold hover:bg-accent/90">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
