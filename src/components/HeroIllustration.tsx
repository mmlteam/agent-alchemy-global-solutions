import { SplineScene } from '@/components/ui/splite'

export function HeroIllustration() {
  console.log('HeroIllustration rendering');
  return (
    <div className="absolute inset-0 w-full h-full" style={{ background: 'rgba(255,0,0,0.1)' }}>
      <div className="w-full h-full" style={{ background: 'rgba(0,255,0,0.1)' }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}