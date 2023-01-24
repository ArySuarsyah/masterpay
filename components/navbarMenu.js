import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import { IoAddSharp, IoArrowUp, IoGridOutline, IoPersonOutline } from "react-icons/io5";


export default function NavbarMenu(props) {
    return (
        <>
            <div className="hidden md:flex lg:flex flex-col justify-between">
                <ul className="menu gap-10 md:block bg-base-100 w-56 p-2">
                    <li className={props.dahsboard}>
                        <Link href="/history" className='active:bg-[#1BA098]'>
                            <IoGridOutline />
                            <span className='hidden md:block lg:block'>
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li className={props.transfer}>
                        <Link href="/transfer" className='active:bg-[#1BA098]'>
                            <IoArrowUp />
                            <span className='hidden md:block lg:block'>
                                Transfer
                            </span>
                        </Link>
                    </li>
                    <li className={props.topUp}>
                        <Link href="/topup" className='active:bg-[#1BA098]'>
                            <IoAddSharp />
                            <span className='hidden md:block lg:block'>
                                Top Up
                            </span>
                        </Link>
                    </li>
                    <li className={props.profile}>
                        <Link href="/profile" className='active:bg-[#1BA098]'>
                            <IoPersonOutline />
                            <span className='hidden md:block lg:block'>
                                Profile
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className="flex menu pl-2 justify-self-end">
                    <li>
                        <Link href="/login" className='active:bg-[#1BA098]'>
                            <FiLogOut />
                            <span className='hidden md:block lg:block'>
                                Loguot
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='md:hidden lg:hidden'>
                <div className="flex justify-evenly gap-10 md:block bg-base-100 w-full p-2 border-[1px] border-black">
                    <div className={props.dahsboard}>
                        <Link href="/history" className='hover:bg-[#a3a3a3] active:bg-[#1BA098]'>
                            <IoGridOutline />
                            <span className='hidden md:block lg:block'>
                                Dashboard
                            </span>
                        </Link>
                    </div>
                    <div className={props.transfer}>
                        <Link href="/transfer" className='hover:bg-[#a3a3a3] active:bg-[#1BA098]'>
                            <IoArrowUp />
                            <span className='hidden md:block lg:block'>
                                Transfer
                            </span>
                        </Link>
                    </div>
                    <div className={props.topUp}>
                        <Link href="/topup" className='hover:bg-[#a3a3a3] active:bg-[#1BA098]'>
                            <IoAddSharp />
                            <span className='hidden md:block lg:block'>
                                Top Up
                            </span>
                        </Link>
                    </div>
                    <div className={props.profile}>
                        <Link href="/profile" className='hover:bg-[#a3a3a3] active:bg-[#1BA098]'>
                            <IoPersonOutline />
                            <span className='hidden md:block lg:block'>
                                Profile
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/login" className='hover:bg-[#a3a3a3] active:bg-[#1BA098]'>
                            <FiLogOut />
                            <span className='hidden md:block lg:block'>
                                Loguot
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}