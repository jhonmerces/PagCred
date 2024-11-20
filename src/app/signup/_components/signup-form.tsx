'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="max-w-2xl mt-10 w-full mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center text-[#001F3F] mb-6">Crie sua conta</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome completo</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Digite seu nome completo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf" className="text-sm font-medium text-gray-700">CPF</Label>
              <Input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone</Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cep" className="text-sm font-medium text-gray-700">CEP</Label>
              <Input
                id="cep"
                type="text"
                placeholder="00000-000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600"
            >
              Eu concordo com os{' '}
              <Link href="/termos" className="text-[#e74c3c] hover:underline">
                termos de serviço
              </Link>
              {' '}e a{' '}
              <Link href="/privacidade" className="text-[#e74c3c] hover:underline">
                política de privacidade
              </Link>
            </label>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Criar conta
          </Button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-600 text-center">
          Já tem uma conta?{' '}
          <Link href="/signin" className="text-[#e74c3c] hover:underline font-medium">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  )
}