'use client'
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function VRModel({ scrollY, setIntroDone }) {
  const modelRef = useRef()
  const { scene } = useGLTF('/met_aquest_3.glb')
  const [localIntroDone, setLocalIntroDone] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })

  const entryTargetScale = new THREE.Vector3(10, 10, 10)
  const entryLerpProgress = useRef(0)
  const [entryAnimating, setEntryAnimating] = useState(true)

const positions = [
  [0, 0.6, 1],        // Hero shot (front)
  [1, 0.4, 1.2],      // Slide right and pull back
  [-1, 0.4, 1.2],     // Slide left
  [0.5, 0.9, 0.8],    // Top-front corner
  [0, 0.6, 0.6],      // Final zoom-in
]

const rotations = [
  [0.1, 0.3, 0],                // Slight tilt
  [0.2, -Math.PI / 3, 0.1],     // Side-back left
  [0.2, Math.PI / 3, -0.1],     // Side-back right
  [Math.PI / 6, 0.4, 0],        // Slight bird’s eye
  [0, Math.PI, 0],              // Center spin final
]




  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0.5, 1)
      modelRef.current.scale.set(0.01, 0.01, 0.01)

      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          // Enable shadows and keep original material
          child.castShadow = true
          child.receiveShadow = true
          if (child.material) {
            child.material.transparent = true
            child.material.opacity = 0
          }
        }
      })
    }

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (!modelRef.current) return

    if (entryAnimating) {
      entryLerpProgress.current += 0.02
      const progress = Math.min(entryLerpProgress.current, 1)
      modelRef.current.scale.lerp(entryTargetScale, 0.05)

      modelRef.current.traverse((child) => {
        if (child.material && 'opacity' in child.material) {
          child.material.opacity = progress
        }
      })

      if (progress >= 1) {
        setEntryAnimating(false)
        setLocalIntroDone(true)
        setIntroDone(true)
      }

      return
    }

    const section = Math.floor(scrollY.current)
    const pos = positions[section] || [0, 0, 1.5]
    const rot = rotations[section] || [0, 0, 0]
    const t = performance.now() / 1000
modelRef.current.position.y += Math.sin(t * 1.5) * 0.002

    modelRef.current.position.lerp(new THREE.Vector3(...pos), 0.1)

    if (section === 4) {
      const zoom = 10 + (scrollY.current % 1) * 10
      modelRef.current.scale.lerp(new THREE.Vector3(zoom, zoom, zoom), 0.05)

      const targetRotY = mouse.current.x * Math.PI * 0.3
      const targetRotX = mouse.current.y * Math.PI * 0.1

      modelRef.current.rotation.y += (targetRotY - modelRef.current.rotation.y) * 0.1
      modelRef.current.rotation.x += (targetRotX - modelRef.current.rotation.x) * 0.1
    } else {
      modelRef.current.scale.lerp(new THREE.Vector3(10, 10, 10), 0.1)
      modelRef.current.rotation.x += (rot[0] - modelRef.current.rotation.x) * 0.1
      modelRef.current.rotation.y += (rot[1] - modelRef.current.rotation.y) * 0.1
      modelRef.current.rotation.z += (rot[2] - modelRef.current.rotation.z) * 0.1
    }
  })

  return (
    <primitive ref={modelRef} object={scene} scale={10} />
  )
}
