'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, MessageCircle } from 'lucide-react'

export function SupportSection() {
  return (
    <section className="relative bg-white my-16">
      {/* <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-100 to-white"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-[#04ba4e] rounded-full flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Suporte <span className="text-[#04ba4e]">especializado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A equipe da Credpago está disposta e atenta 24 horas por dia, para ajudar sua operação a crescer cada vez mais!
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

        </motion.div>
      </div>
    </section>
  )
}