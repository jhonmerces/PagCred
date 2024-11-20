import { Footer } from "../(main)/_components/landing/footer";
import Header from "../(main)/_components/landing/header";
import PrivacyPolicy from "./_components/main-politics";

export default function Page(){
    return(
        <main>
            <Header />
            <PrivacyPolicy />
            <Footer />
        </main>
    )
}