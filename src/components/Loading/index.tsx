'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useProgress } from '@react-three/drei'

export default function Loading() {
  const { progress, loaded } = useProgress()
  const bg = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [hide, setHide] = useState(false)
  const fadeOut = () => {
    gsap.to(content.current, {
      duration: 1,
      ease: 'power1.out',
      opacity: 0,
      overwrite: true,
      onComplete: () => {
        gsap.to(bg.current, {
          duration: 2,
          ease: 'power1.out',
          opacity: 0,
          overwrite: true,
          onComplete: () => {
            setHide(true)
          }
        })
      }
    })
  }
  useEffect(() => {
    if (progress === 100) fadeOut()
  }, [progress, loaded])

  return hide ? null : (
    <div
      ref={bg}
      className="custom-background absolute left-0 top-0 z-[99999999] flex h-screen w-screen flex-col items-center justify-center">
      <div
        ref={content}
        className="flex flex-col items-center justify-center space-y-4 font-bold text-zinc-700">
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <p className="items-end border-zinc-700 text-2xl tracking-wide">3D Paranoma Tools</p>
            <p className="border-zinc-700 text-sm tracking-wide">By Yamato</p>
            <p className="border-zinc-700 text-sm tracking-wide">plute.dev@gmail.com</p>
          </div>
        </div>
        <div>
          <div
            style={{ width: (180 / 100) * progress }}
            className="w-0 translate-y-[2px] border-b-2 border-zinc-700 pb-1"
          />
          <p className="border-t-2 border-zinc-400 px-16 py-3 text-[9px]">L O A D I N G</p>
        </div>
      </div>
    </div>
  )
}
