import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: `https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "Cross-platform mobile app for healthcare management with real-time features",
      image: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Modern analytics dashboard with real-time data visualization and reporting",
      image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      category: "Web Development",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Food Delivery App",
      description: "Complete food delivery solution with customer, restaurant, and driver apps",
      image: `https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      category: "Mobile Development",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Real-time financial data dashboard with advanced charting and analytics",
      image: `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      category: "Web Development",
      technologies: ["Next.js", "GraphQL", "Redis", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Comprehensive LMS with video streaming, assessments, and progress tracking",
      image: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      category: "Web Development",
      technologies: ["React", "Express", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development"];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our latest projects and see how we've helped businesses achieve their digital goals
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-gradient-to-r from-primary to-accent" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/20 hover:bg-primary/5"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;