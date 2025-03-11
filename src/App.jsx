import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-[Manrope]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
