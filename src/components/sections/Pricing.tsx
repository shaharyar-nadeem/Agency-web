import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      description: "Perfect for small businesses and startups",
      price: "2,999",
      period: "project",
      badge: null,
      features: [
        "Basic website development",
        "Responsive design",
        "Content management system",
        "Contact form integration",
        "Basic SEO optimization",
        "3 months support",
        "2 revisions included"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Business",
      description: "Ideal for growing businesses",
      price: "7,999",
      period: "project",
      badge: "Most Popular",
      features: [
        "Custom web application",
        "Database integration",
        "User authentication",
        "Payment gateway integration",
        "Advanced SEO optimization",
        "6 months support",
        "Unlimited revisions",
        "Performance optimization",
        "Security implementation"
      ],
      cta: "Start Building",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations and complex projects",
      price: "Custom",
      period: "quote",
      badge: null,
      features: [
        "Full-stack development",
        "Microservices architecture",
        "Cloud deployment",
        "DevOps implementation",
        "Load balancing",
        "12 months support",
        "Dedicated project manager",
        "24/7 monitoring",
        "Scalability consulting",
        "Training included"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm ${
                plan.popular 
                  ? 'border-primary shadow-2xl scale-105 bg-gradient-to-b from-primary/5 to-accent/5' 
                  : 'hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-none rounded-bl-lg px-3 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <div className="flex items-center justify-center">
                    {plan.price !== "Custom" && (
                      <span className="text-2xl font-bold">$</span>
                    )}
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-muted-foreground mt-1">
                    per {plan.period}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90' 
                      : 'border-primary/20 hover:bg-primary/5'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include free consultation and project planning
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
            Compare all features
          </Button>
        </div>

        {/* Money back guarantee */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-16 text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">30-Day Money Back Guarantee</h3>
          <p className="text-muted-foreground">
            We're confident in our work. If you're not satisfied within 30 days, we'll refund your payment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;