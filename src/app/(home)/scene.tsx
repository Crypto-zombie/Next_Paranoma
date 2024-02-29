'use client'
import BlurDot from '@/components/BlurDot'
import Paranoma from '@/components/Paranoma'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { useBlurStack } from '@/store/useBlurStack'

export default function Scene() {
  const { blurStack } = useBlurStack()
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ fov: 80 }}>
        <Paranoma />
        <Preload all />
        {blurStack.map((pos, index) => (
          <BlurDot
            key={index}
            pos={pos}
          />
        ))}
      </Canvas>
    </Suspense>
  )
}
