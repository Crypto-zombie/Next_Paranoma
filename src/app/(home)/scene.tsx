'use client'
import Paranoma from '@/components/Paranoma'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { useAction } from '@/store/useAction'

export default function Scene() {
  const { action } = useAction()
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ fov: 80 }}>
        <Paranoma />
        <OrbitControls
          maxDistance={140}
          enabled={action === 'none'}
        />
        <Preload all />
      </Canvas>
    </Suspense>
  )
}
