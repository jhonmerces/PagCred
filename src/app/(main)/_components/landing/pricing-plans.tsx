'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const plans = [
  {
    name: "Básico",
    price: "R$ 99",
    description: "Ideal para pequenos negócios",
    features: [
      "Taxa de 2.99% por transação",
      "Checkout personalizado",
      "Suporte por e-mail",
      "Relatórios básicos",
    ],
  },
  {
    name: "Pro",
    price: "R$ 199",
    description: "Perfeito para negócios em crescimento",
    features: [
      "Taxa de 2.49% por transação",
      "Checkout altamente personalizável",
      "Suporte prioritário",
      "Relatórios avançados",
      "Integração com sistemas de CRM",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para grandes empresas",
    features: [
      "Taxas personalizadas",
      "Checkout totalmente customizável",
      "Suporte 24/7 dedicado",
      "Relatórios em tempo real",
      "API completa",
      "Gerente de conta exclusivo",
    ],
  },
]

export function PricingPlans() {
  return (
    <section className="bg-gradient-to-b from-white via-[#f0f8ff] to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">Escolha o plano ideal para o seu negócio</h2>
          <p className="text-xl text-gray-600">Soluções flexíveis para impulsionar suas vendas</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${plan.isPopular ? 'border-[#e74c3c] border-2 shadow-lg' : 'border-gray-200 shadow'}`}>
                <CardHeader>
                  {plan.isPopular && (
                    <div className="text-[#e74c3c] text-sm font-semibold mb-2">Mais Popular</div>
                  )}
                  <CardTitle className="text-2xl font-bold text-[#2c3e50]">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-4xl font-bold text-[#2c3e50] mb-6">{plan.price}</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-[#e74c3c] mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.isPopular 
                        ? 'bg-[#e74c3c] hover:bg-[#c0392b] text-white' 
                        : 'bg-[#3498db] hover:bg-[#2980b9] text-white'
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Fale Conosco" : "Começar Agora"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}