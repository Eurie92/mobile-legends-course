import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import GameMechanics from './pages/GameMechanics'
import HeroGuides from './pages/HeroGuides'
import Intermediate from './pages/Intermediate'
import Advanced from './pages/Advanced'
import ProResources from './pages/ProResources'
import Glossary from './pages/Glossary'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/game-mechanics" element={<GameMechanics />} />
          <Route path="/hero-guides" element={<HeroGuides />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/pro-resources" element={<ProResources />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App
