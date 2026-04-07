import { Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918652154480?text=Hi,%20I%20need%20AC%20repair%20services.%20My%20location%20is:";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <span className="text-xl font-extrabold tracking-tight text-white">
        Mumbai <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Cool</span>
      </span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
      >
        <Phone size={16} />
        Book via WhatsApp
      </a>
    </div>
  </header>
);

export default Header;
