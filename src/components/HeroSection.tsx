import { Button } from "@/components/ui/button";
import CounterCard from "./CounterCard";
import heroImage from "@/assets/africa-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            🌍 Africa's Blueprint for the Future
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Turning prophecy into productivity. Poverty into purpose. 
            Africa into Earth's engine of ethical evolution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button variant="hero" size="lg">
              🔗 Explore Impact Metrics
            </Button>
            <Button variant="outline" size="lg">
              🔗 Join UmojaNet
            </Button>
            <Button variant="secondary" size="lg">
              🔗 Invest in the Future
            </Button>
          </div>

          {/* Impact Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <CounterCard
              icon="✅"
              value="2.5B"
              label="Lives Touched"
            />
            <CounterCard
              icon="✅"
              value="$5–6T"
              label="Global GDP Contribution"
            />
            <CounterCard
              icon="✅"
              value="1.2B Tons"
              label="CO₂ Offset/Year"
            />
            <CounterCard
              icon="✅"
              value="10M"
              label="Lives Saved Annually"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;