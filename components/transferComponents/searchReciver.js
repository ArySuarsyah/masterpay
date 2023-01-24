import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function SearchReciver() {
    return (
        <>
            <div className="flex flex-col px-5 gap-5 text-[#4D4B57]">
                <span>Search Receiver</span>
                <div className="relative px-1">
                    <FiSearch className="absolute w-7 h-7 text-[#A9A9A9] top-2 left-5" />
                    <input type="text" className="file-input w-full max-w-full px-14 bg-[#3A3D421A] h-10 outline-2 border=[1px] border-[#dedede]" />
                </div>
                <div className="font-nunitoSans flex justify-between items-center py-5 rounded-[4px]">
                    <div className="flex items-center gap-2 h-16">
                        <div className="avatar rounded-[10px]">
                            <Image src="/user.jpeg" width={56} height={56} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Samuel Suhi</span>
                            <span className="text-xs">+62 813-8492-9994</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
