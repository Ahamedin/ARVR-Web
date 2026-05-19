'use client'

import {
  useRef,
  useEffect,
  useState,
  Suspense,
} from 'react'

import {
  Canvas,
  useFrame,
} from '@react-three/fiber'

import {
  useGLTF,
  Float,
  Sparkles,
  Environment,
} from '@react-three/drei'

import * as THREE from 'three'

function MetaLogo({ onFinish }) {

  const logoRef = useRef()

  const { scene } = useGLTF('/scene.gltf')

  const [scaleUp, setScaleUp] = useState(false)

  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {

    if (logoRef.current) {

      logoRef.current.rotation.set(0, 0, 0)

      logoRef.current.scale.set(0.3, 0.3, 0.3)

      logoRef.current.position.set(0, 0, 0)
    }

    const t1 = setTimeout(() => setScaleUp(true), 1200)

    const t2 = setTimeout(() => setFadeOut(true), 3200)

    const t3 = setTimeout(() => onFinish(), 5000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }

  }, [onFinish])

  useFrame(() => {

    if (!logoRef.current) return

    logoRef.current.rotation.y += 0.01

    logoRef.current.rotation.x =
      Math.sin(Date.now() * 0.001) * 0.08

    if (scaleUp) {

      logoRef.current.scale.lerp(
        new THREE.Vector3(0.7, 0.7, 0.7),
        0.03
      )
    }

    if (fadeOut) {

      logoRef.current.traverse((child) => {

        if (
          child.material &&
          'opacity' in child.material
        ) {

          child.material.transparent = true

          child.material.opacity -= 0.015

          if (child.material.opacity < 0) {
            child.material.opacity = 0
          }
        }
      })
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <primitive
        ref={logoRef}
        object={scene}
      />
    </Float>
  )
}

function XRWorld() {

  const ref = useRef()

  const { scene } = useGLTF('/xr_world.glb')

  useEffect(() => {

    if (ref.current) {

      ref.current.scale.set(1, 1, 1)

      ref.current.position.set(0, -1.5, 0)
    }

  }, [])

  useFrame((state) => {

    if (!ref.current) return

    ref.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.2
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <primitive
        ref={ref}
        object={scene}
      />
    </Float>
  )
}

export default function EntryCanvas({
  scrollY,
  setIntroDone,
}) {

  const [introComplete, setIntroComplete] =
    useState(false)

  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 50,
      }}
    >

      {/* Fog */}
      <fog
        attach="fog"
        args={['#050816', 5, 15]}
      />

      {/* Lights */}
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#8b5cf6"
      />

      <pointLight
        position={[-5, 2, 5]}
        intensity={2}
        color="#06b6d4"
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Particles */}
      <Sparkles
        count={200}
        scale={12}
        size={3}
        speed={0.4}
      />

      <Suspense fallback={null}>

        {!introComplete && (

          <MetaLogo
            onFinish={() => {

              setIntroComplete(true)

              setIntroDone(true)
            }}
          />
        )}

        {introComplete && <XRWorld />}

      </Suspense>

    </Canvas>
  )
}