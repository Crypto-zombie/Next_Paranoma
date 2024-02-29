import { Vector3 } from '@react-three/fiber'

type Props = {
  pos: Vector3
}
export default function BlurDot({ pos }: Props) {
  return (
    <mesh position={pos}>
      <sphereGeometry args={[10, 50, 50]} />
      <meshPhysicalMaterial
        transmission={1}
        roughness={0.4}
      />
    </mesh>
  )
}
