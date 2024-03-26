// Layout.jsx
'use client'
import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar.jsx"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"
import { UserProvider, useUser } from '../contexts/UserContext'; // Importamos useUser
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({ children }) => {
    const userData = useUser();
    
    return (
        <UserProvider>
            <main className={styles.container}>
                <section className={styles.menu}>
                    <Sidebar />
                </section>
                <section className={styles.content}>
                    <Navbar userData={userData} />
                    {children}
                    {/* <Footer /> */}
                    <ToastContainer /> 
                </section>
            </main>
        </UserProvider>
    )
}
export default Layout;
