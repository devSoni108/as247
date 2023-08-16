"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsList, BsX } from "react-icons/bs";

const styles={
    navLinks: 'cursor-pointer uppercase ml-5'
}

const Navbar = () => {
    const [ menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return(
        <header>
            <nav className="shadow-xl">
                {/* Desktop Menu */}
                <div className="flex items-center justify-between h-full px-4 w-full">
                    <Link href='/'>
                        <Image 
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/AS247-logo.png?alt=media&token=2c7a503b-0b41-454f-bea0-ea9e9b9d4577'
                        alt='AS247 Security Logo'
                        width={100}
                        height={25}
                        className='cursor-pointer'
                        />
                    </Link>
                    <div className="hidden sm:flex">
                        <ul className="hidden sm:flex">
                            <li className={styles.navLinks}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className={styles.navLinks}>
                                <Link href='/solutions'>Solutions</Link>
                            </li>
                            <li className={styles.navLinks}>
                                <Link href='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Menu */}
                    <div onClick={toggleMenu} className="sm:hidden cursor-pointer pr-2">
                        <BsList className="h-8 w-8 text-gray-800" />
                    </div>
                </div>
                <div className={
                    menuOpen 
                    ? "fixed top-0 right-0 w-[70%] sm:hidden h-[50%] bg-blue-950 p-10 ease-in-out duration-500"
                    : "fixed right-[-100%] top-0 p-10 ease-in-out duration-500"
                }
                style={{ zIndex: 1000 }}
                >
                    <div className="flex w-full items-center justify-end">
                        <div onClick={toggleMenu} className="cursor-pointer -mt-6 -mr-4">
                            <BsX className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    {/* Mobile Menu Links */}
                    <div className="flex-col py-4 uppercase text-white">
                        <ul>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4">
                                <Link href="/">Home</Link>
                            </li>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4">
                                <Link href="/solutions">Solutions</Link>
                            </li>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar