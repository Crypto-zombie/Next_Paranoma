/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from '@react-three/fiber'
import { create } from 'zustand'

export type initialState = {
  blurStack: Array<Vector3>
  setBlurStack: (cartValue: any) => void
}

export const useCart = create<initialState>((set) => ({
  blurStack: [],
  setBlurStack: (blurStack: Array<Vector3>) =>
    set((state: any) => ({
      ...state,
      blurStack: [...blurStack]
    }))
}))
