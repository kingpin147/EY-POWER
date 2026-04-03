import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Segments } from "@/components/sections/Segments";
import { Projects } from "@/components/sections/Projects";
import { Reviews } from "@/components/sections/Reviews";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EY Power",
    "url": "https://eypower.com.pk",
    "logo": "https://eypower.com.pk/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-21-3XXXXXXXX",
      "contactType": "customer service",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 123, Korangi Industrial Area, Sector 15",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75000",
      "addressCountry": "PK"
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />

      {/* B2B vs B2C Path Selection */}
      <Segments />

      {/* Engineering Credibility Section */}
      <section className="py-12 md:py-24 bg-white text-black border-y border-zinc-100">
        <div className="container mx-auto px-6 text-center space-y-8 md:space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tight">Engineering Excellence at Every Scale</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From high-capacity 1MW+ BESS containers to precision residential lithium storage, EY Power delivers industrial-grade engineering solutions across Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pt-8 md:pt-12">
            <div className="p-6 md:p-10 border border-zinc-100 bg-zinc-50/50 rounded-3xl text-left space-y-4 md:space-y-5 hover:border-accent transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black text-accent rounded-xl flex items-center justify-center font-black text-xl md:text-2xl group-hover:bg-accent group-hover:text-black transition-colors">01</div>
              <h3 className="text-xl md:text-2xl font-heading font-bold uppercase tracking-tight">In-House Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Proprietary architecture and components designed for the unique Pakistani climate and grid conditions.</p>
            </div>
            <div className="p-6 md:p-10 border border-zinc-100 bg-zinc-50/50 rounded-3xl text-left space-y-4 md:space-y-5 hover:border-accent transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black text-accent rounded-xl flex items-center justify-center font-black text-xl md:text-2xl group-hover:bg-accent group-hover:text-black transition-colors">02</div>
              <h3 className="text-xl md:text-2xl font-heading font-bold uppercase tracking-tight">Tier 1 Reliability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Utilization of premium LiFePO4 chemistry and rigorous stress testing protocols for 6000+ cycle lifespan.</p>
            </div>
            <div className="p-6 md:p-10 border border-zinc-100 bg-zinc-50/50 rounded-3xl text-left space-y-4 md:space-y-5 hover:border-accent transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black text-accent rounded-xl flex items-center justify-center font-black text-xl md:text-2xl group-hover:bg-accent group-hover:text-black transition-colors">03</div>
              <h3 className="text-xl md:text-2xl font-heading font-bold uppercase tracking-tight">Nationwide Hubs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Strategically located regional offices in 6 cities ensuring 24/7 industrial and commercial uptime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Projects / Engineering Credibility */}
      <Projects />

      {/* Social Proof Section */}
      <Reviews />

      <Footer />
    </main>
  );
}
