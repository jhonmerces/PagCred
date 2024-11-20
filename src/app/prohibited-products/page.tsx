import { Footer } from "@/app/(main)/_components/landing/footer";
import Header from "@/app/(main)/_components/landing/header";
import ProdutosProibidos from "./_components/main-prohibited";

export default function page(){
    return(
        <main>
            <Header />
            <ProdutosProibidos />
            <Footer />
        </main>
    )
}