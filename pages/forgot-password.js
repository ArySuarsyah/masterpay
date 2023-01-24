import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";

export default function login() {
    return (
        <div className='loginContainer'>
            <div className='loginHero'>
                <Image src="/vector5.png" width={680} height={0} alt="" className="backgroundOverlay" />
                <span className="loginBrand my-10 lg:my-0">MasterPay</span>
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
            <section className="pinContainer dark:bg-[#1D2228] dark:text-[#E1E2E2] gap-10 lg:gap-10 md:h-[56.8rem] lg:h-full">
                <span className="formTitle">Reset Password</span>
                <span className="formDecript1">
                    Did You Forgot Your Password? Don&apos;t Worry, You Can Reset Your Password In a Minutes.
                </span>
                <span className="formDecript2">
                    Enter your MasterPay e-mail so we can send you a password reset link.
                </span>
                <span className="formDecript3">
                    To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                </span>
                <form action="" className="w-full">
                    <div className="inputEmailLabel">
                        <CiMail className="formIcons" />
                        <input type="email" className="input" placeholder='Enter your e-mail' />
                    </div>
                    <Link href="/reset-password">
                    <button className="btn w-full h-16 bg-[#1BA098] border-0 md:mt-20">Confirm</button>
                    </Link>
                </form>
            </section>
        </div>
    )
}
