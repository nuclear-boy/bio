import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Award, GraduationCap, Code, Globe, User } from 'lucide-react'
import { cvConfig } from '../data/cvConfig'

const Biodata = () => {
    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            {/* Header */}
            <section style={{ textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px' }}
                >
                    Individual <span className="text-gradient">Profile</span>
                </motion.h1>
                <p className="mono" style={{ color: 'var(--text-dim)' }}>ID_UID: {cvConfig.profile.id} | SUBJECT: {cvConfig.profile.name.toUpperCase().replace(' ', '_')}</p>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }}>
                {/* Left: Bio & Skills */}
                <aside>
                    <div className="glass-card" style={{ padding: '40px', marginBottom: '40px' }}>
                        <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <User size={20} color="var(--primary)" /> Biographical Data
                        </h3>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '32px' }}>
                            {cvConfig.profile.bioLong}
                        </p>

                        <h4 className="mono" style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '20px', letterSpacing: '0.2em' }}>SKILL_MATRIX</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {cvConfig.skills.map((skill, i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{skill.name}</span>
                                        <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>{skill.level}%</span>
                                    </div>
                                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, delay: i * 0.1 }}
                                            style={{ height: '100%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '30px' }}>
                        <h4 className="mono" style={{ fontSize: '0.7rem', color: 'var(--secondary)', marginBottom: '20px', letterSpacing: '0.2em' }}>EDUCATION_CREDENTIALS</h4>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                            <GraduationCap style={{ marginTop: '4px' }} color="var(--secondary)" />
                            <div>
                                <div style={{ fontWeight: 700 }}>{cvConfig.education.degree}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{cvConfig.education.institution}</div>
                                <div className="mono" style={{ fontSize: '0.7rem', marginTop: '4px' }}>{cvConfig.education.period}</div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right: Experience Timeline */}
                <main>
                    <h3 style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Briefcase size={20} color="var(--primary)" /> Operational History
                    </h3>
                    <div style={{ position: 'relative', paddingLeft: '40px' }}>
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            top: '10px',
                            bottom: '0',
                            width: '1px',
                            background: 'linear-gradient(to bottom, var(--primary), transparent)'
                        }}></div>

                        {cvConfig.experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="glass-card"
                                style={{ padding: '30px', marginBottom: '30px', position: 'relative' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-46px',
                                    top: '35px',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-dark)',
                                    border: '2px solid var(--primary)',
                                    boxShadow: '0 0 10px var(--primary)'
                                }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{exp.role}</h4>
                                        <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</div>
                                    </div>
                                    <div className="mono" style={{ fontSize: '0.75rem', padding: '4px 12px', background: 'rgba(0,242,255,0.1)', borderRadius: '20px', color: 'var(--primary)' }}>
                                        {exp.year}
                                    </div>
                                </div>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Biodata
