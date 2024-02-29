/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

export type initialState = {
  action: string
  setAction: (action: any) => void
}

export const useAction = create<initialState>((set) => ({
  action: 'none',
  setAction: (action: string) =>
    set((state: any) => ({
      ...state,
      action: action
    }))
}))
