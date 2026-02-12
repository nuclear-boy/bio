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
            <section style={{ display: 'flex', alignItems: 'center', gap: '60px', minHeight: '80vh' }}>
                <div style={{ flex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mono" style={{ color: 'var(--primary)', marginBottom: '16px', fontSize: '0.9rem' }}>
                            &gt; STATUS: {cvConfig.profile.available ? 'AVAILABLE_FOR_ORCHESTRATION_' : 'OFFLINE_BUSY_'}
                        </div>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                            Synthesizing <span className="text-gradient">Intelligence</span> Into Digital Systems.
                        </h1>
                        <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px' }}>
                            I am <span style={{ color: '#fff', fontWeight: 600 }}>{cvConfig.profile.name}</span>, {cvConfig.profile.bioShort}
                        </p>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button className="glow-btn" style={{ padding: '16px 32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                Initialize Project <LucideIcons.ArrowRight size={18} />
                            </button>
                            <a
                                href={cvConfig.profile.cvPath}
                                download="CV_Fiqkri_Putra_Riswanda.pdf"
                                className="glass-card"
                                style={{ padding: '16px 32px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                            >
                                <LucideIcons.Download size={18} /> Fetch CV.pdf
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div style={{ flex: 1, position: 'relative' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="glass-card"
                        style={{
                            width: '100%',
                            aspectRatio: '1',
                            overflow: 'hidden',
                            borderRadius: '24px',
                            border: '1px solid rgba(0, 242, 255, 0.2)'
                        }}
                    >
                        <img
                            src={cvConfig.profile.profileImage}
                            alt={cvConfig.profile.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.5) contrast(1.1)' }}
                        />
                        {/* Overlay Grid Effect */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,242,255,0.05) 50%)',
                            backgroundSize: '100% 4px',
                            pointerEvents: 'none'
                        }}></div>
                    </motion.div>
                    {/* Decorative Floaties */}
                    <div className="glass-card" style={{ position: 'absolute', bottom: '-20px', right: '-20px', padding: '20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{cvConfig.profile.yearsExp}</div>
                        <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-dim)' }}>YEARS_EXP</div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {cvConfig.stats.map((stat, i) => (
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
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{stat.value}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Expertise */}
            <section>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Core <span className="text-gradient">Frameworks</span></h2>
                    <p style={{ color: 'var(--text-dim)' }}>Multidisciplinary approach to problem solving.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
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
