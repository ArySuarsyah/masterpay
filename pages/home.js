import {
    IoAddSharp,
    IoArrowDown,
    IoArrowUp
} from "react-icons/io5";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarMenu from "../components/navbarMenu";




export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full md:flex-row lg:flex-row lg:pl-16 lg:pr-28">
                <NavbarMenu dahsboard="menuActive"/>
                <div className="grid flex-grow card border-[1px] border-black">
                    <div className="bg-[#1BA098] flex justify-between items-center px-5 py-5 rounded-[8px]w-full ">
                        <div className="flex flex-col text-white gap-5">
                            <span>Balance</span>
                            <span className="text-3xl font-semibold">Rp120.000</span>
                            <span>+62 813-9387-7946</span>
                        </div>
                        <div>
                            <ul className="flex gap-2 menu w-40 p-2 text-white">
                                <li className="bg-[#deb9925f] border-[1px] border-[#DEB992] rounded-[10px] flex items-center overflow-hidden">
                                    <a className="active:bg-[#1BA098] w-full">
                                        <IoArrowUp />
                                        Transfer
                                    </a>
                                </li>
                                <li className="bg-[#deb9925f] border-[1px] border-[#DEB992] rounded-[10px] flex items-center w-full overflow-hidden">
                                    <a className="active:bg-[#1BA098] w-full">
                                        <IoAddSharp />
                                        Top Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div className="flex flex-col-2 justify-between">
                            <div className="flex flex-col items-center">
                                <IoArrowDown />
                                <span>Income</span>
                                <span>Rp2.120.000</span>
                            </div>
                            <div className="flex flex-col">
                                <IoArrowUp />
                                <span>Expense</span>
                                <span>Rp1.560.000</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <Footer />
        </>
    )
}
