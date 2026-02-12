import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PhysicsParticles from './components/PhysicsParticles'
import LandingPage from './pages/LandingPage'
import Biodata from './pages/Biodata'
import Portfolio from './pages/Portfolio'
import Testimoni from './pages/Testimoni'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

const App = () => {
    return (
        <Router>
            <PhysicsParticles />
            <Navbar />
            <main style={{ paddingTop: '100px' }}>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
                        <Route path="/about" element={<PageTransition><Biodata /></PageTransition>} />
                        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
                        <Route path="/testimonials" element={<PageTransition><Testimoni /></PageTransition>} />
                        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </Router>
    )
}

export default App
