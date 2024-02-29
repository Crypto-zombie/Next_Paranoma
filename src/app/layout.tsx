import './globals.css'
import { Sorts_Mill_Goudy } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: '3D Paranoma Tool',
  description: 'Made by Yamato',
  creator: 'plute.dev@gmail.com'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
