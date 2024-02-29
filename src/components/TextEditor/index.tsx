/* eslint-disable @typescript-eslint/no-explicit-any */
import { Html } from '@react-three/drei'
import { Vector3 } from 'three'
import { useAction } from '@/store/useAction'
import { useState } from 'react'
import { useText } from '@/store/useText'
type CustomText = {
  pos: Vector3
  index: number
}
export default function TextEditor({ pos, index }: CustomText) {
  const [inputValue, setInputValue] = useState<string>('')
  const { action } = useAction()
  const { removeItem } = useText()
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }
  return (
    <Html
      sprite
      position={pos}
      className="w-full bg-opacity-0 text-lg text-white drop-shadow-lg">
      <input
        onClick={() => {
          if (action === 'remove') {
            removeItem(index)
          }
        }}
        type="text"
        placeholder={'Type name or commit'}
        value={inputValue}
        onChange={handleInputChange}
        className="bg-transparent"
      />
    </Html>
  )
}
