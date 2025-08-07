'use client'

import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

// Robot skeleton placeholder
const RobotSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    {/* Robot skeleton structure */}
    <motion.div 
      className="relative z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Robot head - circular */}
      <motion.div 
        className="w-12 h-12 mx-auto mb-3 border-2 border-primary/60 rounded-full flex items-center justify-center"
        animate={{ 
          borderColor: [
            "hsl(var(--primary) / 0.6)",
            "hsl(var(--primary) / 0.9)",
            "hsl(var(--primary) / 0.6)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Eyes */}
        <div className="flex space-x-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>
      </motion.div>
      
      {/* Neck connection */}
      <div className="w-0.5 h-2 bg-primary/50 mx-auto"></div>
      
      {/* Robot body - circular */}
      <motion.div 
        className="w-16 h-16 mx-auto border-2 border-primary/50 rounded-full flex items-center justify-center"
        animate={{ 
          y: [-1, 1, -1],
          borderColor: [
            "hsl(var(--primary) / 0.5)",
            "hsl(var(--primary) / 0.8)",
            "hsl(var(--primary) / 0.5)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Body center dot */}
        <motion.div 
          className="w-2 h-2 bg-primary/70 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Robot arms - simple lines */}
      <div className="flex justify-between items-center w-24 mx-auto -mt-8">
        <motion.div 
          className="w-8 h-0.5 bg-primary/60"
          animate={{ 
            rotate: [-10, 10, -10],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="w-8 h-0.5 bg-primary/60"
          animate={{ 
            rotate: [10, -10, 10],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
    
    {/* Loading text */}
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="text-xs text-muted-foreground font-medium">
        Loading AI Assistant...
      </div>
    </motion.div>
  </div>
)

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  return (
    <Suspense fallback={<RobotSkeleton />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}