// Layout.jsx
'use client'
import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/Sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"
import { UserProvider, useUser } from '../contexts/UserContext'; 

const Layout = ({ children }) => {
    const userData = useUser(); // Obtenemos los datos del usuario del contexto
    // console.log("se supone",userData)
    return (
        <UserProvider>
            <main className={styles.container}>
                <section className={styles.menu}>
                    <Sidebar />
                </section>
                <section className={styles.content}>
                    <Navbar userData={userData} /> {/* Pasamos los datos del usuario al Navbar */}
                   
                    {children}
                    {/* <Footer /> */}
                </section>
            </main>
        </UserProvider>
    )
}

export default Layout;
