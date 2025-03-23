
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import data from "../data/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 ${
        scrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-gradient">
          {data.personalInfo.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {data.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              {section.title}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="p-2 glass rounded-full"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {data.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
