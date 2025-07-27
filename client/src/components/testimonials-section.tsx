import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    program: "BollyFit X Member",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Anshi has transformed my approach to fitness completely. The BollyFit X classes are so much fun, and I've lost 15 kgs in 6 months! The supportive community here is amazing."
  },
  {
    name: "Neha Gupta",
    program: "Online Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "The online classes during lockdown were a lifesaver! Anshi's energy is infectious, and the personalized diet consultation helped me achieve my goals faster."
  },
  {
    name: "Kavita Singh",
    program: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "At 45, I thought it was too late to start fitness. FitBeats proved me wrong! The yoga and pilates classes have improved my flexibility and mental peace."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-fitbeats-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-fitbeats-dark mb-6">
            What Our <span className="text-fitbeats-primary">Members Say</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex text-fitbeats-accent text-2xl">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-fitbeats-dark">5.0</span>
            <span className="text-lg text-gray-600">(78 Google Reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex text-fitbeats-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial`} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-fitbeats-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.program}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?cs=0&output=search&kgmid=/g/11qh0wnn4k&q=FitBeats+Women+Fitness+Studio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-fitbeats-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
