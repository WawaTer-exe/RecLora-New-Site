import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background image with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="RecLora Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-reclora-blue/10 to-reclora-pink/10"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-reclora-blue/20 rounded-full blur-3xl animate-float opacity-0 md:opacity-100"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-reclora-pink/20 rounded-full blur-3xl animate-float opacity-0 md:opacity-100" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className={`mb-12 flex justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="w-28 h-28 md:w-40 md:h-40 relative animate-pulse-glow">
            <Image
              src="/logo.svg"
              alt="RecLora Logo"
              width={300}
              height={300}
              priority
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 delay-100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Welcome to <span className="gradient-text">RecLora</span>
        </h1>

        {/* Subheading */}
        <p className={`text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          A vibrant community dedicated to reviving the legacy of Rec Room. Join thousands of players for unforgettable memories, epic games, and lifelong friendships.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="btn-primary hover-lift">
            Join the Community
          </button>
          <button className="btn-secondary hover-lift">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="card p-6 md:p-8 hover-lift">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1000+</div>
            <p className="text-sm md:text-base text-slate-300">Members</p>
          </div>
          <div className="card p-6 md:p-8 hover-lift">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <p className="text-sm md:text-base text-slate-300">Events</p>
          </div>
          <div className="card p-6 md:p-8 hover-lift">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <p className="text-sm md:text-base text-slate-300">Active</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-reclora-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
