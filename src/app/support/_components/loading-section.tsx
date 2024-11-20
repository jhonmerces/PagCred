'use client'

import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'

export default function LoadingSection() {
  return (
    <section className="flex items-center justify-center min-h-[650px] bg-gray-100">
      <div className="text-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="mb-6 inline-block"
        >
          <Settings className="w-16 h-16 text-gray-600" />
        </motion.div>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Informações do suporte em construção
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: 'reverse',
            }}
          >
            ...
          </motion.span>
        </h2>
        <p className='text-gray-500 -mt-3'>Agradecemos a compreensão.</p>
      </div>
    </section>
  )
}