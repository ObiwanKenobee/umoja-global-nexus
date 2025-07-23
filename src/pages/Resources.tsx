import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Video, Book, Database, Users } from "lucide-react";

const Resources = () => {
  const whitepapers = [
    {
      title: "UmojaNet Global Impact 2050",
      description: "Comprehensive analysis of Africa's technological transformation",
      pages: "150 pages",
      downloads: "50K+"
    },
    {
      title: "Ubuntu Core AI Framework",
      description: "Ethical AI development based on African philosophy",
      pages: "75 pages",
      downloads: "25K+"
    },
    {
      title: "Sustainable Development Through Technology",
      description: "How tech drives environmental and social progress",
      pages: "100 pages",
      downloads: "30K+"
    }
  ];

  const datasets = [
    {
      title: "African Digital Economy Metrics",
      description: "Real-time data on digital transformation across 54 countries",
      format: "JSON/CSV",
      updated: "Daily"
    },
    {
      title: "Renewable Energy Deployment",
      description: "Solar and wind energy installation data across Africa",
      format: "API/CSV",
      updated: "Weekly"
    },
    {
      title: "Educational Technology Impact",
      description: "Learning outcomes and digital literacy statistics",
      format: "JSON/Excel",
      updated: "Monthly"
    }
  ];

  const videos = [
    {
      title: "The Scripture in Silicon",
      description: "How biblical principles shaped UmojaNet's design",
      duration: "45 min",
      views: "2M+"
    },
    {
      title: "Africa Rising: A Tech Revolution",
      description: "Documentary on Africa's digital transformation",
      duration: "60 min",
      views: "5M+"
    },
    {
      title: "Ubuntu Ethics in AI",
      description: "Philosophical foundations of ethical artificial intelligence",
      duration: "30 min",
      views: "1.5M+"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">📂 Resources</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access research, data, and insights driving Africa's digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <FileText className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold">Research Whitepapers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="p-6 hover:shadow-emerald transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
                <p className="text-muted-foreground mb-4">{paper.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-primary">{paper.pages}</span>
                  <span className="text-sm text-muted-foreground">{paper.downloads} downloads</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sets */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Database className="w-8 h-8 text-secondary mr-3" />
            <h2 className="text-4xl font-bold">Research Datasets</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {datasets.map((dataset, index) => (
              <Card key={index} className="p-6 hover:shadow-gold transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{dataset.title}</h3>
                <p className="text-muted-foreground mb-4">{dataset.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-secondary">{dataset.format}</span>
                  <span className="text-sm text-muted-foreground">Updated {dataset.updated}</span>
                </div>
                <Button variant="cta" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Access Dataset
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Video className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-4xl font-bold">Video Content</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="p-6 hover:shadow-emerald transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{video.title}</h3>
                <p className="text-muted-foreground mb-4">{video.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-accent">{video.duration}</span>
                  <span className="text-sm text-muted-foreground">{video.views} views</span>
                </div>
                <Button variant="accent" className="w-full">
                  <Video className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Book className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl font-bold">Additional Resources</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Explore articles, case studies, and thought leadership content
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Articles & Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Thought-provoking articles on technology, ethics, and African development
                </p>
                <Button variant="outline" className="w-full">
                  Browse Articles
                </Button>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Community Forums</h3>
                <p className="text-muted-foreground mb-4">
                  Join discussions with innovators, researchers, and thought leaders
                </p>
                <Button variant="default" className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;