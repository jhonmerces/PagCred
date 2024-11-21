'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail } from 'lucide-react'

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-400 hover:text-gray-400 transition-colors">
    {children}
  </Link>
)

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-gray-400 font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {children}
    </ul>
  </div>
)

export function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.webp" alt="CredPago" width={150} height={50} className="mb-4" />
            <p className="text-sm text-gray-400 mb-4">
              Descubra o futuro dos pagamentos online com Credpago
            </p>
            <p className="text-sm text-gray-400">
            faleconosco@credpagosolucoes.com
            </p>
          </div>

          <FooterSection title="CredPago">
            <li><FooterLink href="/parceiros">Parceiros</FooterLink></li>
            <li><FooterLink href="/support">Central de Ajuda</FooterLink></li>
            <li><FooterLink href="/support">Suporte</FooterLink></li>
            <li><FooterLink href="/support">Contato</FooterLink></li>
          </FooterSection>

          <FooterSection title="Políticas">
            <li><FooterLink href="/politics">Privacidade</FooterLink></li>
            <li><FooterLink href="/terms">Termos de Uso</FooterLink></li>
            <li><FooterLink href="/prohibited-products">Produtos Proibidos</FooterLink></li>
          </FooterSection>

          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/credpagosolucoes/" target='_blank' className="text-gray-400 hover:text-gray-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:faleconosco@credpagosolucoes.com" className="text-gray-400 hover:text-gray-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 CredPago Soluções de Pagamentos LTDA • Todos os Direitos Reservados • CNPJ: 54.115.139/0001-00
          </p>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">Powered By</span>
            <Image src="/pitangas.Webp" alt="Pitanga Studio Logo" width={100} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}