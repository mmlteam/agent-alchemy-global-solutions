import { motion } from 'framer-motion';
import { useMemo } from 'react';

const HeroNeuralOverlay = () => {
  // Generate neural network nodes
  const nodes = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10, // 10-90% to avoid edges
      y: Math.random() * 50 + 15, // 15-65% from top
      size: Math.random() * 3 + 2, // 2-5px
      delay: Math.random() * 2,
      pulseDelay: Math.random() * 3,
    })), []
  );

  // Generate connections between nearby nodes
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) + 
          Math.pow(nodes[i].y - nodes[j].y, 2)
        );
        // Only connect nodes that are reasonably close
        if (distance < 40) {
          lines.push({
            id: `${i}-${j}`,
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            delay: Math.random() * 4,
          });
        }
      }
    }
    return lines;
  }, [nodes]);

  return (
    <div className="absolute top-0 left-0 right-0 h-[70%] pointer-events-none overflow-hidden z-5">
      <svg 
        className="w-full h-full absolute top-0 left-0" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Neural Network Connections */}
        {connections.map((connection) => (
          <motion.line
            key={connection.id}
            x1={`${connection.x1}%`}
            y1={`${connection.y1}%`}
            x2={`${connection.x2}%`}
            y2={`${connection.y2}%`}
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: connection.delay,
            }}
          />
        ))}

        {/* Secondary Connection Layer */}
        {connections.slice(0, 4).map((connection) => (
          <motion.line
            key={`secondary-${connection.id}`}
            x1={`${connection.x1}%`}
            y1={`${connection.y1}%`}
            x2={`${connection.x2}%`}
            y2={`${connection.y2}%`}
            stroke="hsl(var(--accent))"
            strokeWidth="0.3"
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: connection.delay + 1,
            }}
          />
        ))}

        {/* Neural Network Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Outer glow */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size + 2}
              fill="hsl(var(--primary))"
              fillOpacity="0.1"
              initial={{ scale: 0 }}
              animate={{
                scale: [0.8, 1.5, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.pulseDelay,
              }}
            />
            
            {/* Core node */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="hsl(var(--primary))"
              fillOpacity="0.7"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0.9, 1.1, 0.9],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />

            {/* Inner core */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 0.4}
              fill="white"
              fillOpacity="0.8"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay + 0.5,
              }}
            />
          </g>
        ))}

        {/* Data Flow Particles */}
        {connections.slice(0, 3).map((connection) => (
          <motion.circle
            key={`particle-${connection.id}`}
            r="1"
            fill="hsl(var(--accent))"
            fillOpacity="0.8"
            initial={{
              offsetDistance: "0%",
              scale: 0,
            }}
            animate={{
              offsetDistance: ["0%", "100%"],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: connection.delay + 2,
            }}
            style={{
              offsetPath: `path('M ${connection.x1} ${connection.y1} L ${connection.x2} ${connection.y2}')`,
            }}
          />
        ))}
      </svg>

      {/* Ambient Neural Glow */}
      <motion.div
        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeroNeuralOverlay;