import Image from "next/image";

export default function TransactionHistory() {
    return (
        <>
            <div className="font-nunitoSans flex justify-between items-center">
                <span>Transaction History</span>
                <select required className="w-52 h-10 px-5">
                    <option value="" disabled selected hidden>-- Select Filter --</option>
                    <option value="0">Open when powered (most valves do this)</option>
                    <option value="1">Closed when powered, auto-opens when power is cut</option>
                </select>
            </div>
            <div className="font-nunitoSans flex justify-between items-center p-5">
                <div className="flex items-center gap-2 h-16">
                    <div className="avatar rounded-[10px]">
                        <Image src="/user.jpeg" width={56} height={56} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span>Samuel Suhi</span>
                        <span className="text-xs">Accept</span>
                    </div>
                </div>
                <div>
                    <span>+Rp50.000</span>
                </div>
            </div>
            <div className="font-nunitoSans flex justify-between items-center p-5">
                <div className="flex items-center gap-2 h-16">
                    <div className="avatar rounded-[10px]">
                        <Image src="/user.jpeg" width={56} height={56} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span>Samuel Suhi</span>
                        <span className="text-xs">Accept</span>
                    </div>
                </div>
                <div>
                    <span>+Rp50.000</span>
                </div>
            </div>
            
        </>
    )
}
