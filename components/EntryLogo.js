'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EntryLogo({ onFinish }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish()
    }, 5000)

    return () => clearTimeout(timer)

  }, [onFinish])

  return (
    <div className="
      fixed
      top-0
      left-0
      w-full
      h-screen
      overflow-hidden
      bg-[#030014]
      z-50
      flex
      flex-col
      items-center
      justify-center
    ">

      {/* Animated Glow */}
      <div className="
        absolute
        w-[400px]
        h-[400px]
        md:w-[700px]
        md:h-[700px]
        rounded-full
        bg-fuchsia-500/20
        blur-[180px]
      " />

      <div className="
        absolute
        w-[300px]
        h-[300px]
        md:w-[500px]
        md:h-[500px]
        rounded-full
        bg-cyan-500/20
        blur-[180px]
      " />

      {/* Main Title */}
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
          letterSpacing: '0.5em',
        }}

        animate={{
          opacity: 1,
          scale: 1,
          letterSpacing: '0.15em',
        }}

        transition={{
          duration: 1.5,
        }}

        className="
          text-4xl
          sm:text-5xl
          md:text-8xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-fuchsia-500
          to-purple-500
          bg-clip-text
          text-transparent
          tracking-[0.3em]
          text-center
          drop-shadow-[0_0_40px_rgba(217,70,239,0.35)]
        "
      >
        ENTER THE FUTURE
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{
          delay: 0.8,
          duration: 1,
        }}

        className="
          mt-8
          text-white/70
          text-center
          text-lg
          md:text-2xl
          tracking-[0.2em]
          max-w-3xl
          leading-relaxed
        "
      >
        Immersive XR • Artificial Intelligence • Spatial Computing
      </motion.p>

      {/* Loader */}
      <AnimatePresence>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '65%' }}

          transition={{
            duration: 4,
            ease: 'easeInOut',
          }}

          className="
            mt-16
            h-3
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-purple-500
            to-fuchsia-500
            shadow-[0_0_40px_rgba(168,85,247,0.5)]
            relative
            overflow-hidden
          "
        >

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}

            transition={{
              duration: 4,
              ease: 'easeInOut',
            }}

            className="
              absolute
              top-[-4px]
              left-0
              w-5
              h-5
              bg-white
              rounded-full
              shadow-[0_0_30px_rgba(255,255,255,1)]
            "
          />

        </motion.div>

      </AnimatePresence>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        transition={{
          delay: 1.5,
        }}

        className="
          absolute
          bottom-10
          text-white/40
          tracking-[0.3em]
          text-sm
        "
      >
        DROBOSPACEX AUTOMATION
      </motion.p>

    </div>
  )
}