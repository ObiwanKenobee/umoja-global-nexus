import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ImpactMetrics />
      <Footer />
    </div>
  );
};

export default Index;
