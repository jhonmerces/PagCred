"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function RewardSystem() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('#reward-system')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="reward-system" className="bg-gradient-to-br from-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/placas.webp"
              alt="Placas de Premiação Point"
              width={2800}
              height={2200}
              className="w-full h-auto rounded-2xl drop-shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] leading-tight">
              Celebre Suas<br />Conquistas
            </h2>
            <p className="text-xl text-[#2c3e50]">
              Na CredPago, seu sucesso é nossa prioridade. <span className='font-medium text-[#04ba4e]'>Acompanhamos</span> e <span className='font-medium text-[#04ba4e]'>reconhecemos</span> cada marco importante do seu crescimento.
            </p>
            <p className="text-lg text-[#2c3e50]">
              À medida que seu faturamento cresce, você desbloqueia novas placas de reconhecimento, simbolizando seu progresso e sucesso contínuo.
            </p>
            <div className="hidden lg:block">
              <CTAButton />
            </div>
          </motion.div>
        </div>
        <div className="mt-8 lg:hidden">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}

function CTAButton() {
  return (
    <motion.button
      className="w-full lg:w-auto bg-[#04ba4e] hover:bg-[#109144] text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Comece sua jornada
      <ArrowRight className="ml-2 h-6 w-6" />
    </motion.button>
  )
}