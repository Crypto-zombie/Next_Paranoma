import React, { useMemo } from 'react'
import { DoubleSide, TextureLoader } from 'three/src/Three.js'

export default function Paranoma() {
  const texture = useMemo(() => new TextureLoader().load('/paranoma.webp'), [])

  return (
    <group>
      <mesh>
        <sphereGeometry args={[10, 100, 100]} />
        <meshBasicMaterial
          map={texture}
          side={DoubleSide}
        />
      </mesh>
    </group>
  )
}
