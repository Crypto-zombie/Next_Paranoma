/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from 'three'
import { create } from 'zustand'

export type initialState = {
  texts: Array<Vector3>
  setTexts: (texts: any) => void
  addText: (texts: any) => void
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
    }))
}))
