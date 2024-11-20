'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign } from 'lucide-react'
import Image from 'next/image'
import { AnimatedList } from './animated-list'

export default function HeroSection() {
  const features = [
    "Checkout de alta conversão",
    "Transferências rápidas",
    "Links de pagamento",
  ]

  const notifications = [
    { id: 1, title: "Pagamento Recebido", amount: "R$ 1.500,00" },
    { id: 2, title: "Venda Aprovada", amount: "R$ 789,50" },
    { id: 3, title: "Transferência Realizada", amount: "R$ 3.000,00" },
    { id: 4, title: "Nova Assinatura", amount: "R$ 99,90" },
  ]

  return (
    <section className="bg-[#fcfeff] pt-32 pb-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2c3e50] leading-tight">
              A plataforma de pagamentos feita para você{' '}
              <span className="text-[#04ba4e]">vender mais</span>
            </h1>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-[#04ba4e] mr-2" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <Button className="bg-[#04ba4e] hover:bg-[#109144] text-white text-lg px-8 py-6 rounded">
              Criar conta grátis
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Taxas competitivas e aprovação rápida
            </p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src="/mockup-pc.png"
                alt="Point Pagamentos Dashboard"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
              <div className="hidden lg:block absolute top-[10%] right-[5%] w-[40%] max-w-[300px]">
                <AnimatedList delay={2000} className="space-y-2">
                  {notifications.map((notification) => (
                    <motion.div 
                      key={notification.id} 
                      className="bg-[#2c3e50] bg-opacity-90 text-white p-3 rounded-lg shadow-lg flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-[#04ba4e] p-2 rounded-full flex-shrink-0">
                        <span className="font-semibold text-sm mx-1">R$</span>
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-sm">{notification.title}</p>
                        <p className="text-sm text-gray-300">{notification.amount}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatedList>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}