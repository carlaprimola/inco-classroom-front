'use client';
import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js"; // Importa la función fetchUsers
import Search from "/app/ui/dashboard/search/search";
import styles from "/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import { UserProvider } from '../contexts/UserContext';

const UsersPage = ({ searchParams }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const user = await fetchUsers();
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        loadUserData();
    }, [searchParams]);

    return (
        <UserProvider>
            <div className={styles.container}>
                <div className={styles.top}>
                    {/* <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link> */}
                </div>
                <div className="bg-gray-100 min-h-screen py-16 text-black">
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={userData ? userData.imgProfile : ''} alt={userData ? userData.Nombre : 'Cargando...'} />
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">
                                {userData ? userData.Nombre : 'Cargando...'}
                                </p>
                                <p className="text-slate-500 font-medium">
                                {userData ? userData.role.TipoRol : 'Cargando...'}
                                </p>
                            </div>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Email: {userData ? userData.Email : 'Cargando...'}</button>
                        </div>
                    </div>                
                </div>
               



            </div>
        </UserProvider>
    );
};

export default UsersPage;
