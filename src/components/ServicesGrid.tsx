import { Wind, Droplets, Cpu, Wrench, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918652154480?text=Hi,%20I%20need%20AC%20repair%20services.%20My%20location%20is:";

const services = [
  { icon: Wind, title: "Deep Jet Cleaning", desc: "High-pressure jet wash for indoor & outdoor units. Removes dust, mold, and allergens for peak cooling.", large: true },
  { icon: Droplets, title: "Gas Leak Fixing & Refill", desc: "Detect and fix refrigerant leaks. R22 & R410A gas top-up with warranty.", large: false },
  { icon: Cpu, title: "PCB / Motherboard Repair", desc: "Expert-level PCB diagnostics and component-level repair for all AC brands.", large: false },
  { icon: Wrench, title: "AC Installation & Dismantling", desc: "Professional installation, uninstallation, and relocation of split & window ACs.", large: true },
];

const ServicesGrid = () => (
  <section className="bg-[#09090B] px-4 py-20">
    <div className="container mx-auto">
      <h2 className="mb-4 text-center text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
        Our <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center font-medium leading-relaxed text-zinc-400">
        From routine maintenance to emergency repairs, we handle it all.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={i}
            className={`group rounded-2xl border border-white/10 bg-[#18181B66] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 ${s.large ? "md:col-span-2" : ""}`}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/10">
              <s.icon className="text-violet-500" size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">{s.title}</h3>
            <p className="mb-4 font-medium leading-relaxed text-zinc-400">{s.desc}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
            >
              Book Now <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
