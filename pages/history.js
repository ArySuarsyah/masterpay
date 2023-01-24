import Footer from "../components/Footer";
import Header from "../components/Header";
import TransactionHistory from "../components/history/transactionHistory";
import NavbarMenu from "../components/navbarMenu";







export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full lg:flex-row pl-16 pr-28">
                <div className="flex flex-col justify-between">
                    <NavbarMenu dahsboard="menuActive"/>
                </div>
                <div className="grid flex-grow card">
                    <TransactionHistory />
                </div>
                    
            </div>
            <div>
            </div>
            <Footer />
        </>
    )
}

