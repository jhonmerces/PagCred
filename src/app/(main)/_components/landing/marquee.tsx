import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { User } from 'lucide-react';

const reviews = [
  {
    name: "Carlos",
    username: "@carlos_empreendedor",
    body: "A CredPago revolucionou meu negócio. Agora recebo pagamentos de forma rápida e segura.",
  },
  {
    name: "Ana",
    username: "@ana_loja_virtual",
    body: "Incrível como a plataforma é fácil de usar. Minhas vendas online decolaram!",
  },
  {
    name: "Pedro",
    username: "@pedro_freelancer",
    body: "As transferências instantâneas da Point me ajudam a manter um fluxo de caixa saudável.",
  },
  {
    name: "Mariana",
    username: "@mari_confeitaria",
    body: "Os links de pagamento são perfeitos para meu negócio. Simplesmente adorei!",
  },
  {
    name: "Roberto",
    username: "@roberto_consultoria",
    body: "O suporte ao cliente é excepcional. Sempre resolvem minhas dúvidas rapidamente.",
  },
  {
    name: "Juliana",
    username: "@ju_artesanato",
    body: "As taxas competitivas da Point me permitem ter mais lucro nas minhas vendas.",
  },
];

const secondRow = reviews;

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="bg-[#04ba4e] p-2 rounded-full">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="mb-10 relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white ">
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}