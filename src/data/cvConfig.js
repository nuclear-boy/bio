/**
 * ARCHIVE_ID: 0xDATA_CORE
 * SUBJECT: CV_CONTENT_CONFIGURATION
 * VERSION: 1.0.0
 * 
 * Sila ubah data di bawah untuk mengemas kini kandungan CV anda.
 * Semua teks, pautan, dan URL imej dikumpulkan di sini untuk memudahkan pengurusannya.
 */

export const cvConfig = {
    // --- BASIC INFORMATION ---
    profile: {
        name: "Fiqkri Putra Riswanda",
        id: "0x82A4B1",
        role: "leader, Physicist, and Data Scientist",
        available: true,
        yearsExp: "1+",
        email: "h1021221019@student.untan.ac.id",
        phone: "+6285652239017",
        location: "Pontianak, West Borneo",
        bioShort: "I am a Undergraduate Physics Student specializing in Physics Instrumentation and Computational Physics for Simulation.",
        bioLong: "Specialized in the convergence of human cognition and digital systems. My work focuses on creating seamless bridges between complex backend data and intuitive human interaction.",
        profileImage: "/src/dokumentasi/foto1.webp",
    },

    // --- SOCIAL LINKS ---
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        terminal: "#", // Link to custom terminal/console if any
    },

    // --- LANDING PAGE STATS ---
    stats: [
        { label: 'LEADERSHIP', value: '10', color: 'var(--primary)', icon: 'Rocket' },
        { label: 'PHYSICS INSTRUMENTATION', value: '2', color: 'var(--secondary)', icon: 'Globe' },
        { label: 'DATA SCIENCE', value: '2', color: '#ff0080', icon: 'Award' }
    ],

    // --- CORE FRAMEWORKS / EXPERTISE ---
    expertise: [
        { title: 'Neural Systems', desc: 'Developing intuitive interfaces that adapt to user cognitive patterns.', icon: 'Cpu' },
        { title: 'Physics Instrumentation', desc: 'Architecting edge-heavy applications with zero-latency synchronization.', icon: 'Globe' },
        { title: 'Machine Learning', desc: 'Transforming telemetry data into actionable executive insights.', icon: 'Target' }
    ],

    // --- BIODATA / EXPERIENCE ---
    experiences: [
        {
            year: '2025 — PRESENT',
            role: 'Research and Digitalization Architecture',
            company: 'Pelajar Islam Indonesia',
            desc: 'Orchestrating large-scale distributed systems and neural interface protocols for Fortune 500 clients.'
        },
        {
            year: '2024 - 2025',
            role: 'Chairman',
            company: 'Pelajar Islam Indonesia Tanjungpura University',
            desc: 'Pioneered adaptive UI architectures using real-time telemetry and predictive modeling.'
        },
        {
            year: '2024 — 2025',
            role: 'Chairman',
            company: 'Lembaga Dakwah Fakultas FMIPA Tanjungpura University',
            desc: 'Developed high-security command interfaces for critical infrastructure management.'
        }
    ],

    // --- SKILLS MATRIX (%) ---
    skills: [
        { name: 'Leadership', level: 81 },
        { name: 'Data Science', level: 70 },
        { name: 'Machine Leaning', level: 50 },
        { name: 'Python', level: 90 }
    ],

    // --- EDUCATION ---
    education: {
        degree: "Undergraduate Physics Student",
        institution: "Tanjungpura University",
        period: "2022 - Present",
        desc: "Specialized in Physics-Instrumentation dan Computational Physics for Simulation."
    },

    // --- PORTFOLIO PROJECTS ---
    projects: [
        {
            title: 'Theo-Smart',
            category: 'Instrumentation',
            desc: 'Inspired by the conventional theodolite used for measuring building heights, this device operates by converting ADC values from a potentiometer into angular measurements.',
            tech: ['Microcontroller', 'C++'],
            image: '/src/dokumentasi/theo.webp',
            links: { github: 'https://github.com/nuclear-boy/mini-theodolite-arduino-with-potensiometer' }
        },
        {
            title: 'Website Pelajar Islam Indonesia',
            category: 'Website',
            desc: 'Developed a website for Pelajar Islam Indonesia using React.JS',
            tech: ['HTML', 'CSS', 'React.JS'],
            image: '/src/dokumentasi/web.webp',
            links: { live: 'https://nuclear-boy.github.io/pwpii-kalbar' }
        },
    ],

    // --- TESTIMONIALS ---
    testimonials: [
        {
            name: 'Dr. Alex Rivers',
            role: 'Director of AI, Cyberdyne',
            content: 'Alex’s approach to structural logic is unparalleled. The neural architectures deployed for our systems reduced latency by 45%.',
            impact: 'High Efficiency',
            rating: 5,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHTAAupsYyqKvx3bSwUcNDHsEKTn0_VAUHtkpwahD8y_HvFTPmr27YX6av1FgQi8ZPf5LNqBTIpv4mAsaaLDuzj7u5FYkgLgSbfiOr1nMQ4H-7cTw61RNUhljmZ6UKXQJp9ngTTXBR4z4gOGJEACCzPBW0clYAe_SLGIP1HzpPGTezKfmRYV1NgywBS99CIvRWOdeW7_PWSQHJHdDsgbBYj1jJSMPqIi7qAKuekcdr6jGogWUAjkADR_SwB0WNHz5s-1gV56Vygwo'
        },
        {
            name: 'Samantha Lowe',
            role: 'Product Lead, Quantuverse',
            content: 'Transformative. The systems designed by Alex didn’t just meet requirements; they redefined how we visualize complex data streams.',
            impact: 'Market Breakthrough',
            rating: 5,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5oXRDNxkPGgYe3F9oQmXE86pcsMck1wlpPpaiuxarz0JFRLJVDc5ta4Fz1hjKvweHUpPP9OYdDab1iU0pRoUkzEAGi9pEMwBXA56wy7ULF5GVvsz3YWWUUrkfsWEOQZoSy5iOnjcmr-2feBDv8VsfGbm3hfYR_e6BnTMqWI4udxEzAvr7zPsZwZKP70cLTEk8hW-3CL88VjvD6kyaLs1dFZEqYWNZKiovOBClG2voS11qnebDT4THraLIZsi7jJRRpqs94sPegsE'
        },
        {
            name: 'David Chen',
            role: 'Chief Architect, Innovate',
            content: 'A rare combination of aesthetic precision and technical rigor. The resulting products are as beautiful as they are robust.',
            impact: 'Design Excellence',
            rating: 5,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH6tHnO-mDSskBh4IIX_tLx4cO0B_GGySWjeIG9NtZ_2Slj6EI91oEONbjlIIaA8RLm2DQly5FLIGxzxDbVioqkkjAdKgUZkYZ0kO5G4V83M3nIlkctkG6TdO2_yk80kgtuhVcGBfqIPS2ZNc8JYTv-OIexxNbkB4F3ZNYf8-QLGUR7G-YvSjknCfl0uJfAfIpZ_rIaV8CxvVX4tArxeDeQxbNixILHl1utbEhc-koZ6dSsgPENoIKOYRrAuLfCwYkgX-rmHxsKQE'
        }
    ],

    // --- TRUST BAR LOGOS ---
    trustLogos: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvPbe-dGH9eVhcPhXAgS0jkldxqI1XHZRmPoAKMOGuhlFfMVyiAP3GnM30-p2hwXNeUnT5bkpl62AS_t6K265teU8c8CoZrbel-BEoDdCd-juguMht33KgTN4It5Lpg0STZAMeYLJa2XtT01JRNgJ0W77EPm7iEQNssoPyj4zr2-jRzueEdsStaKR0SHm3wv0f1qETwHGkkp1kXffns4QjQ2TwNfOWc_Mu2rbyJkzH-qjr4Jjx9KEz_oM-48Riorf_P_Ewk1IPgg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA_mXuBd-HMIGE6NlfO0Fu3Q6kLGktJboUq_oX3tI7GfKr6myRoxO5myBio9Kex2_xyOYRgwawP9rShUpicKGAX7SDFlDqCgiARVAJqfVK0DnYImDVEJciSAE4xH_KNodkDnGjDt-mrJHTkMRGqzW-04u94XlDYpVo8EqHoSOUPTw_uM8WYL6KZWv9qRoupz1tRa9oExXAons347vn1ucZrmXrd6zefiZimWM43_rpIcTy2zMfFOxBmURCiIowg7D0W-bEft81piIE",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWPL5OGcUpVRv8-anC84aaxh7z41Y0afIaW9RGQXs9e4l8qyPjojgrrzxyuN9OF4G8uF5hwyA450k7j1Y5T2BI7UDL3XzFZw0p-wfXSghBqWZRz_nZWsSKGTwpmErinmAjUj89H8BUVr_EnsTz0P-L059YVU4fVoGkMXlHgih56eX8W_sYu7SsGaJAqWkx2rMKlBtoX3fdjIv6cPCgzhovlXYP6tx4Rh34abvH-h_TN8fan3-0yiWHMm5L24B_eYsqkxiWpmynQvw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2j1S2YtO7MCGYygRvHBfj8McZ9CX1KkHzWChNKw_jM4uR5LC6L3OR7AsZV_nu4ZpVwvU0h0I0_8zkul1uAYB4SPeEPOKHfOv0df9UjxHAn4qRFCRMxqASTvH2x0Y3_sUS59hQlksESAUA4Hp6O5R725x2xtu6zWId_EabUyugMyTHun_PRm1Kk-ug-drEOr1bdWqjvgSzcPMMMRHng1DqlavxeXgxlPUxLyxMrUuv_Nw7pLAsUzqSwuaXCKqLsGva4igAgqPT8Fc"
    ]
};
