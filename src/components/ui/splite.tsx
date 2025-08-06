'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  console.log('SplineScene rendering with scene:', scene);
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(0,0,255,0.1)' }}>
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-2 text-white">Loading Robot...</span>
      </div>
    }>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}