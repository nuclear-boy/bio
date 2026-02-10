import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Share2, Terminal, Code, Cpu } from 'lucide-react'
import { cvConfig } from '../data/cvConfig'

const Contact = () => {
    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            <header style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px' }}>
                    Initialize <span className="text-gradient">Uplink</span>
                </h1>
                <p className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>CHANNEL: SECURE_SHELL | PROTOCOL: TCP/IP</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px' }}>
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass-card"
                    style={{ padding: '40px' }}
                >
                    <div className="mono" style={{ color: 'var(--primary)', fontSize: '0.7rem', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Terminal size={14} /> &gt; START_COMMUNICATION_SEQUENCE
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>IDENTIFIER_NAME</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Dr. John Doe"
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border)',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>RETURN_PATH_EMAIL</label>
                                <input
                                    type="email"
                                    placeholder="subject@institution.com"
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border)',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>SUBJECT_HEADER</label>
                            <input
                                type="text"
                                placeholder="Collaboration Inquiry / Technical Audit"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--border)',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>TRANSMISSION_BODY</label>
                            <textarea
                                rows="6"
                                placeholder="Describe the nature of your request..."
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--border)',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none',
                                    resize: 'none'
                                }}
                            />
                        </div>

                        <button className="glow-btn" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            SEND TRANSMISSION <Send size={18} />
                        </button>
                    </form>
                </motion.div>

                {/* Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div className="glass-card" style={{ padding: '30px' }}>
                        <h4 className="mono" style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '24px' }}>DIRECT_CHANNELS</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ padding: '12px', background: 'rgba(0,242,255,0.05)', borderRadius: '12px', color: 'var(--primary)' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>PRIMARY_EMAIL</div>
                                    <div style={{ fontWeight: 600 }}>{cvConfig.profile.email}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ padding: '12px', background: 'rgba(0,242,255,0.05)', borderRadius: '12px', color: 'var(--primary)' }}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>STATION_VOICE</div>
                                    <div style={{ fontWeight: 600 }}>{cvConfig.profile.phone}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ padding: '12px', background: 'rgba(0,242,255,0.05)', borderRadius: '12px', color: 'var(--primary)' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>GEOSPATIAL_COORD</div>
                                    <div style={{ fontWeight: 600 }}>{cvConfig.profile.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '30px' }}>
                        <h4 className="mono" style={{ fontSize: '0.7rem', color: 'var(--secondary)', marginBottom: '24px' }}>SYNCHRONIZE_ACCOUNTS</h4>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href={cvConfig.social.github} className="glass-btn-circle"><Terminal size={20} /></a>
                            <a href={cvConfig.social.linkedin} className="glass-btn-circle"><Code size={20} /></a>
                            <a href={cvConfig.social.twitter} className="glass-btn-circle"><Cpu size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
