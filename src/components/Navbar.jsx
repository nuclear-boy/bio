import { Link, useLocation } from 'react-router-dom'
import { Terminal, User, Briefcase, Star } from 'lucide-react'

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="glass-card" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'max-content',
            padding: '8px 24px',
            zIndex: 1000,
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
        }}>
            <Link to="/" className={`mono ${location.pathname === '/' ? 'text-gradient font-bold' : ''}`} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={16} /> HOME
            </Link>
            <Link to="/about" className={`mono ${location.pathname === '/about' ? 'text-gradient font-bold' : ''}`} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={16} /> ABOUT
            </Link>
            <Link to="/portfolio" className={`mono ${location.pathname === '/portfolio' ? 'text-gradient font-bold' : ''}`} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={16} /> PROJECTS
            </Link>
            <Link to="/testimonials" className={`mono ${location.pathname === '/testimonials' ? 'text-gradient font-bold' : ''}`} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={16} /> REVIEWS
            </Link>
            <Link to="/contact" className="glow-btn" style={{ padding: '6px 16px', fontSize: '0.7rem' }}>
                PING
            </Link>
        </nav>
    )
}

export default Navbar
