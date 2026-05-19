
'use client'

import { motion } from 'framer-motion'

const capabilities = [
  'XR Experiences',
  'Metaverse Solutions',
  'AI Automation',
  '3D Interaction',
]

const services = [
  'AR / VR Development',
  'AI Powered Solutions',
  '3D Product Experiences',
  'Metaverse Platforms',
  'UI / UX Systems',
  'Web Applications',
  'Automation Systems',
  'Interactive Simulations',
]

const values = ['Innovation', 'Immersion', 'Creativity', 'Future Technology']

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f1c2c_0%,_#0f1020_45%,_#050816_100%)] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 md:px-10">
        <div className="w-full text-center">
          <motion.h1
            className="text-5xl font-extrabold tracking-[0.35em] md:text-[9vw] md:leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DROBOSPACEX
          </motion.h1>

          <motion.h2
            className="mt-6 text-lg font-semibold tracking-[0.3em] text-white/85 md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            IMMERSIVE FUTURE TECHNOLOGIES
          </motion.h2>

          <motion.p
            className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-white/75 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            Transforming ideas into immersive digital realities through
            cutting-edge AR, VR, AI, 3D experiences, and next-generation web
            innovation.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-2 md:px-10">
        <div className="rounded-[2rem] border border-white/15 bg-white/8 p-8 backdrop-blur-xl md:p-10">
          <h3 className="text-3xl font-extrabold tracking-wide">WHO WE ARE</h3>
          <p className="mt-6 text-lg leading-8 text-white/80">
            DrobospaceX Automation builds immersive digital ecosystems for the
            next era of interaction. We combine creativity, artificial
            intelligence, spatial computing, and modern web technologies to
            redefine how humans connect with the digital world.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/8 p-8 backdrop-blur-xl md:p-10">
          <h3 className="text-3xl font-extrabold tracking-wide">CONNECT</h3>
          <p className="mt-6 text-2xl font-semibold text-white/90">
            contact@drobospacex.com
          </p>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Lets collaborate and build the next generation of immersive
            experiences together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h3 className="text-3xl font-extrabold tracking-wide">OUR SERVICES</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/15 bg-white/8 p-5 font-semibold text-white/90 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/12"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 pb-20 md:px-10">
        <h3 className="text-3xl font-extrabold tracking-wide">OUR VISION</h3>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
          To create a future where immersive technology becomes a natural
          extension of human creativity and communication. We envision
          intelligent digital experiences that inspire innovation, transform
          industries, and shape the next generation of reality.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {values.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/15 bg-white/8 px-6 py-3 font-semibold text-white/90 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
