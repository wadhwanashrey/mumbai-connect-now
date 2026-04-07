import { ShieldCheck, Clock, IndianRupee } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "60-Minute Arrival Guarantee",
    desc: "Our technicians are stationed across Mumbai. Once you book, expect a knock within the hour — or the visit is free.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    alt: "AC technician cleaning filters",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Service Warranty",
    desc: "Every repair comes with a written 90-day warranty. If the same issue recurs, we fix it free — no questions asked.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    alt: "Technician checking outdoor compressor unit",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing, Zero Surprises",
    desc: "You'll see the final cost before we start. No hidden charges, no upselling. Pay only for what you need.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    alt: "Professional AC service technician",
  },
];

const ValueProposition = () => (
  <section className="bg-[#09090B] px-4 py-20">
    <div className="container mx-auto">
      <h2 className="mb-12 text-center text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
        Why Mumbai <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Trusts Us</span>
      </h2>
      <div className="space-y-16">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-8 md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full overflow-hidden rounded-2xl border border-white/10 md:w-1/2">
              <img src={item.img} alt={item.alt} className="h-64 w-full object-cover md:h-80" loading="lazy" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/10">
                <item.icon className="text-violet-500" size={24} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
              <p className="font-medium leading-relaxed text-zinc-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProposition;
