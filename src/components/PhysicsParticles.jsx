import { useEffect, useRef } from 'react';

const PhysicsParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 12 : 25;
        const equations = [
            "iħ∂Ψ/∂t = ĤΨ",       // Schrodinger
            "E = mc²",            // Relativity
            "∇ ⋅ B = 0",          // Maxwell
            "F = ma",             // Newton
            "ρ(∂u/∂t + u⋅∇u) = -∇p + μ∇²u + f", // Navier-Stokes
            "S = k log W",        // Boltzmann
            "e^(iπ) + 1 = 0",     // Euler
            "R_μν - ½Rg_μν = 8πGT_μν", // Einstein Field Eq
            "iγ^μ∂_μψ - mψ = 0",  // Dirac Equation
            "ds² = -(1-2M/r)dt² + (1-2M/r)⁻¹dr² + r²dΩ²" // Schwarzschild Metric (simplified)
        ];

        const particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.text = equations[Math.floor(Math.random() * equations.length)];
                this.velocity = {
                    x: (Math.random() - 0.5) * 0.7, // Speed
                    y: (Math.random() - 0.5) * 0.7  // Speed
                };
                this.size = isMobile ? (Math.random() * 10 + 8) : (Math.random() * 14 + 10);
                this.opacity = isMobile ? (Math.random() * 0.15 + 0.05) : (Math.random() * 0.4 + 0.05);
            }

            update() {
                this.x += this.velocity.x;
                this.y += this.velocity.y;

                // Seamless wrapping
                if (this.x > canvas.width + 50) this.x = -50;
                if (this.x < -50) this.x = canvas.width + 50;
                if (this.y > canvas.height + 50) this.y = -50;
                if (this.y < -50) this.y = canvas.height + 50;
            }

            draw() {
                ctx.font = `${this.size}px 'JetBrains Mono', monospace`;
                ctx.fillStyle = `rgba(15, 23, 42, ${this.opacity})`; // slate-900 with opacity
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        const init = () => {
            resizeCanvas();
            particles.length = 0; // Clear existing
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            // Use clearRect to clear the canvas frame by frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', init); // Re-init on resize to redistribute
        init();
        animate();

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                pointerEvents: 'none',
                // Combined background: Radial gradients for "glow" + theme dark color
                background: `
                    radial-gradient(circle at 15% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 25%),
                    radial-gradient(circle at 85% 30%, rgba(14, 165, 233, 0.03) 0%, transparent 25%),
                    var(--bg-light)
                `
            }}
        />
    );
};

export default PhysicsParticles;
