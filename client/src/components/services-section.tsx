import { 
  Zap, 
  Dumbbell, 
  Target, 
  Flame, 
  Leaf, 
  Heart, 
  Music, 
  Apple 
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Step/Floor Aerobics",
    description: "High-energy cardio workouts that improve coordination and burn calories effectively.",
    benefit: "Perfect for: Cardio fitness",
    gradient: "from-fitbeats-primary to-fitbeats-secondary",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    icon: Dumbbell,
    title: "Weight Training",
    description: "Build lean muscle mass and increase metabolism with guided strength training.",
    benefit: "Perfect for: Strength building",
    gradient: "from-fitbeats-secondary to-fitbeats-accent",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    icon: Target,
    title: "Resistance Training",
    description: "Functional movements using resistance bands and bodyweight exercises.",
    benefit: "Perfect for: Functional fitness",
    gradient: "from-fitbeats-accent to-fitbeats-primary",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    icon: Flame,
    title: "Tabata Training",
    description: "High-intensity interval training for maximum calorie burn in minimal time.",
    benefit: "Perfect for: Quick results",
    gradient: "from-fitbeats-primary to-fitbeats-secondary",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    icon: Leaf,
    title: "Mat Pilates",
    description: "Core strengthening and flexibility improvement through controlled movements.",
    benefit: "Perfect for: Core strength",
    gradient: "from-fitbeats-secondary to-fitbeats-accent",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    icon: Heart,
    title: "Yoga",
    description: "Mind-body connection through traditional yoga practices and breathing techniques.",
    benefit: "Perfect for: Flexibility & peace",
    gradient: "from-fitbeats-accent to-fitbeats-primary",
    image: "https://images.unsplash.com/photo-1506629905607-eecadc79846e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    icon: Music,
    title: "BollyFit X",
    description: "Fun Bollywood dance fitness that makes working out feel like a celebration!",
    benefit: "Perfect for: Fun & cardio",
    gradient: "from-fitbeats-primary to-fitbeats-secondary",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    icon: Apple,
    title: "Diet Consultation",
    description: "Personalized nutrition guidance to complement your fitness journey.",
    benefit: "Perfect for: Complete wellness",
    gradient: "from-fitbeats-secondary to-fitbeats-accent",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-fitbeats-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-fitbeats-dark mb-6">
            Our <span className="text-fitbeats-primary">Fitness Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of fitness programs designed specifically for women. Available both online and offline!
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-br ${service.gradient} w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-fitbeats-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-fitbeats-primary font-semibold">{service.benefit}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Online/Offline Options */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-bold text-3xl text-fitbeats-dark mb-4">Choose Your Training Mode</h3>
            <p className="text-lg text-gray-600">Flexibility to train how and where you want</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-fitbeats-primary to-fitbeats-secondary rounded-xl text-white">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <h4 className="font-semibold text-2xl mb-3">Online Training</h4>
              <p className="mb-4">Train from the comfort of your home with live interactive sessions</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Live interactive classes
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personal attention
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Recorded sessions access
                </li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-fitbeats-secondary to-fitbeats-accent rounded-xl text-white">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h2v-2h2v-2h2v8zm0-10h-2V7h2v2z"/>
              </svg>
              <h4 className="font-semibold text-2xl mb-3">Studio Training</h4>
              <p className="mb-4">Experience the energy of group fitness at our fully equipped studio</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  State-of-the-art equipment
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Group motivation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  In-person guidance
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Community building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
