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
            <p className="text-lg text-gray-600 mb-6">FitBeats offers both online and offline training to accommodate your lifestyle and preferences. Whether you prefer the comfort of home or the energy of our studio, we've got you covered!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-fitbeats-primary to-fitbeats-secondary rounded-xl text-white">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <h4 className="font-semibold text-2xl mb-3">Online Training</h4>
              <p className="mb-4 text-base">Join live interactive sessions from anywhere! Perfect for busy women who need flexibility without compromising on quality training and personal attention from Anshi.</p>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Live interactive classes with real-time feedback
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible scheduling to fit your routine
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personal attention and form corrections
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Recorded sessions for practice
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All fitness programs available online
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Virtual community support
                </li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-fitbeats-secondary to-fitbeats-accent rounded-xl text-white">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h2v-2h2v-2h2v8zm0-10h-2V7h2v2z"/>
              </svg>
              <h4 className="font-semibold text-2xl mb-3">Studio Training</h4>
              <p className="mb-4 text-base">Experience the high-energy atmosphere of our fully equipped studio in Indirapuram! Build connections with like-minded women while achieving your fitness goals together.</p>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Modern, fully equipped fitness studio
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  High-energy group motivation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hands-on guidance and support
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Build lifelong friendships
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional equipment & accessories
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Located in Indirapuram, Ghaziabad
                </li>
              </ul>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h4 className="font-bold text-2xl text-fitbeats-dark mb-3">Choose Your Membership Plan</h4>
              <p className="text-gray-600">Flexible plans designed for every fitness goal and budget</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Basic Plan */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-fitbeats-primary transition-all">
                <div className="text-center mb-6">
                  <h5 className="font-semibold text-xl text-fitbeats-dark mb-2">Basic Plan</h5>
                  <div className="text-3xl font-bold text-fitbeats-primary mb-2">₹2,999</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Choose Online OR Studio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">3 classes per week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Access to 5 programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Basic diet guidance</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-fitbeats-dark py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                  Get Started
                </button>
              </div>

              {/* Premium Plan - Most Popular */}
              <div className="bg-white rounded-xl p-6 border-2 border-fitbeats-primary relative transform scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-fitbeats-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h5 className="font-semibold text-xl text-fitbeats-dark mb-2">Premium Plan</h5>
                  <div className="text-3xl font-bold text-fitbeats-primary mb-2">₹4,999</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Both Online AND Studio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">5 classes per week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">All 8 fitness programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Personal diet consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Recorded session access</span>
                  </li>
                </ul>
                <button className="w-full bg-fitbeats-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Start Premium
                </button>
              </div>

              {/* VIP Plan */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-fitbeats-secondary transition-all">
                <div className="text-center mb-6">
                  <h5 className="font-semibold text-xl text-fitbeats-dark mb-2">VIP Plan</h5>
                  <div className="text-3xl font-bold text-fitbeats-secondary mb-2">₹7,999</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Everything in Premium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Unlimited classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">1-on-1 personal training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Custom meal plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Priority support & booking</span>
                  </li>
                </ul>
                <button className="w-full bg-fitbeats-secondary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Go VIP
                </button>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-fitbeats-light rounded-xl p-6">
              <h4 className="font-semibold text-xl text-fitbeats-dark mb-3">Trial Options</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Free Trial Class</span>
                  <span className="font-semibold text-fitbeats-primary">₹0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">3-Day Trial Package</span>
                  <span className="font-semibold text-fitbeats-primary">₹499</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">1-Week Trial Package</span>
                  <span className="font-semibold text-fitbeats-primary">₹999</span>
                </div>
              </div>
            </div>

            <div className="bg-fitbeats-light rounded-xl p-6">
              <h4 className="font-semibold text-xl text-fitbeats-dark mb-3">Special Offers</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-fitbeats-primary">Student Discount</div>
                  <div className="text-sm text-gray-600">20% off all plans with valid ID</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-fitbeats-secondary">Refer a Friend</div>
                  <div className="text-sm text-gray-600">Both get 1 month free!</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-fitbeats-accent">3-Month Package</div>
                  <div className="text-sm text-gray-600">Save 15% on quarterly plans</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-fitbeats-light rounded-xl p-6">
              <h4 className="font-semibold text-xl text-fitbeats-dark mb-3">Hybrid Options Available!</h4>
              <p className="text-gray-600 mb-4">
                Can't decide? Many of our members combine both online and studio training for maximum flexibility. 
                Start with either mode and switch anytime based on your schedule and preferences.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-fitbeats-dark">
                <span className="bg-white px-4 py-2 rounded-full font-medium">✓ Same quality training</span>
                <span className="bg-white px-4 py-2 rounded-full font-medium">✓ Flexible switching</span>
                <span className="bg-white px-4 py-2 rounded-full font-medium">✓ Community access</span>
                <span className="bg-white px-4 py-2 rounded-full font-medium">✓ Personal attention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
