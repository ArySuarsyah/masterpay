import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarMenu from "../components/navbarMenu";
import AmountComponents from "../components/transferComponents/amountComponents";



export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full lg:flex-row pl-16 pr-28">
                <NavbarMenu transfer="menuActive"/>
                <div className="grid flex-grow card">
                    <AmountComponents/>
                    </div>
            </div>
            <Footer />
        </>
    )
}
