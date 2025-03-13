import React from 'react'

const Contact = () => {
  return (
    <div className="w-full text-center py-10">
      <h3 className="text-xl text-primary font-semibold mb-1">
        Help Us Improve
      </h3>
      <p className="text-gray-400 mb-2 text-lg">
        Anything you want can be coded!{' '}
      </p>
      <ul className="text-lg text-gray-300">
        <li>🚀 Help Us Improve - Your feedback makes a difference!</li>
        <li>💡 Request Features - Have an idea? Let’s build it together.</li>
        <li>🐞 Report Bugs - Found a glitch? We’ll fix it fast.</li>
        <li>✏️ Correct Mistakes - Improve accuracy for everyone.</li>
        <li>🤝 Share Tips & Tricks - Learn and grow with fellow learners.</li>
        <li>
          🎯 Early Access & Testing - Try new features before anyone else!
        </li>
      </ul>
      <div>
        <button>Join Discord</button>
      </div>
    </div>
  )
}

export default Contact
