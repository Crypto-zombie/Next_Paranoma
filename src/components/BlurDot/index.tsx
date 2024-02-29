/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from 'three'
import { memo, useLayoutEffect, useRef } from 'react'
import { useAction } from '@/store/useAction'
import { useBlurStack } from '@/store/useBlurStack'

type Props = {
  pos: Vector3
  index: number
}
const target = new Vector3(0, 0, 0)
const BlurDot = ({ pos, index }: Props) => {
  const ref = useRef<any>()
  const { action } = useAction()
  const { blurStack, removeItem } = useBlurStack()
  useLayoutEffect(() => {
    ref.current.lookAt(target)
  }, [blurStack])
  return (
    <mesh
      ref={ref}
      position={[pos.x, pos.y, pos.z]}
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

export default memo(BlurDot)
