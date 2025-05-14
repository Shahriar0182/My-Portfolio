
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import AnimatedTypewriter from "./AnimatedTypewriter";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A responsive e-commerce platform built with React and Tailwind CSS, featuring product listings, cart functionality, and checkout process.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality, user authentication, and task categorization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS, showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "#",
      repoLink: "#",
    },
  ];

  const projectTypewriterWords = [
    "Creative Solutions",
    "Innovative Designs",
    "Frontend Magic",
    "User Experiences",
    "Interactive Apps",
    "Responsive Layouts",
  ];

  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
          </p>
          <div className="mt-4 text-xl md:text-2xl font-medium">
            Specializing in <AnimatedTypewriter words={projectTypewriterWords} typingSpeed={120} deletingSpeed={80} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-card animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
