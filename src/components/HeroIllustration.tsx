'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Cursor-tracking Spotlight */}
      <CursorSpotlight 
        className="z-10"
        size={280}
      />
      
      {/* 3D Spline Robot */}
      <div className="relative z-20 w-full h-full">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default HeroIllustration;