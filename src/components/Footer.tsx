
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com/Shahriar0182" 
              className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="shahriarbinrifat1@gmail.com" 
              className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center text-muted-foreground">
          <p>&copy; {currentYear} Shahriar Bin Rifat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
