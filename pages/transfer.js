import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarMenu from "../components/navbarMenu";
import SearchReciver from "../components/transferComponents/searchReciver";



export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full md:flex-row lg:flex-row lg:pl-16 lg:pr-28">
                <NavbarMenu transfer="menuActive"/>
                <div className="grid flex-grow card">
                    <SearchReciver/>
                    </div>
            </div>
            <Footer />
        </>
    )
}
