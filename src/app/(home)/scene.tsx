'use client'
import BlurDot from '@/components/BlurDot'
import Paranoma from '@/components/Paranoma'
import TextEditor from '@/components/TextEditor'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { useBlurStack } from '@/store/useBlurStack'
import { useText } from '@/store/useText'

export default function Scene() {
  const { blurStack } = useBlurStack()
  const { texts } = useText()
  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ fov: 80 }}
        gl={{ antialias: true }}>
        <Paranoma />
        <Preload all />
        {blurStack.map((pos, index) => (
          <BlurDot
            key={index}
            pos={pos}
          />
        ))}
        {texts.map((pos, index) => (
          <TextEditor
            key={index}
            pos={pos}
          />
        ))}
      </Canvas>
    </Suspense>
  )
}
