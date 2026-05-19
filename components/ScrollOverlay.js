'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  {
    word: 'BEYOND',
    caption:
      'Enter a new dimension where imagination, immersion, and technology merge into one seamless digital universe.',
  },

  {
    word: 'IMMERSIVE',
    caption:
      'Experience next-generation XR environments crafted for interaction, exploration, and futuristic learning.',
  },

  {
    word: 'SPATIAL',
    caption:
      'Transform the way humans interact with space through advanced AR, VR, and spatial computing systems.',
  },

  {
    word: 'SIMULATE',
    caption:
      'Build, train, innovate, and deploy real-world immersive experiences powered by AI and extended reality.',
  },

  {
    word: 'EVOLVE',
    caption:
      'The future is no longer ahead of us — it is being created right here at DrobospaceX Automation.',
  },
]

export default function ScrollOverlay({ scrollY, introDone }) {
  const [section, setSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY / window.innerHeight

      scrollY.current = scroll

      setSection(
        Math.min(
          sections.length - 1,
          Math.floor(scroll)
        )
      )
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  if (!introDone) return null

  const { word, caption } = sections[section]

  return (
    <div className="absolute top-0 left-0 w-full h-[300vh] md:h-[500vh] pointer-events-none z-20 font-cartoon">

      {/* CENTER CONTENT */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

        {/* Glow Background */}
        <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-fuchsia-500/20 blur-[180px] rounded-full" />

        <AnimatePresence mode="wait">

          <motion.div
            key={section}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -80, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >

            {/* HUGE WORD */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '-0.05em' }}
              transition={{ duration: 1.2 }}
              className="
              text-[24vw]
              md:text-[18vw]
              lg:text-[14vw]
              font-black
              bg-gradient-to-r
              from-white
              via-fuchsia-300
              to-cyan-300
              bg-clip-text
              text-transparent
              tracking-tighter
              leading-none
              select-none
              drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]
            "
            >
              {word}
            </motion.h1>

            {/* SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
              bg-white/10
              border
              border-white/20
              backdrop-blur-2xl
              rounded-3xl
              px-8
              py-6
              shadow-[0_0_50px_rgba(255,255,255,0.08)]
              max-w-3xl
            "
            >
              <p
                className="
                text-white/90
                text-lg
                md:text-2xl
                font-medium
                text-center
                leading-relaxed
              "
              >
                {caption}
              </p>
            </motion.div>

          </motion.div>

        </AnimatePresence>
      </div>

      {/* CTA BUTTON */}
      <AnimatePresence mode="wait">
        {section === sections.length - 1 && (

          <motion.div
            key="join-button"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="
            fixed
            bottom-10
            left-1/2
            -translate-x-1/2
            z-40
            pointer-events-auto
          "
          >

            <a
              href="/contact"
              className="
              group
              relative
              overflow-hidden
              px-10
              py-5
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              via-purple-500
              to-fuchsia-500
              text-white
              text-lg
              md:text-xl
              font-bold
              tracking-wide
              shadow-[0_0_50px_rgba(168,85,247,0.5)]
              transition-all
              duration-500
              hover:scale-110
              hover:shadow-[0_0_80px_rgba(168,85,247,0.9)]
            "
            >

              <span className="relative z-10">
                ENTER THE FUTURE
              </span>

              <div
                className="
                absolute
                inset-0
                bg-white/20
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
              />

            </a>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}