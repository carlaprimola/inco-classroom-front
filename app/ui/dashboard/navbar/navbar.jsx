// navbar.jsx
'use client'
import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js";
import Link from 'next/link';
import styles from './navbar.module.css';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const Navbar = ({ searchParams }) => {
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

    const isTeacher = userData && userData.role.TipoRol === 'Docente';


    return (

        <div className={styles.container}>
        <div className={styles.title}>{userData ? userData.Nombre : 'Cargando...'}</div>
        <p>{userData ? userData.role.TipoRol : 'Cargando...'}</p>
        <div className={styles.menu}>
            {/* <div className={styles.search}>
                <MdSearch/>
                <input type="text" placeholder="Buscar..." className={styles.input}/>
            </div> */}
            {/* <div className={styles.icons}>
                <MdOutlineChat size={20}/>
                <MdNotifications size={20}/>
                <MdPublic size={20}/>
            </div> */}
        </div>
    </div>
  
    );
};

export default Navbar;
