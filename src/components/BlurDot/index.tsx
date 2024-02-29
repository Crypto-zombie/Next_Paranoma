/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from 'three'
import { useLayoutEffect, useRef } from 'react'

type Props = {
  pos: Vector3
}
const target = new Vector3(0, 0, 0)
export default function BlurDot({ pos }: Props) {
  const ref = useRef<any>()
  useLayoutEffect(() => {
    ref.current.lookAt(target)
  }, [])
  return (
    <mesh
      ref={ref}
      position={pos}>
      <circleGeometry args={[15, 50]} />
      <meshPhysicalMaterial
        transmission={1}
        roughness={0.4}
      />
    </mesh>
  )
}
