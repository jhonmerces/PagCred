"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Mail, Clock, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function SupportButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const toggleSupport = () => setIsOpen(!isOpen)

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  }

  const copyToClipboard = async (text: string, type: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'phone') {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      } else {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      }
    } catch (err) {
      console.error("Falha ao copiar texto: ", err)
    }
  }

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial="initial"
        animate="pulse"
        variants={pulseVariants}
      >
        <Button
          className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg bg-[#2980b9] hover:bg-[#2c74a5] text-white"
          onClick={toggleSupport}
          aria-label={isOpen ? "Fechar suporte" : "Abrir suporte"}
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <Card className="w-full max-w-md mx-auto">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-bold">Suporte ao Cliente</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={toggleSupport}
                  aria-label="Fechar suporte"
                >
                  <X size={20} />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-semibold">Contato via WhatsApp</h3>
                  <div className="flex items-center space-x-2">
                    <Phone size={20} />
                    <span className="flex-grow">(82) 98215-2910</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard("82982152910", 'phone')}
                      aria-label={copiedPhone ? "Número copiado" : "Copiar número"}
                    >
                      {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                  <a
                    href="https://wa.me/558282152910?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20como%20posso%20me%20tornar%20parceiro%20da%20Point"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                  >
                    Iniciar conversa no WhatsApp
                  </a>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-semibold">E-mail de Suporte</h3>
                  <div className="flex items-center space-x-2">
                    <Mail size={20} />
                    <span className="flex-grow">sac@pointpagamento.com</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard("sac@pointpagamento.com", 'email')}
                      aria-label={copiedEmail ? "E-mail copiado" : "Copiar e-mail"}
                    >
                      {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                  <a
                    href="mailto:sac@pointpagamento.com"
                    className="text-blue-800 hover:underline"
                  >
                    Enviar e-mail
                  </a>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-semibold">Horário de Atendimento</h3>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span>Segunda a Sexta: 9h às 18h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span>Sábado: 9h às 13h</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500">
                  Estamos aqui para ajudar! Entre em contato conosco.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}