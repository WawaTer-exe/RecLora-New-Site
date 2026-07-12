import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile - RecLora</title>
        <meta name="description" content="Create and customize your RecLora profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-black min-h-screen">
        <Navbar />
        
        <section className="pt-32 pb-20 px-4 relative min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            {/* Section title */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Profile</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Create and customize your RecLora profile
              </p>
            </div>

            {/* Maintenance Notice */}
            <div className="max-w-2xl mx-auto p-12 rounded-xl bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/50 text-center">
              <div className="text-6xl mb-6">👤</div>
              <h3 className="text-3xl font-bold mb-4">This Tab is Under Maintenance</h3>
              <p className="text-gray-300 mb-4 text-lg">
                We're building an incredible profile system where you can showcase your achievements, connect with friends, and customize your RecLora identity!
              </p>
              <p className="text-gray-400">
                Check back soon to create your profile and join the community!
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
