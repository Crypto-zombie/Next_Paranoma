import { BackSide } from 'three/src/Three.js'
import { useTexture } from '@react-three/drei'

export default function Paranoma() {
  const texture = useTexture('/paranoma.webp')

  return (
    <group>
      <mesh
        onPointerDown={(e) => {
          console.log(e.point.x, e.point.y, e.point.z)
        }}>
        <sphereGeometry args={[150, 100, 100]} />
        <meshBasicMaterial
          map={texture}
          side={BackSide}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}
