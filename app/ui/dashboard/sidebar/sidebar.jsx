import Image from 'next/image'
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
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

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={`${styles.userImage}`} 
                src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagen_Alfie_Profesor"
                width={100}
                height={100}/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>Alfredo</span>
                    <span className={styles.userTitle}>Profesor</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
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