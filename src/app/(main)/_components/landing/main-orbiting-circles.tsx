import Image from 'next/image'
import OrbitingCircles from "@/components/magicui/orbiting-circles"

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#04ba4e] via-[#109144] to-[#109144]">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent from-white to-gray-100">
        Integrações
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[80px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image src="/tiktok.webp" alt="TikTok" width={80} height={80} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[80px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image src="/shopify.webp" alt="Shopify" width={80} height={80} />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[80px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Image src="/google-ads.webp" alt="Google Ads" width={80} height={80} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[80px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Image src="/taboola.webp" alt="Taboola" width={80} height={80} />
      </OrbitingCircles>
      
      {/* Additional Circle */}
      <OrbitingCircles
        className="size-[80px] border-none bg-transparent"
        radius={135}
        duration={25}
        delay={15}
      >
        <Image src="/ads-tik-tok.webp" alt="TikTok Ads" width={80} height={80} />
      </OrbitingCircles>
    </div>
  )
}