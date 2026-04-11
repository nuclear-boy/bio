import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Search, Filter, Code } from 'lucide-react'
import { cvConfig } from '../data/cvConfig'

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(cvConfig.projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? cvConfig.projects
        : cvConfig.projects.filter(p => p.category === filter);

    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            <header style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px' }}>
                    Project <span className="text-gradient">Gallery</span>
                </h1>
                <p className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>STATUS: FETCHING_ASSETS... DONE | ARCHIVE_COUNT: {cvConfig.projects.length}</p>
            </header>

            {/* Filter Bar */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className="mono"
                        style={{
                            padding: '10px 20px',
                            background: filter === cat ? 'var(--primary)' : 'rgba(0,0,0,0.03)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            color: filter === cat ? 'white' : 'var(--text-main)',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', gap: '30px' }}
            >
                <AnimatePresence>
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="glass-card"
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="project-img"
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'rgba(0,0,0,0.7)',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.65rem'
                                }} className="mono">
                                    {project.category}
                                </div>
                            </div>

                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.6 }}>
                                    {project.desc}
                                </p>

                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                                    {project.tech.map(t => (
                                        <span key={t} className="mono" style={{ fontSize: '0.65rem', padding: '4px 10px', background: 'rgba(0,0,0,0.03)', borderRadius: '4px', border: '1px solid var(--border)' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <a href={project.links.github} className="mono" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)' }}>
                                        <Github size={14} /> SOURCE
                                    </a>
                                    <a href={project.links.live} className="mono" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)' }}>
                                        <ExternalLink size={14} /> LIVE_DEMO
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Portfolio
