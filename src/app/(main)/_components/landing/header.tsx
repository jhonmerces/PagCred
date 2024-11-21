'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#04ba4e] shadow-md' : 'bg-[#04ba4e]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="p-2 rounded">
                <Image src="/credpag.png" alt="CredPago" width={200} height={32} />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/support" className="text-white hover:text-[#04ba4e] hover:bg-white px-3 py-2 rounded-md text-sm font-medium">
              Dúvidas e Suporte
            </Link>
            <Link href="#" className="text-white hover:text-[#04ba4e] hover:bg-white px-3 py-2 rounded-md text-sm font-medium">
              Entrar na conta
            </Link>
            <Link href="#" className="bg-[#1a753e] hover:bg-[#109144] text-white px-3 py-2 rounded-md text-sm font-bold">
              Criar conta grátis
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#109144] py-2">
          <div className="flex flex-col items-center space-y-2">
            <Link href="/support" className="text-white hover:text-[#04ba4e] px-3 py-2 rounded-md text-sm font-medium w-full text-center">
              Dúvidas e Suporte
            </Link>
            <Link href="#" className="text-white hover:text-[#04ba4e] px-3 py-2 rounded-md text-sm font-medium w-full text-center">
              Entrar na conta
            </Link>
            <Link href="#" className="bg-[#04ba4e] hover:bg-[#109144] text-white px-3 py-2 rounded-md text-sm font-medium w-full text-center">
              Criar conta grátis
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  )
}