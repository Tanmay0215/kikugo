import { ArrowBigDown, ArrowUpRight } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center md:justify-between p-5 text-gray-300">
      <div className="text-primary font-bold text-2xl">KIKUGO</div>

      <div className="flex gap-5">
        <button className="group flex gap-2 items-center border-2 border-primary rounded-full px-4 py-1 cursor-pointer">
          <p>Join Discord</p>
          <ArrowUpRight size={20} className='hidden group-hover:block' />
        </button>
        <a href="/kikugo.exe" download="kikugo.exe">
          <button className="group flex items-center gap-1 bg-primary/80 text-black font-semibold text-sm rounded-full px-4 py-2 cursor-pointer">
            <p>Download Now</p>
            <ArrowBigDown size={20} className='hidden group-hover:block' />
          </button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
