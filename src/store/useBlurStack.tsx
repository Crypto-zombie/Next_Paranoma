/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from '@react-three/fiber'
import { create } from 'zustand'

export type initialState = {
  blurStack: Array<Vector3>
  setBlurStack: (blurStack: any) => void
  addBlurStack: (blurStack: any) => void
}

export const useBlurStack = create<initialState>((set) => ({
  blurStack: [],
  setBlurStack: (blurStack: Array<Vector3>) =>
    set((state: any) => ({
      ...state,
      blurStack: [...blurStack]
    })),
  addBlurStack: (blurStack: Array<Vector3>) =>
    set((state: any) => ({
      ...state,
      blurStack: [...state.blurStack, blurStack]
    }))
}))
