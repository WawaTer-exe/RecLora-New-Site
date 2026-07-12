export default function About() {
  const features = [
    {
      title: 'Community First',
      description: 'Join thousands of passionate players who share your love for Rec Room',
      icon: '👥',
      delay: 'stagger-1',
    },
    {
      title: 'Epic Events',
      description: 'Participate in tournaments and exclusive community gatherings',
      icon: '🏆',
      delay: 'stagger-2',
    },
    {
      title: 'Lasting Friendships',
      description: 'Build meaningful connections with players worldwide',
      icon: '🤝',
      delay: 'stagger-3',
    },
    {
      title: 'Safe & Welcoming',
      description: 'A positive, inclusive space where everyone is respected',
      icon: '✨',
      delay: 'stagger-4',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-reclora-pink/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">RecLora</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experience the next generation of Rec Room community building
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card p-8 md:p-10 hover-lift animate-fadeInUp ${feature.delay}`}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Join the Revival</h3>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Rec Room gave us unforgettable memories and amazing experiences. RecLora is dedicated to keeping that spirit alive and welcoming both veterans and newcomers to the world of Rec Room.
            </p>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Whether you're here to reconnect with old friends, make new ones, or relive the golden days of gaming, RecLora is your home. We believe in creating a space where everyone can feel the same joy and excitement that made Rec Room special.
            </p>
            <button className="btn-primary hover-lift">
              Get Started Today
            </button>
          </div>

          {/* Decorative element */}
          <div className="relative h-96 rounded-2xl card overflow-hidden group animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-reclora-blue/20 to-reclora-pink/20 group-hover:from-reclora-blue/40 group-hover:to-reclora-pink/40 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-6 animate-float">🎮</div>
                <p className="text-2xl font-bold">Rec Room Revival</p>
                <p className="text-slate-400 mt-2 text-lg">Forever a Legend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
