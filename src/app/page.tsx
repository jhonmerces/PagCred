import { CTASection } from './(main)/_components/landing/cta-section'
import FAQ from './(main)/_components/landing/FAQ'
import { Features } from './(main)/_components/landing/features'
import { Footer } from './(main)/_components/landing/footer'
import Header from './(main)/_components/landing/header'
import HeroSection from './(main)/_components/landing/hero-section'
import { OrbitingCirclesDemo } from './(main)/_components/landing/main-orbiting-circles'
import { MarqueeDemo } from './(main)/_components/landing/marquee'
import { PricingPlans } from './(main)/_components/landing/pricing-plans'
import RewardSystem from './(main)/_components/landing/RewardSystem'
import { SupportSection } from './(main)/_components/landing/suport'
import SupportButton from './(main)/_components/landing/support-button'
import Taxes from './(main)/_components/landing/taxes'

export default function Home() {
  return (
    <main className='bg-white'>
      <Header />
      <HeroSection />
      <MarqueeDemo />
      <Features />
      <CTASection />
      <OrbitingCirclesDemo />
      <SupportSection />
      <Taxes />
      {/* <PricingPlans /> */}
      {/* <RewardSystem />*/}
      {/* <FAQ /> */}
      {/* <SupportButton /> */}
      <Footer />
    </main>
  )
}