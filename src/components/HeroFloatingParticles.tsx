import { motion } from 'framer-motion';

const HeroFloatingParticles = () => {
  // Generate floating particles with natural movement
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2, // 2-5px
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 3, // 3-7s
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/60"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 3}px rgba(255, 255, 255, 0.8)`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-15, 15, -15],
            opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default HeroFloatingParticles;