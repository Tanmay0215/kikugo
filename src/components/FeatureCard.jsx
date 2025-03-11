import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 border-primary/50">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
