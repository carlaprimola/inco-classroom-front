import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js";
import MenuLink from "./menuLink/menuLink";
import { MdDashboard, MdSupervisedUserCircle, MdBook, MdQueryStats, MdCalendarMonth, MdOutlineSettings, MdHelpCenter, MdLogout, MdMenu } from "react-icons/md";
import Link from 'next/link';
import styles from "./sidebar.module.css";
import ButtonDashboard from '../button/ButtonDashboard';

const Sidebar = ({ searchParams, isOpen, toggleSidebar }) => {
    const [userData, setUserData] = useState(null);
    // const [sidebarWidth, setSidebarWidth] = useState('full'); // Estado para controlar el ancho del sidebar

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
            title: "",
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
            list: [
                {
                    title: "Promedio",
                    path: "/dashboard/notas",
                    icon: <MdQueryStats />,
                },
                {
                    title: "Calendario",
                    path: "/dashboard/teams",
                    icon: <MdCalendarMonth />,
                },
                {
                    title: "Configurar Cursos",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />,
                },
                {
                    title: "Cerrar sesión",
                    path: "/login",
                    icon: <MdLogout />,
                },
            ],
        },
    ];

    // Si el usuario es un estudiante, ocultar el elemento "Configurar Cursos" del menú
    if (!isTeacher) {
        menuItems[0].list = menuItems[0].list.filter(item => item.title !== "Configurar Cursos");
    }


    return (
        <div className={`${styles.container}`}> {/* Aplica la clase condicional para cambiar el ancho */}
            <div className="flex items-center justify-between p-4 ">
                <span className="absolute cursor-pointer right-1 top-[-10px]">
                   
                </span>
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
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <ul className="py-4">
                    {menuItems.map((cat, index) => (
                        <li key={index}>
                            <span className={`block w-full text-center md:text-left py-2 px-4 text-sm font-semibold ${isOpen ? 'md:pl-4' : ''}`}>{cat.title}</span>
                            {cat.list.map((item, index) => (
                                <MenuLink item={item} key={index} isOpen={isOpen} />
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;