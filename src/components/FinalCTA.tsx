import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918652154480?text=Hi,%20I%20need%20AC%20repair%20services.%20My%20location%20is:";

const FinalCTA = () => (
  <section className="bg-[#09090B] px-4 py-20">
    <div className="container mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-pink-500 px-6 py-16 text-center md:px-16 md:py-24">
        {/* Mesh overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        <h2 className="relative z-10 text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
          Is your AC blowing warm air?
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-lg text-lg font-medium text-white/80">
          Don't sweat it. Send us your location and a certified technician will be at your door in 60 minutes.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp Now
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
