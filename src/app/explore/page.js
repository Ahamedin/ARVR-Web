'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  OrbitControls,
  useAnimations,
  Float,
  Sparkles,
  Environment,
  ContactShadows,
} from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import NavbarButton from '../../../components/Navbar'

function ModelWrapper({
  url,
  scale,
  position,
  rotation,
  float = false,
})
{
  const group = useRef()

  const { scene, animations } = useGLTF(url)
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(...scale)
      group.current.position.set(...position)
      group.current.rotation.set(...rotation)
    }

    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]]

      firstAction?.reset().fadeIn(0.5).play()
    }
  }, [actions, scale, position, rotation])

  useFrame((state, delta) => {
    mixer?.update(delta)

    if (group.current && float) {
      group.current.rotation.y += delta * 0.35
      group.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.08
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <primitive ref={group} object={scene} />
    </Float>
  )
}

export default function ExplorePage() {
  const sections = [
    {
      model: {
        url: '/man_with_meta_quest_3_headset.glb',
        scale: [0.7, 0.7, 0.7],
        position: [0, -1.5, 0],
        rotation: [0, 0, 0],
        float: false,
      },

      heading: 'ENTER THE NEXT REALITY',

      subheading: 'IMMERSIVE XR EXPERIENCES',

      caption:
        'Step beyond traditional screens into a fully interactive digital universe powered by AR, VR, and spatial computing. At DrobospaceX, we craft futuristic experiences that blur the line between imagination and reality.',

      highlights: [
        'Spatial Computing',
        'Mixed Reality',
        'Interactive 3D',
        'Immersive Simulations',
      ],

      textAlign: 'right',
      textColor: 'text-black',
    },

    {
      model: {
        url: '/meta_quest_pro_left_controller.glb',
        scale: [20, 20, 20],
        position: [-0.5, 1, 0],
        rotation: [0.25, 0, 0],
        float: true,
      },

      heading: 'DESIGNED FOR INNOVATION',

      subheading: 'PRECISION • PERFORMANCE • EXPERIENCE',

      caption:
        'We engineer intelligent immersive systems that redefine human interaction. From enterprise VR training to futuristic metaverse applications, every detail is crafted for realism, responsiveness, and seamless engagement.',

      highlights: [
        'Enterprise XR',
        'AI Interfaces',
        'Real-Time Interaction',
        'Immersive UX',
      ],

      textAlign: 'left',
      textColor: 'text-black',
    },

    {
      model: {
        url: '/meta_quest_pro_right_controller.glb',
        scale: [20, 20, 20],
        position: [0, 0.5, 0],
        rotation: [0.3, 0, 0],
        float: true,
      },

      heading: 'BUILDING THE FUTURE',

      subheading: 'DROBOSPACEX AUTOMATION',

      caption:
        'From next-generation web platforms to advanced XR ecosystems, we transform ambitious ideas into powerful digital realities. Our mission is to create immersive technology that inspires, innovates, and evolves the future of interaction.',

      highlights: [
        'Next.js & Three.js',
        'Metaverse Development',
        'AI + Automation',
        'Future-Ready Products',
      ],

      textAlign: 'right',
      textColor: 'text-black',
    },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-cartoon text-white">
      <NavbarButton />

      {/* Animated Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-20 bg-gradient-to-br from-[#080510] via-[#2B1F54] to-[#D8C7FF]"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          backgroundSize: '400% 400%',
        }}
      />

      {/* Glow */}
      <div className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-[2px]" />

      {/* Sections */}
      {sections.map((sec, idx) => (
        <section
          key={idx}
          className="min-h-screen flex items-center justify-between px-10 md:px-20 py-20 relative z-10"
        >
          {sec.textAlign === 'left' ? (
            <>
              {/* TEXT */}
              <div className="w-1/2 pr-12">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm tracking-[0.5em] uppercase text-white/60 mb-4"
                >
                  {sec.subheading}
                </motion.h2>

                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 0.2, x: 0 }}
                  transition={{ duration: 1 }}
                  className={`text-[5vw] font-extrabold leading-none ${sec.textColor}`}
                >
                  {sec.heading}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg mt-6 text-white/85 max-w-xl leading-loose"
                >
                  {sec.caption}
                </motion.p>

                <div className="grid grid-cols-2 gap-4 mt-8 max-w-xl">
                  {sec.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl px-5 py-4 text-sm font-semibold text-white shadow-2xl"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MODEL */}
              <div className="w-1/2 h-[80vh]">
                <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
                  <ambientLight intensity={1.4} />

                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={2}
                  />

                  <spotLight
                    position={[0, 10, 5]}
                    intensity={2}
                    angle={0.3}
                    penumbra={1}
                  />

                  <Environment preset="city" />

                  <Sparkles
                    count={100}
                    scale={10}
                    size={2}
                    speed={0.4}
                  />

                  <ContactShadows
                    position={[0, -2.5, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2}
                    far={5}
                  />

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                  />

                  <ModelWrapper {...sec.model} />
                </Canvas>
              </div>
            </>
          ) : (
            <>
              {/* MODEL */}
              <div className="w-1/2 h-[80vh]">
                <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
                  <ambientLight intensity={1.4} />

                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={2}
                  />

                  <spotLight
                    position={[0, 10, 5]}
                    intensity={2}
                    angle={0.3}
                    penumbra={1}
                  />

                  <Environment preset="city" />

                  <Sparkles
                    count={100}
                    scale={10}
                    size={2}
                    speed={0.4}
                  />

                  <ContactShadows
                    position={[0, -2.5, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2}
                    far={5}
                  />

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                  />

                  <ModelWrapper {...sec.model} />
                </Canvas>
              </div>

              {/* TEXT */}
              <div className="w-1/2 pl-12">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm tracking-[0.5em] uppercase text-white/60 mb-4"
                >
                  {sec.subheading}
                </motion.h2>

                <motion.h1
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 0.2, x: 0 }}
                  transition={{ duration: 1 }}
                  className={`text-[5vw] font-extrabold leading-none ${sec.textColor}`}
                >
                  {sec.heading}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg mt-6 text-white/85 max-w-xl leading-loose"
                >
                  {sec.caption}
                </motion.p>

                <div className="grid grid-cols-2 gap-4 mt-8 max-w-xl">
                  {sec.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl px-5 py-4 text-sm font-semibold text-white shadow-2xl"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      ))}
    </div>
  )
}