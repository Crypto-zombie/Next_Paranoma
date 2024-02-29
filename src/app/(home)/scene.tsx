'use client'
import Paranoma from '@/components/Paranoma'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Suspense } from 'react'

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ fov: 80 }}>
        <Paranoma />
        <OrbitControls maxDistance={140} />
        <Preload all />
      </Canvas>
    </Suspense>
  )
}
