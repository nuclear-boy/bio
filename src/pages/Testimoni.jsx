import { motion } from 'framer-motion'
import { Quote, Star, CheckCircle, Users, Zap, Briefcase } from 'lucide-react'
import { cvConfig } from '../data/cvConfig'

const Testimoni = () => {
    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px' }}>
                    Peer <span className="text-gradient">Validation</span>
                </h1>
                <p className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>TRUST_INDEX: 99.8% | VERIFIED_COLLABORATIONS: {cvConfig.testimonials.length}+</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                {cvConfig.testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '40px', position: 'relative' }}
                    >
                        <Quote
                            size={60}
                            style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.05, color: 'var(--primary)' }}
                        />

                        <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                            {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="var(--primary)" color="var(--primary)" />)}
                        </div>

                        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '32px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                            "{t.content}"
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                {t.image && (
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--primary)' }}
                                    />
                                )}
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{t.name}</h4>
                                    <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{t.role}</div>
                                </div>
                            </div>
                            <div className="mono" style={{ fontSize: '0.65rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)' }}>
                                <CheckCircle size={12} /> {t.impact.toUpperCase()}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Trust Signifiers */}
            <section style={{ marginTop: '100px', textAlign: 'center' }}>
                <p className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.7rem', marginBottom: '40px', letterSpacing: '0.3em' }}>RECOGNIZED_BY_INDUSTRY_LEADERS</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', opacity: 0.3, filter: 'grayscale(1) invert(1)' }}>
                    {cvConfig.trustLogos.map((logo, i) => (
                        <img key={i} className="h-8 md:h-10" src={logo} style={{ height: '40px' }} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Testimoni

