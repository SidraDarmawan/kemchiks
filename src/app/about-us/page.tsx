import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
              <p className="text-lg text-gray-700">
                At Kemchicks, we are committed to providing our customers with the highest quality products and exceptional service. 
                With over 30 years of experience, we have become a trusted name in the industry, known for our dedication to quality 
                and community involvement.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Our team is passionate about delivering an outstanding shopping experience and we continuously strive to innovate 
                and enhance our offerings. We believe in building strong relationships with our customers and supporting local producers.
              </p>
            </div>
            <div className="flex-1">
              <Image 
                src="/images/image2.jpg" 
                alt="About Us"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-white py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member  */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image 
                src="/images/services1.jpg"
                alt="Team Member 1"
                width={200}
                height={200}
                className="rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Bob Sadino</h3>
              <p className="text-gray-600 text-center">CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image 
                src="/images/servis2.jpg"
                alt="Team Member 2"
                width={200}
                height={200}
                className="rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Daus Mini</h3>
              <p className="text-gray-600 text-center">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image 
                src="/images/servis3.jpg"
                alt="Team Member 3"
                width={200}
                height={200}
                className="rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Tina Toon</h3>
              <p className="text-gray-600 text-center">COO</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;