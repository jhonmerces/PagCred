import { ArrowRight, Smartphone, CreditCard, Settings, PieChart, BarChart2, Zap, Box, FileText, PieChart as PieChartIcon } from 'lucide-react'
import Link from 'next/link'

export default function SupportSection() {
  const faqItems = [
    "Como instalar o checkout da Point na Shopify?",
    "Integrando com Adoorei",
    "Verificação de domínio",
  ]

  const categories = [
    { icon: Smartphone, title: "Apps", count: 6 },
    { icon: CreditCard, title: "Checkout", count: 5 },
    { icon: Settings, title: "Configurações", count: 3 },
    { icon: PieChart, title: "Gateways", count: 15 },
    { icon: BarChart2, title: "Marketing", count: 5 },
    { icon: Zap, title: "Pixels", count: 5 },
    { icon: Box, title: "Plataformas", count: 2 },
    { icon: FileText, title: "Produtos", count: 1 },
    { icon: PieChartIcon, title: "Relatórios", count: 1 },
  ]

  return (
    <section className="bg-white mt-12 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Artigos mais procurados</h2>
        
        <ul className="space-y-4 mb-12">
          {faqItems.map((item, index) => (
            <li key={index} className="flex items-center text-[#001F3F] duration-300">
              <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0" />
              <Link href="#" className="text-lg hover:underline">{item}</Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link href="#" key={index} className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group-hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{category.title}</h3>
                </div>
                <p className="text-gray-600">{category.count} {category.count === 1 ? 'artigo' : 'artigos'}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}