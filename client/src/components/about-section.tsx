import { Award, Dumbbell } from "lucide-react";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/anshi.jpeg" 
              alt="Anshi Raj Mahajan - Founder of FitBeats" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
          <div>
            <h2 className="font-bold text-4xl md:text-5xl text-fitbeats-dark mb-6">
              Meet <span className="text-fitbeats-primary">Anshi Raj Mahajan</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              From a successful <strong>Chartered Accountant</strong> to a passionate <strong>Fitness Trainer</strong> - Anshi's journey is one of transformation and empowerment. She understands the challenges women face in prioritizing their health and fitness.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over <strong>5 years</strong>, Anshi has been empowering women of all ages to achieve their fitness goals. FitBeats isn't just a fitness studio - it's a community where women find their strength, build lifelong friendships, and reclaim their ME-TIME.
            </p>
            
            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-fitbeats-light p-4 rounded-lg text-center">
                <Award className="w-8 h-8 text-fitbeats-primary mx-auto mb-2" />
                <div className="font-semibold text-fitbeats-dark">Certified CA</div>
                <div className="text-sm text-gray-600">Professional Background</div>
              </div>
              <div className="bg-fitbeats-light p-4 rounded-lg text-center">
                <Dumbbell className="w-8 h-8 text-fitbeats-secondary mx-auto mb-2" />
                <div className="font-semibold text-fitbeats-dark">5+ Years</div>
                <div className="text-sm text-gray-600">Fitness Training</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.instagram.com/fitbeats.anshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.955 1.404-5.955s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" clipRule="evenodd" />
                </svg>
                Follow @fitbeats.anshi
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-fitbeats-primary text-fitbeats-primary px-6 py-3 rounded-full font-semibold hover:bg-fitbeats-primary hover:text-white transition-all text-center"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
