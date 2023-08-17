"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [navTop, setNavTop] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const handleClick = () => {
    setNav(false);
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#09254d');
        setNavTop(true);
      } else {
        setColor('transparent');
        setTextColor('#cbcbcb');
        setNavTop(false);
      }
    }

    // Add an initial call to avoid delay on page load
    changeColor();

    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    }
  }, []);

  return (
    <div style={{ backgroundColor: color }} className={`w-full z-50 ease-in duration-300 uppercase fixed top-0 left-0 ${navTop ? 'py-0' : 'py-1'}`}>
      <div className={`ease-in duration-300 flex justify-between px-4 items-center text-white ${navTop ? "py-0" : "py-1"}`}>
        <Link href='/'>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/AS247-logo.png?alt=media&token=2c7a503b-0b41-454f-bea0-ea9e9b9d4577"
            alt="AS247 Security"
            width={100}
            height={100}
          />
        </Link>
        <ul style={{ color: textColor }} className='hidden sm:flex space-x-4'>
          <li className='hover:text-white'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-white'>
            <Link href='/solutions'>Solutions</Link>
          </li>
          <li className='hover:text-white'>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 pr-6">
          {nav ? <AiOutlineClose size={20} style={{ color: textColor }}/> : <AiOutlineMenu size={20} style={{ color: textColor }}/>}
        </div>
        {/* Mobile Menu */}
        <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-[100%] bg-blue-950 text-center ease-in duration-300" 
        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-[100%] bg-blue-950 text-center ease-in duration-300"}>
          <ul className="text-white space-y-4">
            <li className='hover:text-gray-300'>
              <Link href='/' onClick={handleClick}>Home</Link>
            </li>
            <li className='hover:text-gray-300'>
              <Link href='/solutions' onClick={handleClick}>Solutions</Link>
            </li>
            <li className='hover:text-gray-300'>
              <Link href='/contact' onClick={handleClick}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
