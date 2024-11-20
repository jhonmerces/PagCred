'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Paintbrush, TrendingUp, Zap, CreditCard } from 'lucide-react'
import ShinyButton from '@/components/magicui/shiny-button'
import { cn } from "@/lib/utils"

const FeatureItem = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
  return (
    <motion.div 
      className="flex items-start space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 text-[#04ba4e]" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export function CTASection() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Checkout próprio de <span className="text-[#04ba4e]">alta conversão</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Garanta a superioridade na jornada de compra para seus consumidores. Potencialize seu rendimento com o processo de finalização de compra transparente mais recomendado do setor.
              </p>
              <ShinyButton 
                className={cn(
                  "px-8 py-4",
                )}
              >
                Comece a vender hoje
              </ShinyButton>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureItem 
                icon={ShoppingCart}
                title="Checkout sem Taxas Recorrentes"
                description="Economize com nosso checkout livre de taxas mensais."
              />
              <FeatureItem 
                icon={Paintbrush}
                title="Personalize seu Checkout"
                description="Um processo de pagamento que se adapta ao seu estilo, promovendo segurança e realçando a identidade da sua marca."
              />
              <FeatureItem 
                icon={TrendingUp}
                title="Impulso de Compra e Venda Adicional"
                description="Desenvolva Impulsos de Compra fáceis de usar para elevar seu valor médio de pedido."
              />
              <FeatureItem 
                icon={Zap}
                title="Velocidade Excepcional"
                description="O processo de conclusão de compra mais ágil do segmento para assegurar que você não perca nenhuma venda."
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Integração Credpago: <span className="text-[#04ba4e]">Simplicidade e Velocidade na Palma da Mão!</span>
            </h2>
            <p className="md:text-xl text-gray-600 max-w-5xl mx-auto">
              A integração de Pagamentos com a Cartwave, Vega e Adoorei transforma a maneira como você processa transações no seu negócio. Agora, você pode aproveitar uma experiência de pagamento fluida e rápida, garantindo que seus clientes tenham uma jornada de compra impecável e segura.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}