'use client'
import Paranoma from '@/components/Paranoma'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas camera={{ fov: 80 }}>
      <Paranoma />
      <OrbitControls maxDistance={140} />
    </Canvas>
  )
}
