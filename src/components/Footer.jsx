import { Github, Linkedin, Twitter } from 'lucide-react'
import { cvConfig } from '../data/cvConfig'

const Footer = () => (
    <footer style={{ padding: '60px 0', borderTop: '1px solid var(--border)', marginTop: '80px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h3 className="text-gradient" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{cvConfig.profile.name}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>© 2026 Technokrat Systems. Optimized for Intellectual Impact.</p>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <a href={cvConfig.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                <a href={cvConfig.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                <a href={cvConfig.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            </div>
        </div>
    </footer>
)

export default Footer
