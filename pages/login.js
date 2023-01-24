import Image from "next/image";


import React, { Component } from 'react'


import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi2";




export default class Login extends Component {
        constructor(props) {
            super(props)
            
        
            this.state = {
                type: "password",
                show: "showPassword hidden",
                hide: "hidePassword",
                iconFirst: "formIcons",
                iconLast: "formIcons",
                iconEmail: "formIcons",
                iconPassword: "formIcons",
                firstNameActive: "inputEmailLabel",
                lastNameActive: "inputEmailLabel",
                emailActive: "inputEmailLabel",
                passwordActive: "inputPasswordLabel",
            }
        }
    


    render() {



        const showHidePass = () => {
            if (this.state.type === "password") {
                this.setState({
                    type: "text",
                    hide: "hidePassword hidden",
                    show: "showPassword"
                })
            } else {
                this.setState({
                    type: "password",
                    hide: "hidePassword",
                    show: "showPassword hidden"
                });
        
            }
        
        }

        return (
            <div className='loginContainer'>
                <div className='loginHero'>
                    <span className="loginBrand">MasterPay</span>
                    <Image src="/vector5.png" width={680} height={0} alt="" className="backgroundOverlay" />
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
                <section className="formContainer">
                    <span className="formTitle">Login</span>
                    <span className="formDecript1">
                        Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
                    </span>
                    <span className="formDecript2">
                        Login to your existing account to access all the features in FazzPay.
                    </span>
                    <span className="formDecript3">
                        Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                    </span>
                    <form action="" className="form">
                        <div className={this.state.emailActive}>
                            <CiMail className={this.state.iconEmail} />
                            <input
                                onChange={(e) => {
                                    this.setState({ email: e.target.value })
                                    this.setState({ iconEmail: "formIconsActive" })
                                    this.setState({ emailActive: "inputEmailLabelActive" })
                                }}
                                type="email"
                                name="email"
                                className="input"
                                placeholder='Enter your e-mail' />
                        </div>
                        <div className={this.state.passwordActive}>
                            <HiOutlineLockClosed
                                className={this.state.iconPassword} />
                            <input
                                onChange={(e) => {
                                    this.setState({ password: e.target.value })
                                    this.setState({ iconPassword: "formIconsActive" })
                                    this.setState({ passwordActive: "inputPasswordLabelActive" })
                                }}
                                
                                type={this.state.type}
                                name="password"
                                className="input"
                                placeholder='Enter your password' />
                            <FiEyeOff onClick={showHidePass} className={this.state.hide} />
                            <FiEye onClick={showHidePass} className={this.state.show} />
                        </div>
                        <Link href="/forgot-pliassword" className='self-end mt-5'>
                            <span className="hover:text-blue-500 cursor-pointer">Forgot password?</span>
                        </Link>
                        <Link href="/home">
                            <button className="btn w-full h-16 bg-[#1BA098] border-0 mt-5">Login</button>
                        </Link>
                    </form>
                    <div className="loginFooter">
                        <span>Don&apos;t have an account?
                            <Link href="/signup" className="hover:text-blue-500"> Let&apos;s Sign Up</Link>
                        </span>
                    </div>
                </section>
            </div>
        )
    }
}
