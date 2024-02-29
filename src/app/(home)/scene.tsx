'use client'
import Paranoma from '@/components/Paranoma'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ fov: 80 }}>
        <Paranoma />
        <Preload all />
      </Canvas>
    </Suspense>
  )
}
