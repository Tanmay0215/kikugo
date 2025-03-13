import React from 'react'
import dashboard from '../assets/dashboard.png'
import { motion } from 'motion/react'

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center"
      >
        <div className="max-w-2xl text-3xl uppercase md:text-5xl md:text-center text-gray-300 font-bold pt-10">
          Master <span className='text-primary'>Japanese</span> Naturally - No PAYWALLS, No Barriers, <span className='text-primary'>Just Learning</span>
        </div>
        <div className="py-5 max-w-lg text-center text-gray-300">
          <h3>
            Immerse yourself in Japanese with AI-powered tools for shadowing,
            JLPT practice, kanji mnemonics, and real-time progress tracking.
            Everything you need—all free, forever.
          </h3>
          <p className="text-gray-400 py-2">
            For Learners, By Learners. No Paywalls. Just Pure Learning.
          </p>
        </div>
      </motion.div>

      {/* Dashboard Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center py-10"
      >
        <img
          src={dashboard}
          alt="Dashboard"
          className="max-w-5xl mx-auto rounded-xl py-2 border-2 border-gray-400 shadow-gray-300 shadow-lg"
        />
      </motion.div>
    </div>
  )
}

export default Home
