import Image from "next/image";


export default function login() {
    return (
        <div className='loginContainer'>
            <div className='loginHero'>
                <Image src="/vector5.png" width={680} height={0} alt="" className="backgroundOverlay" />
                <span className="loginBrand my-5 md:my-20 lg:my-0">MasterPay</span>
                <div className="hidden lg:block">
                    <Image src="/pngphone.png" width={180} height={100} alt="" className="img1" />
                    <Image src="/pngphone2.png" width={180} height={100} alt="" className="img2" />
                </div>
                <span className="text-title">
                    App that Covering Banking Needs.
                </span>
                <p className="loginDecript">
                    MasterPay is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in MasterPay everyday with worldwide users coverage.
                </p>
            </div>
            <section className="pinContainer dark:bg-[#1D2228] dark:text-[#E1E2E2] gap-10 lg:gap-10 md:h-[51.7rem] lg:h-full">
                <div className="successLogo">
                    <Image src="/success.png" width={70} height={70} alt="success"/>
                </div>
                <span className="formTitle text-center">
                    Your PIN Was Successfully Created
                </span>
                <span className="pinDecript1">
                    Your PIN was successfully created
                </span>
                <span className="pinDecript2 text-center">
                    Your PIN was successfully created and you can now access all the features in MasterPay. Login to your new account and start exploring!
                </span>
                <span className="pinDecript3 md:mb-10 lg:mb-0">
                    Your PIN was successfully created and you can now access all the features in MasterPay
                </span>
                    <button className="btn w-full h-16 bg-[#1BA098] border-0 md:mt-20">Go To Dashboard</button>
            </section>
        </div>
    )
}
