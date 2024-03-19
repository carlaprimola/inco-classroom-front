"use client"
import Image from 'next/image'
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { fetchUsers } from '../../../lib/data';
import React,{ useState, useEffect} from 'react';
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
                path: "/dashboard/users",
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




const Sidebar = ({ searchParams })=> {
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
            <div className={styles.user}>
            <Image className={`${styles.userImage}`} 
                    src={userData ? userData.imgProfile : ''} 
                    alt={userData ? userData.name : ''} 
                    width={100} 
                    height={100}
                />
                
                <div className={styles.userDetail}>
                <span>{userData ? userData.Nombre : 'Loading...'}</span>
                <span className={styles.userTitle}>{userData ? userData.role.TipoRol : 'Loading...'} </span>
               
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.username}>{userData ? userData.name : ''}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <button  >
            <Link  className={styles.logout} href='/login'><MdLogout />Cerrar sesión
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