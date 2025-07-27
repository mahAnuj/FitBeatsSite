import { Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-fitbeats-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="text-fitbeats-primary w-8 h-8 mr-3" />
              <span className="font-bold text-2xl">FitBeats</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              One stop destination for all fitness needs of women. Where women get their ME-TIME and build lifelong friendships while achieving their fitness goals.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/fitbeats.livingwell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-fitbeats-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.955 1.404-5.955s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/fitbeats.livingwell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-fitbeats-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://wa.me/919873181842" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-fitbeats-accent">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-fitbeats-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-fitbeats-primary transition-colors">
                  About Anshi
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-fitbeats-primary transition-colors">
                  Our Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-fitbeats-primary transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-fitbeats-primary transition-colors">
                  Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-fitbeats-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-fitbeats-accent">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Step/Floor Aerobics</li>
              <li>Weight Training</li>
              <li>Resistance Training</li>
              <li>Tabata Training</li>
              <li>Mat Pilates</li>
              <li>Yoga</li>
              <li>BollyFit X</li>
              <li>Diet Consultation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 FitBeats Women Fitness Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Heart className="w-4 h-4 text-fitbeats-primary" />
              <span>Empowering women through fitness since 2019</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
