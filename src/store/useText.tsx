/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from 'three'
import { create } from 'zustand'

export type initialState = {
  texts: Array<Vector3>
  setTexts: (texts: Array<Vector3>) => void
  addText: (item: Vector3) => void
  removeItem: (index: number) => void
}

export const useText = create<initialState>((set) => ({
  texts: [],
  setTexts: (texts: Array<Vector3>) =>
    set((state: any) => ({
      ...state,
      texts: [...texts]
    })),
  addText: (item: Vector3) =>
    set((state: any) => ({
      ...state,
      texts: [...state.texts, item]
    })),
  removeItem: (index: number) =>
    set((state: any) => ({
      ...state,
      texts: state.texts.filter((_, inx: number) => index !== inx)
    }))
}))
