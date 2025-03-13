import { ArrowBigDown } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between p-5 text-gray-300">
      <div className="text-primary font-bold text-2xl">KIKUGO</div>
      <a href="/kikugo.exe" download="kikugo.exe">
        <button className="hidden md:flex items-center gap-1 bg-primary/80 text-black font-semibold text-sm rounded-full px-4 py-2">
          <p>Download Now</p>
          <ArrowBigDown size={20} />
        </button>
      </a>
    </div>
  )
}

export default Navbar
