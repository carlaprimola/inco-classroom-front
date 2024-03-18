"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import MenuLink from './menuLink/menuLink.jsx';
import styles from "./sidebar.module.css";
import { MdLogout } from "react-icons/md";
import Link from 'next/link';

const Sidebar = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userDataString = localStorage.getItem('user');
      
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} 
                    src={userData ? userData.image : ''} 
                    alt={userData ? userData.name : ''} 
                    width={50} 
                    height={50}
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>{userData ? userData.name : ''}</span>
                    <span className={styles.userTitle}>{userData ? userData.role : ''}</span>
                </div>
            </div>
            <ul className={styles.list}>
                {/* Menú de la barra lateral */}
            </ul>
            <button>
                <Link className={styles.logout} href='/login'><MdLogout />Cerrar sesión</Link>
            </button>
        </div>
    );
};

export default Sidebar;
