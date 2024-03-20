"use client"
import Image from 'next/image'
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { fetchUsers } from '../../../lib/data';
import React, { useState, useEffect } from 'react';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdBook,
    MdCalendarMonth,
    MdQueryStats,
    MdNote,
    MdNotes,
} from "react-icons/md";
import Link from 'next/link';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Inicio",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Usuario",
                path: "/dashboard/usuarios",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Cursos",
                path: "/dashboard/cursos",
                icon: <MdBook />,
            },
        ],
    },
    {
        // title: "Notas",
        list: [
            {
                title: "Promedio",
                path: "/dashboard/revenue",
                icon: <MdQueryStats />,
            },
            {
                title: "Clases",
                path: "/dashboard/reports",
                icon: <MdNotes />,
            },
            {
                title: "Calendario",
                path: "/dashboard/teams",
                icon: <MdCalendarMonth />,
            },
        ],
    },
    {
        title: "Configuración",
        list: [
            {
                title: "Configurar Cursos",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Ayuda",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];




const Sidebar = ({ searchParams }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const user = await fetchUsers();
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user name:', error);
            }
        };
        loadUserData();
    }, [searchParams]);

    return (
        <div className={styles.container}>
            <div className="flex items-center justify-center">
                <div className=" flex flex-row-reverse flex-nowrap items-end">
                    <div className={`${styles.userImage} rounded-full overflow-hidden w-24 h-24 mb-3`}>
                        <Image
                            className="object-cover w-full h-full"
                            src={userData ? userData.imgProfile : ''}
                            alt={userData ? userData.name : ''}
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className={`${styles.userDetail} p-4`}>
                        <span>{userData ? userData.Nombre : 'Cargando...'}</span>
                        <span className={styles.userTitle}>{userData ? userData.role.TipoRol : 'Cargando...'} </span>
                    </div>
                </div>
            </div>

            <ul className={styles.list}>
                {menuItems.map((cat, index) => ( // Agregar un índice como clave para `cat`
                    <li key={index}>
                        <span className={styles.username}>{userData ? userData.name : ''}</span>
                        {cat.list.map((item, index) => ( // Agregar un índice como clave para `item`
                            <MenuLink item={item} key={index} />
                        ))}
                    </li>
                ))}
            </ul>

            <button  >
                <Link className={styles.logout} href='/login'><MdLogout />Cerrar sesión
                </Link>

                {/* <Link> 
                <a href='/login'> 
                    Logout
                </a>
            </Link> */}
            </button>
        </div>
    );
};

export default Sidebar;