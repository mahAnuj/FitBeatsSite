import { useState } from "react";
import { Link } from "wouter";
import { Heart, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-fitbeats-primary flex items-center gap-2">
              <Heart className="w-6 h-6" />
              FitBeats
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-fitbeats-dark hover:text-fitbeats-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-fitbeats-dark hover:text-fitbeats-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-fitbeats-dark hover:text-fitbeats-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-fitbeats-dark hover:text-fitbeats-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-fitbeats-dark hover:text-fitbeats-primary transition-colors font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-fitbeats-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-fitbeats-dark"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-fitbeats-dark font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-fitbeats-dark font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-fitbeats-dark font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-fitbeats-dark font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-fitbeats-dark font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-fitbeats-primary text-white text-center py-2 rounded-full font-medium"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
