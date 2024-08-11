'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="relative h-[12vh] bg-white">
            <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link href="/" className="flex items-center">
                        <Image src="/images/logo.jpg" alt="Kemchicks Logo" width={70} height={70} />
                        <span className="text-black sm:text-[30px] font-semibold">Kemchicks</span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-4 transform transition-transform duration-200 ease-in-out">
                    <Link href="/" className="text-black hover:text-gray-700 transition duration-200">Home</Link>
                    <Link href="/about-us" className="text-black hover:text-gray-700 transition duration-200">About Us</Link>
                    <Link href="/services" className="text-black hover:text-gray-700 transition duration-200">Services</Link>
                    <Link href="/teams" className="text-black hover:text-gray-700 transition duration-200">Teams</Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden text-black focus:outline-none"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden bg-black absolute inset-x-0 top-full mt-2 z-10 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                <Link href="/" className="block px-4 py-2 text-white">Home</Link>
                <Link href="/about-us" className="block px-4 py-2 text-white">About Us</Link>
                <Link href="/services" className="block px-4 py-2 text-white">Services</Link>
                <Link href="/teams" className="block px-4 py-2 text-white">Teams</Link>
            </div>
        </nav>
    );
}

export default Navbar;
