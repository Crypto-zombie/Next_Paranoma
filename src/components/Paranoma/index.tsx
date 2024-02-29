import { BackSide, DoubleSide, Vector3 } from 'three/src/Three.js'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useAction } from '@/store/useAction'
import { useBlurStack } from '@/store/useBlurStack'
import { useText } from '@/store/useText'

export default function Paranoma() {
  const texture = useTexture('/paranoma.webp')
  const { action } = useAction()
  const { addBlurStack } = useBlurStack()
  const { setAction } = useAction()
  const { addText } = useText()
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
          if (action === 'blur' && e.point.x) {
            addBlurStack(new Vector3(e.point.x, e.point.y, e.point.z))
          }
          if (action === 'text' && e.point.x) {
            addText(new Vector3(e.point.x, e.point.y, e.point.z))
            setAction('none')
          }
        }}
      >
        <sphereGeometry args={[148, 100, 100]} />
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
