import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { MdDashboard, MdSupervisedUserCircle, MdBook, MdQueryStats, MdCalendarMonth, MdOutlineSettings, MdHelpCenter, MdLogout } from "react-icons/md";
import Link from 'next/link';

const Sidebar = ({ searchParams }) => {
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
            ],
        },
        {
            list: [
                {
                    title: "Notas",
                    path: "/dashboard/notas",
                    icon: <MdQueryStats />,
                },
                {
                    title: "Calendario",
                    path: "/dashboard/calendario",
                    icon: <MdCalendarMonth />,
                },
            ],
        },
        {
            title: "Configuración",
            list: [
                {
                    title: isTeacher ? "Configurar Cursos" : "Mis Cursos",
                    path: isTeacher ? "/dashboard/settings" : "/dashboard/miscursos",
                    icon: <MdBook />,
                },
            ],
        },
    ];
    
    // Si el usuario no es un profesor, ocultar los elementos "Configurar Cursos" y "Notas" del menú
    if (!isTeacher) {
        menuItems[2].list = menuItems[2].list.filter(item => item.title !== "Configurar Cursos");
        menuItems[1].list = menuItems[1].list.filter(item => item.title !== "Notas");
    }

    return (
        <div className={styles.container}>
            <div className="flex items-center justify-center">
                <div className=" flex flex-row-reverse flex-nowrap items-end">
                    <div className={`${styles.userImage} rounded-full overflow-hidden w-24 h-24 mb-3`}>
                        <img
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
                {menuItems.map((cat, index) => (
                    <li key={index}>
                        <span className={styles.username}>{userData ? userData.name : ''}</span>
                        {cat.list.map((item, index) => (
                            <MenuLink item={item} key={index} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className="w-[100%]">
                <Link className={styles.logout} href='/login'><MdLogout />Cerrar sesión</Link>
            </button>
        </div>
    );
};

export default Sidebar;
