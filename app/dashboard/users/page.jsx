// users/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js"; // Importa la función fetchUsers
import Search from "/app/ui/dashboard/search/search";
import styles from "/app/ui/dashboard/users/users.module.css";
// Importa Image de 'next/image' si es necesario
import Link from "next/link";


const UsersPage = ({ searchParams }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const usersData = await fetchUsers(searchParams?.q || "", searchParams?.page || 1);
                setUsers(usersData); // Asigna directamente los datos de usuarios al estado de usuarios
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        loadUsers();
    }, [searchParams]);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link className='text-black' href="/dashboard/users/add">
                    <button className= {styles.addButton}>Add New</button>
                </Link>
            </div>
            <div className="text-black bg-gray-100 min-h-screen py-16">
                <div className="text-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {users.map(user => (
                            <div key={user.ID} className="text-black bg-white rounded-lg shadow-md overflow-hidden">
                                {/* Agrega las propiedades del usuario que deseas mostrar */}
                                <div className="text-black p-6">
                                    <h2 className="text-black text-xl font-semibold mb-2">{user.Nombre}</h2>
                                    <p className='text-black'>Email: {user.Email}</p>
                                    {/* Mostrar el rol del usuario */}
                                    <p className='text-black'>Rol: {user.role.TipoRol}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
