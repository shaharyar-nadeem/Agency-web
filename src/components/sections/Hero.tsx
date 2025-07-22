import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Smartphone, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-8">
            <span className="mr-2">🚀</span>
            Leading Software Development Agency
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Crafting Digital
            <br />
            Excellence
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We transform your ideas into powerful digital solutions. From web applications to mobile apps, 
            we deliver cutting-edge software that drives your business forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:bg-primary/5"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-muted-foreground text-center">Tailored solutions built with cutting-edge technologies</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile First</h3>
              <p className="text-muted-foreground text-center">Responsive designs that work perfectly on all devices</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-center">Scalable solutions that grow with your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;