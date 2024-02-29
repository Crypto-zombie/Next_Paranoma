/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from 'three'
import { create } from 'zustand'

export type initialState = {
  blurStack: Array<Vector3>
  setBlurStack: (blurStack: Array<Vector3>) => void
  addBlurStack: (item: Vector3) => void
  removeItem: (index: number) => void
}

export const useBlurStack = create<initialState>((set) => ({
  blurStack: [],
  setBlurStack: (blurStack: Array<Vector3>) =>
    set((state: any) => ({
      ...state,
      blurStack: [...blurStack]
    })),
  addBlurStack: (item: Vector3) =>
    set((state: any) => ({
      ...state,
      blurStack: [...state.blurStack, item]
    })),
  removeItem: (index: number) =>
    set((state: any) => ({
      ...state,
      blurStack: state.blurStack.filter((_: any, inx: number) => index !== inx)
    }))
}))
