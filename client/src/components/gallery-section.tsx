export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-fitbeats-dark mb-6">
            Studio & <span className="text-fitbeats-primary">Classes Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a peek inside our vibrant studio and see our amazing community in action!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Studio interior with modern equipment */}
          <div className="col-span-2 row-span-2">
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="FitBeats Studio Interior" 
              className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
            />
          </div>
          
          {/* Women doing pilates on mats */}
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="Pilates Class at FitBeats" 
            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
          />
          
          {/* Weight training area with dumbbells */}
          <img 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="Weight Training Area" 
            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
          />
          
          {/* Aerobics dance class in progress */}
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="Aerobics Dance Class" 
            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
          />
          
          {/* Yoga session with peaceful atmosphere */}
          <img 
            src="https://images.unsplash.com/photo-1506629905607-eecadc79846e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="Yoga Class" 
            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
          />
          
          {/* Group fitness class with women smiling */}
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="Group Fitness Class" 
            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
          />
          
          {/* Resistance training with bands */}
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="Resistance Training" 
            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
          />
          
          {/* BollyFit dance fitness celebration */}
          <img 
            src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="BollyFit Dance Class" 
            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all"
          />
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/fitbeats.livingwell" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.955 1.404-5.955s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" clipRule="evenodd" />
            </svg>
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
