import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
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

      {/* Engineering Credibility Section will go here */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-heading font-bold uppercase tracking-tight">Engineering Excellence at Every Scale</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From high-capacity 1MW+ BESS containers to precision residential lithium storage, EY Power delivers industrial-grade engineering solutions across Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="p-8 border border-muted bg-muted/30 rounded-2xl text-left space-y-4 hover:border-accent transition-colors group">
              <div className="w-12 h-12 bg-black text-accent rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-accent group-hover:text-black transition-colors">01</div>
              <h3 className="text-xl font-heading font-bold">In-House Design</h3>
              <p className="text-sm text-muted-foreground">Proprietary architecture and components designed for the unique Pakistani climate and grid conditions.</p>
            </div>
            <div className="p-8 border border-muted bg-muted/30 rounded-2xl text-left space-y-4 hover:border-accent transition-colors group">
              <div className="w-12 h-12 bg-black text-accent rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-accent group-hover:text-black transition-colors">02</div>
              <h3 className="text-xl font-heading font-bold">Tier 1 Reliability</h3>
              <p className="text-sm text-muted-foreground">Utilization of premium LiFePO4 chemistry and rigorous stress testing protocols for 6000+ cycle lifespan.</p>
            </div>
            <div className="p-8 border border-muted bg-muted/30 rounded-2xl text-left space-y-4 hover:border-accent transition-colors group">
              <div className="w-12 h-12 bg-black text-accent rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-accent group-hover:text-black transition-colors">03</div>
              <h3 className="text-xl font-heading font-bold">Nationwide Support</h3>
              <p className="text-sm text-muted-foreground">Certified regional service teams across 6 offices ensuring 24/7 industrial and commercial uptime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Placeholder for next steps */}
      <footer className="mt-auto py-12 bg-black border-t border-white/10 text-white/40 text-sm">
        <div className="container mx-auto px-6 text-center">
          &copy; {new Date().getFullYear()} EY POWER. Engineering Tomorrow, Scaling Today.
        </div>
      </footer>
    </main>
  );
}
