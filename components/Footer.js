import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";



export default function Footer() {
    return (
        <footer className="flex bg-[#1BA098] px-5 h-[68px] w-full lg:pl-20 lg:pr-28 justify-between font-nunitoSans text-white text-base items-center">
            <span>2020 MasterPay. All right reserved.</span>
            <div className="flex gap-10">
                <div>
                    <BsTelephone className="contactIcon"/>
                    <span className="contactList">+62 5637 8882 9901</span>
                </div>
                <div>
                    <CiMail className="contactIcon"/>
                    <span className="contactList">contact@masterpay.com</span>
                </div>
            </div>
        </footer>
    )
}
