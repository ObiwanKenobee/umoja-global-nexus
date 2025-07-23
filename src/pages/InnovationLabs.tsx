import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Lightbulb, Cpu } from "lucide-react";

const InnovationLabs = () => {
  const programs = [
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "AgriTech",
      description: "Smart farming solutions for sustainable agriculture",
      stats: "200+ innovations deployed"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "EduTech",
      description: "Digital learning platforms for African education",
      stats: "5M+ students reached"
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: "AI Ethics",
      description: "Ubuntu-based artificial intelligence frameworks",
      stats: "70+ countries adopting"
    },
    {
      icon: <MapPin className="w-8 h-8 text-destructive" />,
      title: "Mesh Networks",
      description: "Decentralized connectivity infrastructure",
      stats: "1B+ people connected"
    }
  ];

  const hubs = [
    { country: "Nigeria", city: "Lagos", focus: "FinTech & AI" },
    { country: "Kenya", city: "Nairobi", focus: "AgriTech & Mobile" },
    { country: "South Africa", city: "Cape Town", focus: "Renewable Energy" },
    { country: "Ghana", city: "Accra", focus: "EdTech & Digital Health" },
    { country: "Egypt", city: "Cairo", focus: "AI Research & IoT" },
    { country: "Morocco", city: "Casablanca", focus: "Smart Cities" },
    { country: "Rwanda", city: "Kigali", focus: "Governance Tech" },
    { country: "Ethiopia", city: "Addis Ababa", focus: "Agricultural Innovation" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 py-16 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">💡 Innovation Labs</h1>
            <p className="text-xl text-muted-foreground mb-8">
              54 African innovation hubs driving technological advancement across the continent
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-emerald transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="text-sm font-medium text-primary">{program.stats}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Hubs Across Africa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hubs.map((hub, index) => (
              <Card key={index} className="p-6 hover:shadow-gold transition-all duration-300">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <span className="font-bold">{hub.city}, {hub.country}</span>
                </div>
                <p className="text-sm text-muted-foreground">{hub.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Innovation Network</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of Africa's technological renaissance. Connect with innovators, 
              investors, and change-makers across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Apply as Contributor
              </Button>
              <Button variant="outline" size="lg">
                Become an Investor
              </Button>
              <Button variant="accent" size="lg">
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationLabs;