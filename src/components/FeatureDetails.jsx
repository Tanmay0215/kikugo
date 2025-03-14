import kanji from '../assets/JoyoKanji.png'
import { motion } from 'motion/react'

const FeatureDetails = ({ feature }) => {
  if (feature.id % 2 == 0) {
    return (
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-5xl flex flex-col md:flex-row items-center justify-center py-10 gap-10"
      >
        <div className="max-w-md">
          <p className="text-3xl font-bold text-primary mb-2">{feature.title}</p>
          <p className="text-gray-400">{feature.description}</p>
        </div>
        <img src={kanji} alt="Kanji" className="md:w-2/5 w-4/5 -skew-x-6" />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="max-w-5xl flex flex-col md:flex-row items-center justify-center mt-6 gap-10"
    >
      <img src={kanji} alt="Kanji" className="md:w-2/5 w-4/5 skew-x-6" />
      <div className="max-w-md">
        <p className="text-3xl font-bold text-primary mb-2">{feature.title}</p>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureDetails
