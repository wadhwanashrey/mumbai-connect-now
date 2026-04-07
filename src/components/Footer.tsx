import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918652154480?text=Hi,%20I%20need%20AC%20repair%20services.%20My%20location%20is:";

const Footer = () => (
  <footer className="bg-[#F8F9FA] text-zinc-700">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Column 1 — Address */}
        <div>
          <h3 className="mb-4 text-lg font-extrabold tracking-tight text-zinc-900">Mumbai Cool</h3>
          <div className="mb-4 flex items-start gap-2 text-sm font-medium leading-relaxed text-zinc-600">
            <MapPin size={18} className="mt-0.5 shrink-0 text-violet-600" />
            <span>14 B, 90 Feet Rd, Naidu Colony, Gurunanak Nagar, Ghatkopar East, Mumbai, Maharashtra 400075</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-200">
            <iframe
              title="Mumbai Cool AC Repair Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6!2d72.9054!3d19.0861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456381%3A0x1234567890abcdef!2s14B%2C+90+Feet+Rd%2C+Ghatkopar+East%2C+Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Column 2 — Hours & Phone */}
        <div>
          <h3 className="mb-4 text-lg font-extrabold tracking-tight text-zinc-900">Hours</h3>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-600">
            <Clock size={16} className="text-violet-600" />
            Open Daily: 8:00 AM – 10:30 PM
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-600">
            <Phone size={16} className="text-violet-600" />
            <a href="tel:+918652154480" className="transition-colors hover:text-violet-600">
              +91 86521 54480
            </a>
          </div>
        </div>

        {/* Column 3 — Connect */}
        <div>
          <h3 className="mb-4 text-lg font-extrabold tracking-tight text-zinc-900">Connect</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
          >
            <MessageCircle size={16} />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-zinc-200 py-4 text-center text-xs font-medium text-zinc-500">
      © 2026 Mumbai Cool AC Repair. All rights reserved.
    </div>
  </footer>
);

export default Footer;
