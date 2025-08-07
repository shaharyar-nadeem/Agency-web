import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Web Development", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "Cloud Solutions", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "E-commerce", href: "#" },
      { label: "Consulting", href: "#" }
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Contact", href: "#contact" }
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechCraft
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              We're a passionate team of developers and designers creating innovative digital solutions 
              that drive business growth and user engagement.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@techcraft.agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-primary/20">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates, tech insights, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            © {currentYear} TechCraft Agency. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;