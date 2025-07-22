import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Palette, 
  ShoppingCart,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused"],
      price: "Starting at $5,000"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter",
      features: ["Cross-Platform", "Native Performance", "App Store Ready"],
      price: "Starting at $8,000"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Google Cloud, and Azure",
      features: ["Auto Scaling", "High Availability", "Cost Optimized"],
      price: "Starting at $3,000"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust API development and database design for your applications",
      features: ["RESTful APIs", "GraphQL", "Microservices"],
      price: "Starting at $4,000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience",
      features: ["User Research", "Prototyping", "Design Systems"],
      price: "Starting at $2,500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration and inventory management",
      features: ["Payment Gateway", "Inventory System", "Analytics"],
      price: "Starting at $7,000"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;