'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Link from 'next/link'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="max-w-md w-full mt-14 mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center text-[#001F3F] mb-6">Bem-vindo de volta</h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
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
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-[#e74c3c]" />
              <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
            </label>
            <Link href="/esqueci-senha" className="text-sm text-[#e74c3c] hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Entrar
          </Button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-600 text-center">
          Não tem uma conta?{' '}
          <Link href="/signup" className="text-[#e74c3c] hover:underline font-medium">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  )
}