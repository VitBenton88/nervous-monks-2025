import ParticlesBg from 'particles-bg'
import React from 'react';

interface BackgroundProps {
    customConfig?: object;
    showParticles?: boolean;
}

interface Ctx {
    beginPath: Function;
    closePath: Function;
    fill: Function;
    fillStyle: string;
    rect: Function;
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

    return (<ParticlesBg type='custom' config={config} bg={true} />)
}

export default Particles;