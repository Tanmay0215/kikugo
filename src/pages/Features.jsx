import React from 'react'
import { features } from '../features'
import FeatureCard from '../components/FeatureCard'
import FeatureDetails from '../components/FeatureDetails'
import { motion } from 'framer-motion'
import { featureDetails } from '../features'

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary">FEATURES</h1>
        <p className="text-gray-400 mt-2">
          Explore the amazing features of KIKUGO.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-6xl">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
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
