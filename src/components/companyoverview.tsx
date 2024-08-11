import React from 'react';
import Image from 'next/image';

const CompanyOverview: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Company Overview</h2>
        
        {/* Konten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar */}
          <div className="flex justify-center items-center">
            <Image 
              src="/images/image2.jpg" 
              alt="Company Building"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Konten */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h3>
            <p className="text-lg text-gray-700 mb-4">
              Founded over 30 years ago, KemChicks has been a pioneer in providing high-quality retail services. <br />
              Starting as a small grocery store, we have grown into a well-known brand that customers trust for their daily needs.
            </p>
            <p className="text-lg text-gray-700">
              Our journey is marked by a commitment to quality and customer satisfaction. Over the years, <br />
              we have expanded our offerings to include fresh produce, household items, and gourmet foods, all while maintaining the same level of excellence.
            </p>
          </div>
        </div>

        {/* Misi Perusahaan */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-4">
            At KemChicks, our mission is to provide our customers with the best shopping experience by offering high-quality products and exceptional service. <br />
            We believe in the importance of community and strive to support local farmers and producers.
          </p>
          <p className="text-lg text-gray-700">
            We are committed to sustainability and continue to innovate in ways that reduce our environmental impact while enhancing the shopping experience for our customers. <br />
            Our goal is to be the leading retail brand in the region, known for quality, service, and community involvement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;