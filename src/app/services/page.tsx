"use client";

import React from 'react';

const servicesData = [
    {
        title: 'Exclusive Supermarket',
        description: 'Pasta and Gratin by Dapur Mini'
        
    },
    {
        title: 'Salad',
        description: 'by Dapur Mini'
    },
    {
        title: 'Waroeng',
        description: 'Ramadan Set Menu for Special Occasion'
    }
];

const Services: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;