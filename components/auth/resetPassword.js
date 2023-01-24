import React, { useState } from 'react';


import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi2";



export default function ResetForm() {

    
    const [showHide, setshowHide] = useState({
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

    return (
        <form action="" className="form">
            <div className="inputPasswordLabel">
                <HiOutlineLockClosed className="formIcons" />
                <input type={showHide.type} className="input" placeholder='Create new password'/>
                <FiEyeOff onClick={showHidePass} className={showHide.hide}/>
                <FiEye onClick={showHidePass} className={showHide.show} />
            </div>
        </form>
    )
}
