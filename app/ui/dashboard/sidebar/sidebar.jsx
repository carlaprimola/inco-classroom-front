// import React, { useState, useEffect } from 'react';
// import { fetchUsers } from "/app/lib/data.js";
// import MenuLink from "./menuLink/menuLink";
// import styles from "./sidebar.module.css";
// import { MdDashboard, MdSupervisedUserCircle, MdBook, MdQueryStats, MdCalendarMonth, MdOutlineSettings, MdHelpCenter, MdLogout } from "react-icons/md";
// import Link from 'next/link';

// const Sidebar = ({ searchParams }) => {
//     const [userData, setUserData] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const handleLogout = () => {
//         setShowModal(true);
//     };

//     const cancelLogout = () => {
//         setShowModal(false);
//     };

//     useEffect(() => {
//         const loadUserData = async () => {
//             try {
//                 const user = await fetchUsers();
//                 setUserData(user);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         loadUserData();
//     }, [searchParams]);

//     const isTeacher = userData && userData.role.TipoRol === 'Docente';

//     const menuItems = [
//         {
//             title: "Pages",
//             list: [
//                 {
//                     title: "Inicio",
//                     path: "/dashboard",
//                     icon: <MdDashboard />,
//                 },
//                 {
//                     title: "Usuario",
//                     path: "/dashboard/usuarios",
//                     icon: <MdSupervisedUserCircle />,
//                 },



//             ],
//         },
//         {
//             list: [
//                 {
//                     title: "Notas",
//                     path: "/dashboard/notas",
//                     icon: <MdQueryStats />,
//                 },
//                 {
//                     title: "Calendario",
//                     path: "/dashboard/calendario",
//                     icon: <MdCalendarMonth />,
//                 },
//                 {
//                     title: isTeacher ? "Configurar Cursos" : "Mis Cursos",
//                     path: isTeacher ? "/dashboard/settings" : "/dashboard/miscursos",
//                     icon: <MdBook />,
//                 },
//             ],
//         },
//     ];

//     // Si el usuario no es un profesor, ocultar los elementos "Configurar Cursos" y "Notas" del menú
//     if (!isTeacher) {
//         menuItems[2].list = menuItems[2].list.filter(item => item.title !== "Configurar Cursos");
//         menuItems[1].list = menuItems[1].list.filter(item => item.title !== "Notas");

//     }

//     return (
//         <div className={styles.container}>
//             <div className="flex items-center justify-center">
//                 <div className=" flex flex-row-reverse flex-nowrap items-end">
//                     <div className={`${styles.userImage} rounded-full overflow-hidden w-24 h-24 mb-3`}>
//                         <img
//                             className="object-cover w-full h-full"
//                             src={userData ? userData.imgProfile : ''}
//                             alt={userData ? userData.name : ''}
//                             width={100}
//                             height={100}
//                         />
//                     </div>
//                     <div className={`${styles.userDetail} p-4`}>
//                         <span>{userData ? userData.Nombre : 'Cargando...'}</span>
//                         <span className={styles.userTitle}>{userData ? userData.role.TipoRol : 'Cargando...'} </span>
//                     </div>
//                 </div>
//             </div>
//             <ul className={styles.list}>
//                 {menuItems.map((cat, index) => (
//                     <li key={index}>
//                         <span className={styles.username}>{userData ? userData.name : ''}</span>
//                         {cat.list.map((item, index) => (
//                             <MenuLink item={item} key={index} />
//                         ))}
//                     </li>
//                 ))}
//             </ul>
//            {/* Botón para cerrar sesión */}
//            <button className="w-[100%]" onClick={handleLogout}>
//     <span className={styles.logout}><MdLogout />Cerrar sesión</span>
// </button>

// {/* Modal de confirmación */}
// {showModal && (
//     <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
//         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//         <div className="max-w-md border rounded-lg relative">
//             <div className="flex flex-col p-5 rounded-lg shadow bg-white">
//                 <div className="flex">
//                     <div>
//                         <svg
//                             className="w-6 h-6 fill-current text-red-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M0 0h24v24H0V0z" fill="none" />
//                             <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
//                         </svg>
//                     </div>
//                     <div className="ml-3 text-black">
//                         <h2 className="font-semibold text-gray-800">
//                             ¿Estás seguro de que deseas cerrar sesión?
//                         </h2>
//                         <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                             Esta acción cerrará tu sesión actual y te desconectará de la aplicación.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex justify-end items-center mt-3">
//                 <Link legacyBehavior href="/login" >
//                 <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md">

//                 Sí
//                 </button>

//                     </Link>


//                     <button
//                         onClick={cancelLogout}
//                         className="px-4 py-2 ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
//                     >
//                         Cancelar
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
//       )}
//         </div>
//     );
// };

// export default Sidebar;



import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { MdDashboard, MdSupervisedUserCircle, MdBook, MdQueryStats, MdCalendarMonth, MdOutlineSettings, MdHelpCenter, MdLogout } from "react-icons/md";
import Link from 'next/link';

const Sidebar = ({ searchParams }) => {
    const [userData, setUserData] = useState(null);
        const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        setShowModal(true);
    };

    const cancelLogout = () => {
        setShowModal(false);
    };

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
                {
                    title: "Configurar Cursos",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />,
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
                <Link className={styles.logout} href='#' onClick={handleLogout}><MdLogout />Cerrar sesión</Link>
            </button>
            {/* Modal de confirmación */}
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    <div className="max-w-md border rounded-lg relative">
                        <div className="flex flex-col p-5 rounded-lg shadow bg-white">
                            <div className="flex">
                                <div>
                                    <svg
                                        className="w-6 h-6 fill-current text-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </div>
                                <div className="ml-3 text-black">
                                    <h2 className="font-semibold text-gray-800">
                                        ¿Estás seguro de que deseas cerrar sesión?
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                        Esta acción cerrará tu sesión actual y te desconectará de la aplicación.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-3">
                                <Link legacyBehavior href="/login" >
                                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md">

                                        Sí
                                    </button>

                                </Link>


                                <button
                                    onClick={cancelLogout}
                                    className="px-4 py-2 ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
