'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link href="/home" className="flex items-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Kemchicks Logo" 
              width={50} 
              height={50} 
              className="object-contain"
            />
            <span className="text-xl font-bold ml-2">Kemchicks</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/home" className="hover:underline">Home</Link></li>
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/teams" className="hover:underline">Teams</Link></li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: <a href="mailto:info@kemchicks.com" className="hover:underline">info@kemchicks.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="hover:underline">+123 456 789</a></p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">Instagram</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Kemchicks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;