import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Ahmed Raza",
      role: "Homeowner, Lahore",
      content: "Switched to EY Power 5.12kWh model last year. It seamlessly handles my 1.5 ton inverter AC and fridge during load shedding. Exceptionally reliable and the design looks great on the wall.",
      rating: 5
    },
    {
      name: "Tariq Mahmood",
      role: "Factory Manager, SITE Karachi",
      content: "We installed their industrial rack series for our critical assembly line backup. The performance and instantaneous switchover have saved us countless man-hours. Highly recommended for commercial use.",
      rating: 5
    },
    {
      name: "Salman Khan",
      role: "Solar Installer, Islamabad",
      content: "As a solar contractor, I have tested many batteries. EY Power genuinely delivers the cycles they promise. The BMS is smart, and the after-sales support from their local team is outstanding.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight uppercase">Trusted by Pakistan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From residential homes to massive commercial plazas, hear from our customers who trust our Lithium solutions for uninterrupted power.
          </p>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-xl transition-all hover:border-[#FFCC00]">
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFCC00] text-[#FFCC00]" />
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed italic">"{review.content}"</p>
              <div className="border-t border-zinc-100 pt-6">
                <h4 className="font-bold text-black uppercase tracking-tight">{review.name}</h4>
                <p className="text-sm text-zinc-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
