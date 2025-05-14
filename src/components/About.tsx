
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Monitor, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm Shahriar Bin Rifat, a passionate frontend developer specializing in creating beautiful, responsive websites. I'm skilled in HTML, CSS, Tailwind CSS, and JavaScript with experience in React.
            </p>
            <p className="text-lg leading-relaxed">
              I enjoy turning complex problems into simple, beautiful, and intuitive interface designs. When I'm not coding or pushing pixels, you'll find me exploring new technologies or enhancing my skills.
            </p>
            <p className="text-lg leading-relaxed">
              I'm currently focusing on expanding my knowledge in frontend frameworks and looking for opportunities to grow as a developer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-l-4 border-l-primary transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-muted-foreground">Creating responsive and modern user interfaces using HTML, CSS, and JavaScript.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-secondary transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-md">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">React Development</h3>
                  <p className="text-muted-foreground">Building interactive user interfaces with React and related libraries.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-accent transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-md">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">Always expanding my knowledge and staying updated with the latest technologies.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
