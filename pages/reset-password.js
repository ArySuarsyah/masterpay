import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi2";


import React, { useState } from 'react';
import Link from "next/link";

export default function Reset() {


    const [showHide, setshowHide] = useState({
        type: "password",
        show: "showPassword hidden",
        hide: "hidePassword"
    })

    const [showHideSecond, setshowHideSecond] = useState({
        type: "password",
        show: "showPassword hidden",
        hide: "hidePassword"
    })
    
    const showHidePass = () => {
        if (showHide.type === "password") {
            setshowHide({
                type: "password",
                hide: "hidePassword hidden",
                show: "showPassword"
            });
        } else {
            setshowHide({
                type: "text",
                hide: "hidePassword",
                show: "showPassword hidden"
            })
        
        }
        
    }

    const showHidePassSecond = () => {
        if (showHideSecond.type === "password") {
            setshowHideSecond({
                type: "password",
                hide: "hidePassword hidden",
                show: "showPassword"
            });
        } else {
            setshowHideSecond({
                type: "text",
                hide: "hidePassword",
                show: "showPassword hidden"
            })
        
        }
        
    }



    
    return (
        <div className='loginContainer'>
            <div className='loginHero'>
                <Image src="/vector5.png" width={680} height={0} alt="" className="backgroundOverlay" />
                <span className="loginBrand md:my-32 lg:my-0">MasterPay</span>
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
            <section className="pinContainer dark:bg-[#1D2228] dark:text-[#E1E2E2] gap-7 lg:gap-10 md:h-[45.8rem] lg:h-full">
                <span className="formTitle">Reset Password</span>
                <span className="formDecript1">
                    Did You Forgot Your Password? Don&apos;t Worry, You Can Reset Your Password In a Minutes.
                </span>
                <span className="formDecript2">
                    Create and confirm your new password so
                    you can login to MasterPay.
                </span>
                <span className="formDecript3">
                    To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                </span>
                <form action="" className="w-full flex flex-col md:gap-10 lg:gap-2">
                    <div className="inputPasswordLabel">
                        <HiOutlineLockClosed className="formIcons" />
                        <input type={showHide.type} className="input" placeholder='Create new password' />
                        <FiEyeOff onClick={showHidePass} className={showHide.hide} />
                        <FiEye onClick={showHidePass} className={showHide.show} />
                    </div>
                    <div className="inputPasswordLabel">
                        <HiOutlineLockClosed className="formIcons" />
                        <input type={showHideSecond.type} className="input" placeholder='Create new password' />
                        <FiEyeOff onClick={showHidePassSecond} className={showHideSecond.hide} />
                        <FiEye onClick={showHidePassSecond} className={showHideSecond.show} />
                    </div>
                    <Link href="/home">
                    <button className="btn w-full mt-10 bg-[#1BA098] border-0">Confirm</button>
                    </Link>
                </form>
            </section>
        </div>
    )
}
