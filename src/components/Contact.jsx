import { FaDiscord } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center">
      <h3 className="text-2xl text-primary font-semibold mb-1">
        Help Us Improve
      </h3>
      <p className="text-gray-400 mb-2 text-lg">
        Anything you want can be coded!
      </p>
      <div className="bg-gray-800 rounded-lg shadow-md p-6 mx-auto">
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
        <button className="bg-purple-700 rounded-full mt-4 py-2 px-5 flex gap-2 items-center mx-auto">
          <FaDiscord size={24} />
          <p className="font-semibold">Join Discord</p>
        </button>
      </div>
      <button className=''>Download for <span>
        </span>Windows</button>
      <p>Coming Soon for Mac, iOS & Android</p>
    </div>
  )
}

export default Contact
