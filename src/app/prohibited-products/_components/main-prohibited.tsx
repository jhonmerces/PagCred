import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProdutosProibidos() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-sm mt-28 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Produtos Proibidos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Atividades ilegais, tais como, mas não limitadas a: bestialidade, pedofilia, tráfico de droga, lavagem de dinheiro, financiamento ao terrorismo, produtos derivados de contrabando ou descaminho;
            </li>
            <li>
              Armas de fogo e jogos de azar; loterias, bingo, apostas ou similares;
            </li>
            <li>
              Venda de animais silvestres;
            </li>
            <li>
              Venda de medicamentos proibidos ou restritos nos termos da legislação brasileira;
            </li>
            <li>
              Produtos pendentes de homologação de órgãos governamentais.
            </li>
          </ul>

          <div>
            <p className="font-semibold">EXEMPLO: LEILÕES</p>
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              Ações, valores mobiliários ou qualquer tipo de produtos financeiros;
            </li>
            <li>
              Doações a partidos políticos ou a qualquer outra Pessoa Politicamente Exposta (PPE), nos termos da Circular do Banco Central do Brasil 3.461/09;
            </li>
            <li>
              Captar ou arrecadar dinheiro, venda em pirâmide.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}