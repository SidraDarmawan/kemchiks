'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center">
            {/* Background Image */}
            <Image
                src="/images/image1.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 -z-10"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
            <div className="relative z-10 text-center text-yellow-400 p-6">
                <h1 className="text-5xl font-bold">Welcome To Our Home!</h1>
                <p className="mt-4 text-xl">Let&apos;s Start Walking</p>
            </div>
        </section>
    );
}

export default Hero;