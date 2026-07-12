import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover-scale">
            <div className="text-2xl font-bold gradient-text">RecLora</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium hover:text-reclora-pink transition-all duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-reclora-blue to-reclora-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/news" className="text-sm font-medium hover:text-reclora-pink transition-all duration-200 relative group">
              News
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-reclora-blue to-reclora-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/events" className="text-sm font-medium hover:text-reclora-pink transition-all duration-200 relative group">
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-reclora-blue to-reclora-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/rooms" className="text-sm font-medium hover:text-reclora-pink transition-all duration-200 relative group">
              Rooms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-reclora-blue to-reclora-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/profile" className="text-sm font-medium hover:text-reclora-pink transition-all duration-200 relative group">
              Profile
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-reclora-blue to-reclora-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-reclora-blue to-reclora-pink rounded-lg font-bold text-sm hover:opacity-90 transition-all hover:shadow-lg active:scale-95">
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800/50 bg-slate-950/95 backdrop-blur animate-fadeInDown">
            <Link href="/" className="block py-3 px-4 hover:text-reclora-pink hover:bg-slate-800/50 transition-all rounded-lg">
              Home
            </Link>
            <Link href="/news" className="block py-3 px-4 hover:text-reclora-pink hover:bg-slate-800/50 transition-all rounded-lg">
              News
            </Link>
            <Link href="/events" className="block py-3 px-4 hover:text-reclora-pink hover:bg-slate-800/50 transition-all rounded-lg">
              Events
            </Link>
            <Link href="/rooms" className="block py-3 px-4 hover:text-reclora-pink hover:bg-slate-800/50 transition-all rounded-lg">
              Rooms
            </Link>
            <Link href="/profile" className="block py-3 px-4 hover:text-reclora-pink hover:bg-slate-800/50 transition-all rounded-lg">
              Profile
            </Link>
            <button className="w-full mt-4 mx-4 px-6 py-2 bg-gradient-to-r from-reclora-blue to-reclora-pink rounded-lg font-bold hover:opacity-90 transition-all">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
