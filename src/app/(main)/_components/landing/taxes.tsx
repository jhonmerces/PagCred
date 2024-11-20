import Image from 'next/image'
import { ArrowRight, CreditCard, Smartphone, Receipt, DollarSign, ShoppingCart } from 'lucide-react'

export default function Taxes() {
  return (
    <section className="bg-gradient-to-t from-[#109144] to-[#04ba4e] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-95">Taxas e Tarifas</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              Taxas baixas e aprovações altas, tudo para alavancar o seu negócio.
            </h3>
            <div className="space-y-4">
              {[
                { icon: CreditCard, label: 'Cartão de Crédito D+2*', value: '7,99%' },
                { icon: Smartphone, label: 'PIX D+0 (instantâneo)', value: '3,99%' },
                { icon: Receipt, label: 'Boleto D+0 (instantâneo)', value: 'R$2,99' },
                { icon: DollarSign, label: 'Tarifa por Saque', value: 'R$9,99' },
                { icon: ShoppingCart, label: 'Checkout (sem mensalidade)', value: 'GRÁTIS' },
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-[#109144] hover:bg-[#04ba4e] transition duration-300 p-4 rounded-lg">
                  <item.icon className="w-6 h-6 mr-4" />
                  <span className="flex-grow">{item.label}</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-[#04ba4e] hover:bg-[#109144] text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300">
              Comece agora
              <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="hidden md:block md:relative">
            <div className="relative animate-float">
              <Image
                src="/celular-1.png"
                alt="Point Pagamentos App"
                width={300}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}