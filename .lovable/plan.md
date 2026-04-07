

# Mumbai Cool AC Repair — Full Landing Page Build

## Overview
Build the complete single-page lead generation site as previously specified, with a footer styled after the reference image (light background, 3-column layout with address, hours, and connect info, plus an embedded Google Map).

## Footer Design (per reference image)
Light gray background (`#F8F9FA` or similar), 3-column grid layout:

**Column 1 — "Mumbai Cool"**
- Map pin icon + full address: "14 B, 90 Feet Rd, Naidu Colony, Gurunanak Nagar, Ghatkopar East, Mumbai, Maharashtra 400075"
- Embedded Google Maps iframe showing the location

**Column 2 — "Hours"**
- Clock icon + "Open Daily: 8:00 AM – 10:30 PM"
- Phone icon + "+91 86521 54480" (clickable tel: link)

**Column 3 — "Connect"**
- Green "Book via WhatsApp" button (links to the WhatsApp URL)
- Instagram handle (optional, if applicable)

**Bottom bar**: "© 2026 Mumbai Cool AC Repair. All rights reserved."

Mobile: stacks to single column.

## Implementation Steps

1. **Create all section components** in `src/components/`:
   - `Header.tsx` — sticky glassmorphic nav
   - `HeroSection.tsx` — badge, H1 with gradient text, CTA, hero image
   - `BrandMarquee.tsx` — infinite scroll of brand names
   - `ServicesGrid.tsx` — bento grid with service cards
   - `ValueProposition.tsx` — zig-zag layout
   - `FAQSection.tsx` — accordion
   - `FinalCTA.tsx` — gradient mesh CTA block
   - `Footer.tsx` — 3-column layout matching reference image

2. **Update `Index.tsx`** — compose all sections into the full page

3. **Update `index.css`** — add custom animations (fade-up, marquee scroll), dark theme variables, Plus Jakarta Sans / Inter font imports

4. **Update `tailwind.config.ts`** — add custom animation keyframes for marquee and fade-up

## Technical Notes
- All CTA buttons link to `https://wa.me/918652154480?text=Hi,%20I%20need%20AC%20repair%20services.%20My%20location%20is:` with `target="_blank"`
- Footer uses a lighter background to contrast with the dark page (matching reference)
- Google Maps embed uses an iframe pointed at the address coordinates
- Phone number is a clickable `tel:+918652154480` link
- Hero images sourced from Unsplash via URL

