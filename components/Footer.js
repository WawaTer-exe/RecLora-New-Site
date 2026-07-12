export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' },
    { label: 'Events', href: '/events' },
    { label: 'Community', href: '/#community' },
  ]

  const resources = [
    { label: 'Discord Server', href: '#' },
    { label: 'Guidelines', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Blog', href: '#' },
  ]

  const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Code of Conduct', href: '#' },
  ]

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 to-transparent border-t border-slate-800/50 pt-20 pb-10">
      {/* Background element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-reclora-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">RecLora</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reviving the legacy of Rec Room through community, passion, and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-reclora-pink transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-reclora-pink transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-reclora-pink transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {currentYear} RecLora. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-reclora-pink transition-all text-sm">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-reclora-pink transition-all text-sm">
                Discord
              </a>
              <a href="#" className="text-slate-400 hover:text-reclora-pink transition-all text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
