import Card from "../ui/dashboard/card/card";
import Footer from "../ui/dashboard/footer/footer.jsx"
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";


const Dashboard = () => {
    return (
        <main className={styles.wrapper}>
            <section className={styles.main}>
                <article className={styles.cards}>
                    {/* este çes el contenedor centrral, dentro de nuestro dashborad */}
                    {/* {cards.map((item) => (
                        <Card item={item} key={item.id} />
                    ))} */}
                    
                </article>

            </section>
            <aside className={styles.side}>
                {/* <Rightbar /> */}
            </aside>
            {/* <Footer/> */}
        </main>
    );
};

export default Dashboard;