
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">
          <span className="text-foreground">Shahriar</span> Bin Rifat
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover-underline py-1">About</a>
          <a href="#projects" className="hover-underline py-1">Projects</a>
          <a href="#skills" className="hover-underline py-1">Skills</a>
          <a href="#contact" className="hover-underline py-1">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <a href="#about" className="py-2" onClick={toggleMenu}>About</a>
            <a href="#projects" className="py-2" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="py-2" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
