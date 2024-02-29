/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from 'three'
import { useAction } from '@/store/useAction'
import { useBlurStack } from '@/store/useBlurStack'
import { useLayoutEffect, useRef } from 'react'

type Props = {
  pos: Vector3
  index: number
}
const target = new Vector3(0, 0, 0)
export default function BlurDot({ pos, index }: Props) {
  const ref = useRef<any>()
  const { action } = useAction()
  const { removeItem } = useBlurStack()
  useLayoutEffect(() => {
    ref.current.lookAt(target)
  }, [])
  return (
    <mesh
      ref={ref}
      position={pos}
      onPointerDown={(e) => {
        e.stopPropagation()
        if (action === 'remove') {
          removeItem(index)
        }
      }}>
      <circleGeometry args={[15, 50]} />
      <meshPhysicalMaterial
        transmission={1}
        roughness={0.4}
      />
    </mesh>
  )
}
