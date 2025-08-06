import { SplineScene } from '@/components/ui/splite'
import { SpotlightCursor } from '@/components/ui/spotlight-cursor'

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full">
      <SpotlightCursor size={300} />
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full object-contain"
      />
    </div>
  )
}