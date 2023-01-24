import Image from "next/image";
import InputForm from "../components/auth/loginForm";

export default function login() {
    return (
        <div className='loginContainer'>
            <div className='loginHero'>
                <Image src="/vector5.png" width={680} height={0} alt="" className="backgroundOverlay" />
                <span className="loginBrand">MasterPay</span>
                <div className="hidden lg:block">
                    <Image src="/pngphone.png" width={180} height={100} alt="" className="img1" />
                    <Image src="/pngphone2.png" width={180} height={100} alt="" className="img2" />
                </div>
                <span className="text-title">
                    App that Covering Banking Needs.
                </span>
                <p className="loginDecript">
                    FazzPay is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in FazzPay everyday with worldwide users coverage.
                </p>
            </div>
            <section className="formContainer border-black">
                <span className="formTitle">Create Security PIN</span>
                <span className="pinDecript1">
                    Secure Your Account, Your Wallet, and Your Data With 6 Digits form That You Created Yourself.
                </span>
                <span className="pinDecript2">
                    Create a PIN that&apos;s contain 6 digits number for security purpose in FazzPay.
                </span>
                <span className="pinDecript3">
                    Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don&apos;t tell anyone about your FazzPay account password and the PIN.
                </span>
                <form action="" className="md:mt-20">
                    <div className="flex gap-3 lg:gap-5 items-center my-16">
                        <div className="pinLabel">
                            <input type="tel" className="inputPin" maxlength="1" placeholder="" />
                        </div>
                        <div className="pinLabel">
                            <input type="tel" className="inputPin" maxlength="1" placeholder="" />
                        </div>
                        <div className="pinLabel">
                            <input type="tel" className="inputPin" maxlength="1" placeholder="" />
                        </div>
                        <div className="pinLabel">
                            <input type="tel" className="inputPin" maxlength="1" placeholder="" />
                        </div>
                        <div className="pinLabel">
                            <input type="tel" className="inputPin" maxlength="1" placeholder="" />
                        </div>
                        <div className="pinLabel">
                            <input type="tel" className="inputPin" maxlength="1" placeholder="" />
                        </div>
                    </div>
                    <button className="btn w-full">Confirm</button>
                </form>
            </section>
        </div>
    )
}
