import { Star } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-fitbeats-primary via-fitbeats-secondary to-fitbeats-accent min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Your <span className="text-fitbeats-accent">ME-TIME</span><br/>
          Starts Here
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          One stop destination for all fitness needs of women. Join thousands of women who've transformed their lives at FitBeats!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-fitbeats-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start Your Journey
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-fitbeats-primary transition-all"
          >
            Explore Programs
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <div className="flex text-fitbeats-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-semibold">5.0 Stars</span>
          </div>
          <div>
            <span className="font-semibold">78+ Happy Members</span>
          </div>
          <div>
            <span className="font-semibold">5+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
