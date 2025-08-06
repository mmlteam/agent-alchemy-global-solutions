import { SplineScene } from '@/components/ui/splite'

export function HeroIllustration() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full scale-110 md:scale-125 lg:scale-150 object-cover"
      />
    </div>
  )
}