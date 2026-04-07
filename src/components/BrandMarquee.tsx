const brands = ["Daikin", "Voltas", "LG", "Blue Star", "Samsung", "Panasonic", "Carrier", "Hitachi", "Mitsubishi", "Whirlpool", "Godrej", "Haier"];

const BrandMarquee = () => (
  <section className="overflow-hidden border-y border-white/10 bg-[#09090B] py-6">
    <div className="animate-marquee flex w-max gap-12">
      {[...brands, ...brands].map((brand, i) => (
        <span key={i} className="whitespace-nowrap text-lg font-semibold tracking-wide text-zinc-600">
          {brand}
        </span>
      ))}
    </div>
  </section>
);

export default BrandMarquee;
