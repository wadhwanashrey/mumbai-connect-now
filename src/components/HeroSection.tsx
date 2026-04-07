import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918652154480?text=Hi,%20I%20need%20AC%20repair%20services.%20My%20location%20is:";

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#09090B] px-4 pt-24 pb-16">
    {/* Background glow */}
    <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

    <div className="animate-fade-up relative z-10 flex flex-col items-center text-center" style={{ animationDelay: "0s" }}>
      <span className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-400 backdrop-blur-sm">
        ⚡ 24/7 Emergency AC Service in Mumbai
      </span>
    </div>

    <h1
      className="animate-fade-up relative z-10 max-w-4xl text-center text-5xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
      style={{ animationDelay: "0.1s" }}
    >
      Expert AC Repair at Your Doorstep in{" "}
      <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">60 Minutes</span>
    </h1>

    <p
      className="animate-fade-up relative z-10 mt-6 max-w-2xl text-center text-lg font-medium leading-relaxed text-zinc-400"
      style={{ animationDelay: "0.2s" }}
    >
      Trusted by 10,000+ Mumbai homes. Certified technicians. Transparent pricing. No hidden charges.
    </p>

    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-fade-up relative z-10 mt-8 inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
      style={{ animationDelay: "0.3s" }}
    >
      <MessageCircle size={20} />
      Send Location & Book Technician
    </a>

    <div
      className="animate-fade-up relative z-10 mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={{ animationDelay: "0.4s", perspective: "1000px" }}
    >
      <img
        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
        alt="Professional AC technician repairing a split air conditioner"
        className="h-auto w-full object-cover"
        style={{ transform: "rotateX(2deg) rotateY(-1deg)" }}
        loading="lazy"
      />
    </div>
  </section>
);

export default HeroSection;
