import { SplineScene } from '@/components/ui/splite'

export function HeroIllustration() {
  return (
    <div className="absolute top-[50px] left-0 right-0 bottom-0 w-full h-full">
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full object-contain"
      />
    </div>
  )
}