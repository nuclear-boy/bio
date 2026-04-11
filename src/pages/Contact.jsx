import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Terminal, Code, Cpu, Instagram, Github, Linkedin } from 'lucide-react'
import { cvConfig } from '../data/cvConfig'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoUrl = `mailto:${cvConfig.profile.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
        window.location.href = mailtoUrl
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            <header style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px' }}>
                    Initialize <span className="text-gradient">Uplink</span>
                </h1>
                <p className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>CHANNEL: SECURE_SHELL | PROTOCOL: TCP/IP</p>
            </header>

            <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px' }}>
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

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>IDENTIFIER_NAME</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="e.g. Dr. John Doe"
                                    required
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="subject@institution.com"
                                    required
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
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
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
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                placeholder="Describe the nature of your request..."
                                required
                                style={{
                                    background: 'rgba(0,0,0,0.02)',
                                    border: '1px solid var(--border)',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                    resize: 'none'
                                }}
                            />
                        </div>

                        <button type="submit" className="glow-btn" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
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
                            <a href={cvConfig.social.github} target="_blank" rel="noopener noreferrer" className="glass-btn-circle"><Github size={20} /></a>
                            <a href={cvConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="glass-btn-circle"><Linkedin size={20} /></a>
                            <a href={cvConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="glass-btn-circle"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
