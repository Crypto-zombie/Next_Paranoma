'use client'
import { FiTrash } from '@react-icons/all-files/fi/FiTrash'
import { MdBrokenImage } from '@react-icons/all-files/md/MdBrokenImage'
import { MdCamera } from '@react-icons/all-files/md/MdCamera'
import { MdTextFields } from '@react-icons/all-files/md/MdTextFields'
import { useAction } from '@/store/useAction'

export default function Panel() {
  const { action, setAction } = useAction()
  return (
    <div className="absolute bottom-10 right-10 z-50 rounded-md bg-black bg-opacity-80 p-4 text-white">
      <p className="mb-4">Select tools</p>
      <div className="flex justify-between space-x-1">
        <div
          className="flex w-20 flex-col items-center justify-between space-y-2 p-1 hover:bg-zinc-700"
          style={{ backgroundColor: action === 'none' ? '#3F3E3E' : 'transparent' }}
          onPointerDown={() => setAction('none')}>
          <MdCamera className={'h-8 w-8 rounded-full border border-white p-1'} />
          <p className="text-xs">Control</p>
        </div>
        <div
          className="flex w-20 flex-col items-center justify-between space-y-2 p-1 hover:bg-zinc-700"
          style={{ backgroundColor: action === 'blur' ? '#3F3E3E' : 'transparent' }}
          onPointerDown={() => setAction('blur')}>
          <MdBrokenImage className={'h-8 w-8 rounded-full border border-white p-1'} />
          <p className="text-xs">Blur Effect</p>
        </div>
        <div
          className="flex w-20 flex-col items-center justify-between space-y-2 p-1 hover:bg-zinc-700"
          style={{ backgroundColor: action === 'text' ? '#3F3E3E' : 'transparent' }}
          onPointerDown={() => setAction('text')}>
          <MdTextFields className={'h-8 w-8 rounded-full border border-white p-1'} />
          <p className="text-xs">Add Text</p>
        </div>
        <div
          className="flex w-20 flex-col items-center justify-between space-y-2 p-1 hover:bg-zinc-700"
          style={{ backgroundColor: action === 'remove' ? '#3F3E3E' : 'transparent' }}
          onPointerDown={() => setAction('remove')}>
          <FiTrash className={'h-8 w-8 rounded-full border border-white p-1'} />
          <p className="text-xs">Remove Item</p>
        </div>
      </div>
    </div>
  )
}
