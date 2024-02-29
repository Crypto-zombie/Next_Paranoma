/* eslint-disable @typescript-eslint/no-explicit-any */
import { Html } from '@react-three/drei'
import { Vector3 } from 'three'
import { useState } from 'react'
type CustomText = {
  pos: Vector3
}
export default function TextEditor({ pos }: CustomText) {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }
  return (
    <Html
      sprite
      position={pos}
      className="w-full bg-opacity-0 text-lg text-white drop-shadow-lg">
      <input
        type="text"
        placeholder={'Type name or commit'}
        value={inputValue}
        onChange={handleInputChange}
        className="bg-transparent"
      />
    </Html>
  )
}
