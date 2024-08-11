"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface User {
    name: {
        first: string;
        last: string;
    };
    picture: {
        large: string;
    };
    email: string;
    phone: string;
    location: {
        city: string;
        country: string;
    };
}

const TeamsPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://randomuser.me/api/?results=6');
            const data = await response.json();
            setUsers(data.results);
        };

        fetchUsers();
    }, []);

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Teams</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {users.map((user, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Image
                                src={user.picture.large}
                                alt={`${user.name.first} ${user.name.last}`}
                                width={128} // Ukuran gambar yang sesuai
                                height={128} // Ukuran gambar yang sesuai
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">
                                {user.name.first} {user.name.last}
                            </h3>
                            <p className="text-gray-600">{user.location.city}, {user.location.country}</p>
                            <p className="text-gray-600 mt-2">{user.email}</p>
                            <p className="text-gray-600">{user.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamsPage;