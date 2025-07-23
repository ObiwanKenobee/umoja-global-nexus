import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Zap, Heart, DollarSign, Palette, Brain, Award } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "📈 GDP Contribution",
      description: "Interactive graph showing Africa's GDP rise 2023 → 2050",
      tooltip: "UmojaNet contributes 30–35% of projected $16–17T GDP",
      highlight: "💥 Equivalent to Japan or Germany's current output"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "🧑‍💻 Talent Supply Chain",
      description: "Visual map: talent hubs across Africa",
      stats: ["200M+ digital freelancers", "50M AI ethics agents", "15M export innovation leaders"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "🌞 Carbon Offset & Green Energy",
      description: "Infographic of solar grids & mesh networks",
      stats: ["🌱 1B+ homes powered cleanly", "🌎 1.2B tons of CO₂ saved globally per year"]
    },
    {
      icon: <Heart className="w-8 h-8 text-destructive" />,
      title: "🧬 Health Equity",
      description: "Testimonial slider: maternal health workers, AI diagnosis stories",
      stats: ["✅ Maternal mortality ↓ 70%", "✅ 10M lives saved annually"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-secondary" />,
      title: "📱 Financial Inclusion",
      description: "Animation of Umoja Wallet transactions worldwide",
      stats: ["💰 2B unbanked served", "💸 $1T in micro-payments/year"]
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "🎭 Cultural & IP Export",
      description: "Interactive gallery of African NFT art & folklore",
      stats: ["🎨 $150B+/year in cultural exports", "🔊 500+ languages preserved"]
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "🤖 AI Ethics & Governance",
      description: "Animated map highlighting 70+ countries using Ubuntu Core AI",
      highlight: "Africa as moral compass of global AI"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "🕊️ Policy Influence",
      description: "Timeline graphic showing global impact",
      stats: ["35+ peace accords signed", "20+ cross-border agreements", "Africa–India–LATAM trade corridors active"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            📊 Global Impact Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data showing UmojaNet's transformative effect on Africa and the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 hover:shadow-emerald transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4 mb-4">
                {metric.icon}
                <div>
                  <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                  <p className="text-muted-foreground text-sm">{metric.description}</p>
                </div>
              </div>
              
              {metric.tooltip && (
                <div className="mb-3 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">{metric.tooltip}</p>
                </div>
              )}
              
              {metric.highlight && (
                <div className="mb-3 p-3 bg-secondary/20 rounded-lg">
                  <p className="text-sm font-medium">{metric.highlight}</p>
                </div>
              )}

              {metric.stats && (
                <div className="space-y-2">
                  {metric.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{stat}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <Button variant="outline" className="w-full mt-4">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;