
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import AnimatedTypewriter from "./AnimatedTypewriter";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hi, I'm <span className="text-primary">Shahriar Bin Rifat</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <AnimatedTypewriter
                words={[
                  "Frontend Developer",
                  "UI Designer",
                  "React Enthusiast",
                  "Tailwind Expert",
                  "Web Creator"
                ]}
                typingSpeed={100}
                deletingSpeed={80}
                delayBetweenWords={2000}
              />
            </h2>
            <p className="text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
              I create responsive websites with modern technologies focused on usability and accessibility.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary/10 transition-colors">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-pulse">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SBR</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownIcon className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
