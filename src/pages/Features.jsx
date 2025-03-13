import React from 'react'
import { features } from '../features'
import FeatureDetails from '../components/FeatureDetails'
import { motion } from 'framer-motion'
import { featureDetails } from '../features'

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl py-2">
        {features.map((feature, index) => (
          <div key={index}>
            <motion.div className="border-2 border-primary/60 rounded-md py-2 px-4 text-center">
              {feature}
            </motion.div>
          </div>
        ))}
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
