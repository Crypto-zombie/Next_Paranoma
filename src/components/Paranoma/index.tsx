import { BackSide, DoubleSide } from 'three/src/Three.js'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useAction } from '@/store/useAction'

export default function Paranoma() {
  const texture = useTexture('/paranoma.webp')
  const { action } = useAction()

  return (
    <group>
      <OrbitControls
        maxDistance={140}
        enabled={action === 'none'}
      />
      <mesh>
        <sphereGeometry args={[150, 100, 100]} />
        <meshBasicMaterial
          map={texture}
          side={BackSide}
          toneMapped={false}
        />
      </mesh>
      <mesh
        onPointerDown={(e) => {
          if (action !== 'none' && e.point.x) console.log(e.point.x, e.point.y, e.point.z)
        }}>
        <sphereGeometry args={[140, 100, 100]} />
        <meshBasicMaterial
          side={DoubleSide}
          transparent
          opacity={0}
          color={'black'}
        />
      </mesh>
    </group>
  )
}
