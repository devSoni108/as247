"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home" },
  { href: "/solutions", text: "Solutions" },
  { href: "/contact", text: "Contact Us" },
];

const Navbar = () => {
  const path = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [isScrolled, setScrolled] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  const handleScroll = () => {
    const scrollThreshold = 90;
    if (window.scrollY >= scrollThreshold) {
      setBackgroundColor('#ffffff');
      setTextColor('#09254d');
      setScrolled(true);
    } else {
      setBackgroundColor('transparent');
      setTextColor('#cbcbcb');
      setScrolled(false);
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const mobileMenuClass = isMobileMenuOpen
  ? 'fixed top-0 left-0 right-0 bottom-0 h-screen flex justify-center items-center'
  : 'absolute top-0 left-[-100%] h-screen flex justify-center items-center';

  return (
    <div style={{ backgroundColor }} className={`w-full z-50 ease-in duration-300 uppercase fixed top-0 left-0 ${isScrolled ? 'py-0' : 'py-1'}`}>
      <div className={`ease-in duration-300 flex justify-between px-4 items-center text-white ${isScrolled ? "py-0" : "py-1"}`}>
        <Link href='/'>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/AS247-logo.png?alt=media&token=2c7a503b-0b41-454f-bea0-ea9e9b9d4577"
            alt="AS247 Security"
            width={100}
            height={100}
          />
        </Link>
        <ul style={{ color: textColor }} className='hidden sm:flex space-x-4'>
        {links.map((l) => (
          <li className="pr-2" key={l.href}>
            <Link
              className={`${
                l.href === path ? "text-sky-300 font-bold" : ""
              } text-base`}
              href={l.href}
            >
              {l.text}
            </Link>
          </li>
        ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleMobileMenu} className="block sm:hidden z-10 pr-6">
          {isMobileMenuOpen ? <AiOutlineClose size={20} style={{ color: textColor }}/> : <AiOutlineMenu size={20} style={{ color: textColor }}/>}
        </div>
        {/* Mobile Menu */}
        <div className={`sm:hidden ${mobileMenuClass} w-full h-[100%] bg-blue-950 text-center ease-in duration-300`}>
          <ul className="text-white space-y-4">
            <li className={`hover:text-gray-300 ${isScrolled ? "hover:text-gray-300" : ""}`}>
              <Link href='/' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className={`hover:text-gray-300 ${isScrolled ? "hover:text-gray-300" : ""}`}>
              <Link href='/solutions' onClick={closeMobileMenu}>Solutions</Link>
            </li>
            <li className={`hover:text-gray-300 ${isScrolled ? "hover:text-gray-300" : ""}`}>
              <Link href='/contact' onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
