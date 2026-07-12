import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="RecLora Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 relative">
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to <span className="gradient-text">RecLora</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          A vibrant community dedicated to reviving the legacy of Rec Room. Join us for unforgettable memories, epic games, and lifelong friendships.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-reclora rounded-lg font-bold text-lg hover:opacity-90 transition-all hover-lift">
            Join the Community
          </button>
          <button className="px-8 py-4 border-2 border-reclora-pink rounded-lg font-bold text-lg hover:bg-reclora-pink/10 transition-all hover-lift">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
            <p className="text-gray-200">Members</p>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <p className="text-gray-200">Events</p>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <p className="text-gray-200">Active</p>
          </div>
        </div>
      </div>
    </section>
  )
}
