'use client'

import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

// Robot skeleton placeholder
const RobotSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-lg"></div>
    
    {/* Robot skeleton structure */}
    <motion.div 
      className="relative z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Robot head */}
      <motion.div 
        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-muted to-muted/50 rounded-lg border border-border/50"
        animate={{ 
          boxShadow: [
            "0 0 10px rgba(59, 130, 246, 0.3)",
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 10px rgba(59, 130, 246, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Eyes */}
        <div className="flex justify-center items-center h-full space-x-3">
          <motion.div 
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div 
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>
      </motion.div>
      
      {/* Robot body */}
      <motion.div 
        className="w-12 h-20 mx-auto bg-gradient-to-b from-muted to-muted/50 rounded-lg border border-border/50"
        animate={{ 
          y: [-2, 2, -2],
          boxShadow: [
            "0 0 15px rgba(59, 130, 246, 0.2)",
            "0 0 25px rgba(59, 130, 246, 0.4)",
            "0 0 15px rgba(59, 130, 246, 0.2)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Body details */}
        <div className="pt-3 space-y-2">
          <div className="w-6 h-1 bg-primary/60 rounded mx-auto"></div>
          <div className="w-4 h-1 bg-primary/40 rounded mx-auto"></div>
          <div className="w-5 h-1 bg-primary/50 rounded mx-auto"></div>
        </div>
      </motion.div>
      
      {/* Robot arms */}
      <div className="flex justify-between items-center w-20 mx-auto -mt-12">
        <motion.div 
          className="w-3 h-8 bg-muted/70 rounded border border-border/30"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="w-3 h-8 bg-muted/70 rounded border border-border/30"
          animate={{ rotate: [5, -5, 5] }}
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
        Initializing AI Assistant...
      </div>
      <motion.div 
        className="w-24 h-0.5 bg-primary/30 rounded-full mt-2"
        animate={{ 
          scaleX: [0, 1, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
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