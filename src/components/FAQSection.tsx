import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is your visiting charge?", a: "Our visiting and inspection charge is ₹199, which is adjusted against the final repair bill if you proceed with the service." },
  { q: "Do you provide a warranty on gas refills?", a: "Yes! We provide a 90-day warranty on all gas refills. If you experience any cooling issues within that period, we'll top up for free." },
  { q: "Which areas in Mumbai do you cover?", a: "We cover all of Mumbai — from Colaba to Borivali, Navi Mumbai, and Thane. Wherever you are, we'll be there in 60 minutes." },
  { q: "Do you service all AC brands?", a: "Absolutely. Our technicians are certified to service Daikin, Voltas, LG, Blue Star, Samsung, Panasonic, Carrier, Hitachi, and more." },
  { q: "What payment methods do you accept?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), and bank transfers. Payment is due only after the service is completed to your satisfaction." },
  { q: "Can I book a same-day appointment?", a: "Yes! We specialize in same-day service. Simply send us your location on WhatsApp and we'll dispatch a technician immediately." },
];

const FAQSection = () => (
  <section className="bg-[#09090B] px-4 py-20">
    <div className="container mx-auto max-w-3xl">
      <h2 className="mb-12 text-center text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
        Frequently Asked <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Questions</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-white/10 bg-[#18181B66] px-6 backdrop-blur-md">
            <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-medium leading-relaxed text-zinc-400">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
