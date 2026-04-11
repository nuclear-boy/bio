import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { cvConfig } from '../data/cvConfig'

const LandingPage = () => {
    // Helper to render icon by name from config
    const IconRenderer = ({ name, size = 24, ...props }) => {
        const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
        return <Icon size={size} {...props} />;
    };

    return (
        <div className="container">
            {/* Hero Section */}
            <section style={{ padding: '40px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="hero-grid" style={{ width: '100%' }}>

                    {/* Text Column - Now on the left */}
                    <div className="hero-text-col">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="status-tag mono">
                                &gt; STATUS: {cvConfig.profile.available ? 'AVAILABLE_FOR_ORCHESTRATION_' : 'OFFLINE_BUSY_'}
                            </div>
                            <h1 className="hero-title">
                                Synthesizing <span className="text-gradient">Intelligence</span> Into Digital Systems.
                            </h1>
                            <p className="hero-description">
                                 I am <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{cvConfig.profile.name}</span>, {cvConfig.profile.bioShort}
                             </p>

                             <div className="hero-actions">
                                 <Link to="/contact" className="glow-btn hero-btn main-btn">
                                     Initialize Project <LucideIcons.ArrowRight size={18} />
                                 </Link>
                                 <a
                                     href={cvConfig.profile.cvPath}
                                     download="CV_Fiqkri_Putra_Riswanda.pdf"
                                     className="hero-btn alt-btn"
                                 >
                                     <LucideIcons.Download size={18} /> Download CV
                                 </a>
                             </div>
                        </motion.div>
                    </div>

                    {/* Image Column - Now on the right */}
                    <div className="hero-image-col">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="glass-card shadow-glow profile-frame"
                        >
                            <img
                                src={cvConfig.profile.profileImage}
                                alt={cvConfig.profile.name}
                                className="profile-img"
                            />
                            <div className="scanline"></div>

                            {/* Decorative Badge */}
                            <div className="glass-card shadow-glow exp-badge">
                                <div className="exp-value">{cvConfig.profile.yearsExp}</div>
                                <div className="mono exp-label">YEARS_EXP</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Stats Section */}
            <section>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {cvConfig.stats.map((stat, i) => {
                        const displayValue = stat.label === 'DATA PROJECTS' 
                            ? (cvConfig.projects.length < 10 ? `0${cvConfig.projects.length}` : cvConfig.projects.length)
                            : stat.value;
                            
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="glass-card"
                                style={{ padding: '40px', textAlign: 'center' }}
                            >
                                <div style={{ color: stat.color, marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                    <IconRenderer name={stat.icon} size={24} />
                                </div>
                                <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.7rem', marginBottom: '8px' }}>{stat.label}</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{displayValue}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Expertise */}
            <section>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Core <span className="text-gradient">Frameworks</span></h2>
                    <p style={{ color: 'var(--text-dim)' }}>Multidisciplinary approach to problem solving.</p>
                </div>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {cvConfig.expertise.map((item, i) => (
                        <div key={i} className="glass-card" style={{ padding: '30px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>
                                <IconRenderer name={item.icon} size={24} />
                            </div>
                            <h3 style={{ marginBottom: '12px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Telemetry Stream */}
            <div className="mono" style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                fontSize: '0.6rem',
                color: 'rgba(0,242,255,0.3)',
                pointerEvents: 'none',
                zIndex: 100
            }}>
                <div>SYSTEM_UPTIME: {Math.floor(Date.now() / 1000) % 100000}s</div>
                <div>LATENCY: 12ms</div>
                <div>NEURAL_SYNC: ACTIVE</div>
            </div>
        </div>
    )
}

export default LandingPage
