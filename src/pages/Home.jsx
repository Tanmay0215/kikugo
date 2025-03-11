import React from 'react'
import Navbar from '../components/Navbar'
import Downloads from '../components/Downloads'
import dashboard from '../assets/dashboard.png'
import Footer from '../components/Footer'
import Features from './Features'
import kanji from '../assets/JoyoKanji.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="absolute z-10 h-100 blur-2xl bg-primary" />
        <div className="max-w-lg text-4xl md:text-6xl md:text-center text-white font-bold pt-10">
          The Easiest Way To Learn <br />
          <span className="text-primary">Japanese</span>
        </div>
        <div className="py-5 max-w-lg text-center text-gray-400">
          Kikugo is a language learning app that helps you learn Japanese in a
          fun and interactive way.
        </div>
        <button className="bg-white text-black rounded-full px-4 py-2">
          <a href="/kikugo.exe" download="kikugo.exe">
            Download Now
          </a>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-4xl font-bold text-center mb-5">Interactive Dashboard</h2>
        <div className="max-w-5xl mx-auto rounded-xl py-2 border-2 border-gray-400 shadow-gray-300 shadow-lg">
          <img src={dashboard} alt="Dashboard" />
        </div>
      </div>
      <Features />
      <div className="max-w-5xl mx-auto rounded-xl py-2 border-2 m-10 border-gray-400 shadow-gray-300 shadow-lg">
          <img src={kanji} alt="Kanji" />
        </div>
      <Downloads />
      <Footer />
    </div>
  )
}

export default Home
