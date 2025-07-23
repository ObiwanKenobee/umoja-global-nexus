import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  const timeline = [
    { year: "1972", event: "Foundation of Ubuntu philosophy in modern context" },
    { year: "2020", event: "Digital transformation initiatives begin" },
    { year: "2023", event: "UmojaNet platform launched" },
    { year: "2030", event: "Projected 1B users milestone" },
    { year: "2050", event: "Global Impact 2050 vision realized" }
  ];

  const thoughtLeaders = [
    { name: "Plato", contribution: "Philosophical foundations" },
    { name: "Jesus Christ", contribution: "Ethical framework" },
    { name: "Wangari Maathai", contribution: "Environmental stewardship" },
    { name: "Alan Turing", contribution: "Computational thinking" },
    { name: "Ngũgĩ wa Thiong'o", contribution: "Cultural preservation" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">🌐 About UmojaNet</h1>
            <p className="text-xl text-muted-foreground mb-8">
              From Kisii to the world - Africa's technological renaissance rooted in Ubuntu principles
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To transform Africa into Earth's engine of ethical evolution, where technology serves humanity 
                and Ubuntu principles guide global innovation. We envision a world where African wisdom 
                shapes the future of AI, sustainable development, and human prosperity.
              </p>
            </Card>
            
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Turning prophecy into productivity and poverty into purpose through technology, education, 
                and sustainable innovation. We connect African talent with global opportunities while 
                preserving cultural heritage and advancing ethical AI development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Journey Timeline</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="w-20 text-right mr-8">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full mr-8"></div>
                <div className="flex-1">
                  <p className="text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leaders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Inspired by Great Minds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thoughtLeaders.map((leader, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-emerald transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.contribution}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;