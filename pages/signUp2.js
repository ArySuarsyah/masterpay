import Image from "next/image";
import Link from "next/link";
import React, { Component } from 'react';
import PinData from "../components/auth/pinData";

import axios from 'axios';

import { CiMail, CiUser } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi2";


export default class signup extends Component {


        constructor(props) {
            super(props)
            
            this.state = {
                type: "password",
                hide: "hidePassword",
                show: "showPassword hidden",
                firstNameActive: "inputEmailLabel",
                lastNameActive: "inputEmailLabel",
                emailActive: "inputEmailLabel",
                passwordActive: "inputPasswordLabel",
                iconFirst: "formIcons",
                iconLast: "formIcons",
                iconEmail: "formIcons",
                iconPassword: "formIcons",
                firstname: "",
                lastname: "",
                email: "",
                password: "",
            }
        }
    

    render() {
    
        const inputState = (e) => {
            this.setState({
                firstname: e.target.value,
                lastname: e.target.value,
                email: e.target.value,
                password: e.target.value,
                iconLast: "formIconsActive",
                iconFirst: "formIconsActive",
                iconEmail: "formIconsActive",
                iconPassword: "formIconsActive",
                firstNameActive: "inputEmailLabelActive",
                lastNameActive: "inputEmailLabelActive",
                emailActive: "inputEmailLabelActive",
                passwordActive: "inputPasswordLabelActive"
            })
            e.preventDefault()
        }


        const userRegister = (e) => {
            const url = 'https://68xkph-8888.preview.csb.app/auth/register'
            const userData = {
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
            }
            console.log(userData);
            e.preventDefault()
            // axios.post(url, userData)
        }


        const showHidePass = () => {
            if (this.state.type === "password") {
                this.setState({
                    type: "text",
                    hide: "hidePassword hidden",
                    show: "showPassword"
                })
            } else {
                setState({
                    type: "password",
                    hide: "hidePassword",
                    show: "showPassword hidden"
                });
        
            }
        
        };

        return (
            <div className='loginContainer'>
                <div className='loginHero'>
                    <Image src="/vector5.png" width={680} height={680} priority="true" alt="" className="backgroundOverlay" />
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
                <section className=" lg:overflow-y-scroll lg:h-screen">
                    <div className="formContainer">
                        <span className="formTitle">Login</span>
                        <span className="formDecript1 lg:mb-10">
                            Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
                        </span>
                        <span className="formDecript2">
                            Login to your existing account to access all the features in FazzPay.
                        </span>
                        <span className="formDecript3 lg:mb-10">
                            Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                        </span>

                        
                        {/* Input data */}

                        <form onSubmit={userRegister} className="form">
                            <div className={this.state.firstNameActive}>
                                <CiUser className={this.state.iconFirst} />
                                <input
                                    onChange={inputState}
                                    type="text"
                                    name="firstname"
                                    className="input"
                                    laceholder='Enter your first name' />
                            </div>
                            <div className={this.state.lastNameActive}>
                                <CiUser className={this.state.iconLast} />
                                <input
                                    onChange={inputState}
                                    type="text"
                                    name="lastname"
                                    className="input"
                                    placeholder='Enter your last name' />
                            </div>
                            <div className={this.state.emailActive}>
                                <CiMail className={this.state.iconEmail} />
                                <input
                                    onChange={inputState}
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder='Enter your e-mail' />
                            </div>
                            <div className={this.state.passwordActive}>
                                <HiOutlineLockClosed
                                    className={this.state.iconPassword} />
                                <input
                                    onChange={inputState}
                                    type={this.state.type}
                                    name="password"
                                    className="input"
                                    placeholder='Enter your password' />
                                <FiEyeOff onClick={showHidePass} className={this.state.hide} />
                                <FiEye onClick={showHidePass} className={this.state.show} />
                            </div>
                            <Link href="/forgot-password" className='self-end mt-5'>
                                <span className="hover:text-blue-500 cursor-pointer">Forgot password?</span>
                            </Link>
                            <button type='submit' className="btn loginButton">Sign Up</button>
                        </form>

                        {/* end input data */}

                        <div className="loginFooter">
                            <span>Already have an account?
                                <Link href="/login" className="hover:text-blue-500">
                                    Let&apos;s Login
                                </Link>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}