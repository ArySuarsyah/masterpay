import Image from "next/image"

export default function AmountComponents() {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="avatar rounded-[10px]">
                    <div className="w-16 rounded">
                        <Image src="/user.jpeg" width={100} height={100} alt="" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Samuel Suhi</span>
                    <span className="text-xs">+62 813-8492-9994</span>
                </div>
            </div>
            <div>
                <span>
                    Type the amount you want to transfer and then
                    press continue to the next steps.
                </span>
            </div>
        </div>
    )
}
