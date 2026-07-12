export default function Community() {
  const activities = [
    {
      title: 'Weekly Game Nights',
      description: 'Join us every week for classic Rec Room games and friendly competitions',
      members: '500+',
      icon: '🎮',
      delay: 'stagger-1',
    },
    {
      title: 'Monthly Tournaments',
      description: 'Compete with the best and prove your skills in our competitive tournaments',
      members: '200+',
      icon: '🏅',
      delay: 'stagger-2',
    },
    {
      title: 'Discord Community',
      description: 'Chat, share memories, and connect with thousands of passionate players',
      members: '1000+',
      icon: '💬',
      delay: 'stagger-3',
    },
    {
      title: 'Creative Challenges',
      description: 'Showcase your creativity and compete in special themed events',
      members: '300+',
      icon: '🎨',
      delay: 'stagger-4',
    },
  ]

  return (
    <section className="section-padding relative bg-gradient-to-b from-transparent via-reclora-blue/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From casual players to competitive gamers, we have something for everyone
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`card p-8 hover-lift animate-fadeInUp ${activity.delay}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl">{activity.icon}</div>
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-reclora-blue to-reclora-pink rounded-full font-semibold">
                  {activity.members}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
              <p className="text-slate-400 text-lg">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 md:p-16 rounded-2xl card gradient-bg border-2 border-reclora-pink/30 hover-lift animate-fadeInUp">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Don't miss out on the action. Join RecLora today and be part of something truly special. Whether you're a veteran or just starting out, we welcome you.
          </p>
          <button className="btn-primary hover-lift">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  )
}
