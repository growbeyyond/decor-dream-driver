import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold gradient-text mb-4">
              Sainath Events
            </h3>
            <p className="text-muted-foreground mb-4">
              Where every petal speaks emotion. Premium South Indian floral decoration for weddings and celebrations.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/sainathh_eventss_01/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://www.facebook.com/sainathevents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://www.youtube.com/@sainathevents-i4p" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/floral-decoration" className="text-muted-foreground hover:text-primary transition-colors">Floral Decoration</Link></li>
              <li><Link to="/event-management" className="text-muted-foreground hover:text-primary transition-colors">Event Management</Link></li>
              <li><Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors">Packages</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mandap Decoration</li>
              <li>Haldi Ceremonies</li>
              <li>Reception Stages</li>
              <li>Temple Events</li>
              <li>Bridal Pathways</li>
              <li>Corporate Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span>+91 6300110329</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span>sainathevents08@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Sainath Events. All rights reserved.</p>
          <p className="mt-2">
            Developed by{" "}
            <a 
              href="https://www.growbeyyond.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Grow Beyyond
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
