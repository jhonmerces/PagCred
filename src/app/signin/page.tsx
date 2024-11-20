'use client'

import { motion } from 'framer-motion'
import Header from "../(main)/_components/landing/header"
import LoginForm from './_components/login-form'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#001F3F] to-[#003366]">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoginForm />
        </motion.div>
      </div>
    </main>
  )
}