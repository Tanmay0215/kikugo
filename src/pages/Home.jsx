import React from 'react'
import Navbar from '../components/Navbar'
import dashboard from '../assets/dashboard.png'
import Footer from '../components/Footer'
import Features from './Features'
import { motion } from 'motion/react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center"
      >
        <div className="max-w-md text-4xl uppercase md:text-5xl md:text-center text-gray-300 font-bold pt-10">
          The Easiest Way To Learn <br />
          <span className="text-primary text-7xl">Japanese</span>
        </div>
        <div className="py-5 max-w-lg text-center text-gray-400">
          Kikugo is a language learning app that helps you learn Japanese in a
          fun and interactive way.
        </div>
      </motion.div>

      {/* Dashboard */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center py-10"
      >
        <h2 className="text-4xl font-bold text-center mb-5">
          Interactive Dashboard
        </h2>
        <div className="max-w-5xl mx-auto rounded-xl py-2 border-2 border-gray-400 shadow-gray-300 shadow-lg">
          <img src={dashboard} alt="Dashboard" />
        </div>
      </motion.div>
      <Features />
      <Footer />
    </div>
  )
}

export default Home
