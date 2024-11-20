import { Footer } from "../(main)/_components/landing/footer";
import Header from "../(main)/_components/landing/header";
import LoadingSection from "./_components/loading-section";
// import SupportSection from "./_components/support-section";

export default function page(){
    return(
        <main>
            <Header />
            {/* <SupportSection /> */}
            <LoadingSection />
            <Footer />
        </main>
    )
}