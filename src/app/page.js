'use client'

import { Canvas } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import VRModel from '../../components/VRModel'
import ScrollOverlay from '../../components/ScrollOverlay'
import EntryLogo from '../../components/EntryLogo'
import NavbarButton from '../../components/Navbar'

export default function Home() {
  const scrollY = useRef(0)
  const [introDone, setIntroDone] = useState(false)

  return (
    <div className="relative w-full h-[500vh]">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-[500vh] z-[-1]">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-[#1F1C2C] via-[#928DAB] to-[#F3E7E9]"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{
            duration: 30,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          style={{ backgroundSize: '400% 400%' }}
        />
      </div>

      {/* 3D CANVAS */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} shadows>
          <ambientLight intensity={0.8} />
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={2}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          {introDone && (
            <VRModel scrollY={scrollY} setIntroDone={setIntroDone} />
          )}
        </Canvas>

        {/* EntryLogo rendered OUTSIDE Canvas to avoid R3F errors */}
        {!introDone && (
          <EntryLogo onFinish={() => setIntroDone(true)} />
        )}
      </div>

      {/* NAVBAR BUTTON */}
      {introDone && <NavbarButton />}

      {/* SCROLL OVERLAY TEXT */}
      <ScrollOverlay scrollY={scrollY} introDone={introDone} />
    </div>
  )
}
