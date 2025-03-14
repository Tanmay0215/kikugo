import React from 'react'
import FeatureDetails from '../components/FeatureDetails'
import { motion } from 'framer-motion'
import { featureDetails } from '../features'
import { FaYoutube } from 'react-icons/fa'
import { Bot, Box, BoxIcon } from 'lucide-react'

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl py-2">
        <div className="flex items-center justify-center gap-2 border-2 border-blue-600/60 rounded-md p-4 shadow-2xl hover:shadow-blue-600">
          <FaYoutube size={24} />
          <p>Youtube Immersion</p>
        </div>
        <div className="flex items-center justify-center gap-2 border-2 border-violet-600/60 rounded-md p-4 shadow-2xl hover:shadow-violet-600">
          <Bot size={24} />
          <p>AI Practice</p>
        </div>
        <div className="flex items-center justify-center gap-2 border-2 border-fuchsia-700/60 rounded-md p-4 shadow-2xl hover:shadow-fuchsia-700">
          <BoxIcon size={24} />
          <p>JoyoKanji + Flash Cards</p>
        </div>
      </div>
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary">FEATURES</h1>
        <p className="text-gray-400 mt-2">
          Explore the amazing features of KIKUGO.
        </p>
      </div>
      <div>
        {featureDetails.map((feature) => (
          <FeatureDetails feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default Features
