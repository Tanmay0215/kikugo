import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-[Manrope]">
      <Navbar />
      <Home />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
