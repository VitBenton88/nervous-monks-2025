import ParticlesBg from 'particles-bg'
import React from 'react';

interface BackgroundProps {
    customConfig?: object;
    showParticles?: boolean;
}

interface Ctx {
    beginPath: () => void;
    closePath: () => void;
    fill: () => void;
    fillStyle: string;
    rect: (x: number, y: number, radius: number, secondRadius: number) => void;
}

interface Particle {
    color: string;
    p: {
        x: number,
        y: number
    };
    radius: number;
}


const Particles: React.FC<BackgroundProps> = (): React.ReactNode => {
    // The particle canvas is driven by JS, not CSS, so a media query alone
    // can't stop it — skip rendering it for anyone who's told their OS they
    // don't want motion. The theme keeps its glow/shadow styling either way.
    const prefersReducedMotion = typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return null;

    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        g: 0,
        scale: [.1, 0.4],
        position: 'all',
        color: ['#4d4dff'],
        cross: 'dead',
        random: 15
    }

    if (Math.random() > 0.85) {
        config = Object.assign(config, {
            onParticleUpdate: (ctx: Ctx, particle: Particle) => {
                ctx.beginPath()
                ctx.rect(
                    particle.p.x,
                    particle.p.y,
                    particle.radius * 2,
                    particle.radius * 2
                )
                ctx.fillStyle = particle.color
                ctx.fill()
                ctx.closePath()
            }
        })
    }

    return (<ParticlesBg type='custom' config={config} bg />)
}

export default Particles;