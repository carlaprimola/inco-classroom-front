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
        title: "Notas",
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
        title: "Usuario",
        list: [
            {
                title: "Settings",
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
                <Image className={styles.userImage} src="" alt=""  width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>G Alexander</span>
                    <span className={styles.userTitle}>Administrador</span>
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
