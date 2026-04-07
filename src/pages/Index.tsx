import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import ValueProposition from "@/components/ValueProposition";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-[#09090B]">
    <Header />
    <HeroSection />
    <BrandMarquee />
    <ServicesGrid />
    <ValueProposition />
    <FAQSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
