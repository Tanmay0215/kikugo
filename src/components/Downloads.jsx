import { ArrowDownIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Downloads = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-5 p-6 rounded shadow-md">
        <a
          href="/kikugo.exe"
          download="kikugo.exe"
          className="bg-primary text-gray-700 flex group items-center gap-2 font-bold py-2 px-4 rounded"
        >
          <ArrowDownIcon size={20} />
          Download for Windows
        </a>
        <p className="text-primary font-semibold">
          Coming Soon for iOS and Android
        </p>
      </div>
    </div>
  )
}

export default Downloads
