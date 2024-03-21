'use client'
import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/Sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"
import { UserProvider } from '../contexts/UserContext';

const Layout = ({ children }) => {
    return (
        <UserProvider>
        <main className={styles.container}>
            <section className={styles.menu}>
                <Sidebar />
            </section>
            <navigator className={styles.content}>
                <Navbar />
                {children}
                {/* <Footer /> */}
            </navigator>
        </main>
        </UserProvider>
    )
}

export default Layout