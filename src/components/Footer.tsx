import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">UmojaNet</span>
            </div>
            <p className="text-accent-foreground/80 text-sm">
              Africa's Blueprint for the Future - transforming prophecy into productivity, 
              poverty into purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/impact" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Impact Metrics
              </Link>
              <Link to="/about" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                About UmojaNet
              </Link>
              <Link to="/labs" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Innovation Labs
              </Link>
              <Link to="/resources" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <div className="space-y-2">
              <Link to="/get-involved" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Join Us
              </Link>
              <Link to="/volunteer" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Volunteer
              </Link>
              <Link to="/investor" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Investor Relations
              </Link>
              <Link to="/community" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Community Forums
              </Link>
            </div>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/ethics" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Data Ethics
              </Link>
              <Link to="/terms" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-accent-foreground/60">
              © 2024 UmojaNet. All rights reserved.
            </span>
            <span className="text-sm text-accent-foreground/60">
              "Powered by Ubuntu Core AI" ⚡
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;