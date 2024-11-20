'use client'

import { motion } from 'framer-motion'
import { Shield, BarChart2, RefreshCw, Zap, Clock, Link } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    title: "Antifraude robusto",
    description: "Camada extra de proteção às suas transações, verificamos suas transações com tecnologia de ponta.",
    icon: Shield
  },
  {
    title: "Controle Financeiro",
    description: "Painel para que nada fuja do seu controle, gestão atualizada em tempo real, com todas as informações relevantes para que sua empresa aumente seu potencial de vendas.",
    icon: BarChart2
  },
  {
    title: "Retentativa transparente",
    description: "Possuímos um sistema de multi-adquirente, ou seja, aumentamos significativamente a aprovação da sua compra.",
    icon: RefreshCw
  },
  {
    title: "Transferência Instantânea",
    description: "Receba seu dinheiro quando quiser sem taxas misteriosas, até nos finais de semana.",
    icon: Zap
  },
  {
    title: "Receba em D+2 e Pix na hora",
    description: "Valores de vendas via cartão de crédito disponíveis em 2 dias úteis e Pix na hora.",
    icon: Clock
  },
  {
    title: "Crie links de pagamento",
    description: "Você pode criar links para receber pagamentos online de forma simples.",
    icon: Link
  }
]

export function Features() {
  return (
    <section className="bg-[#04ba4e] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recursos que impulsionam seu negócio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[#109144] border-[#04ba4e]">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#04ba4e] rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-[#ffffff]">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}