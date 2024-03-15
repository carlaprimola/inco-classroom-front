import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"

const Layout = ({ children }) => {
    return (
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
    )
}

export default Layout