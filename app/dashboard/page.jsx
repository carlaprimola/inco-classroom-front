import Card from "../ui/dashboard/card/card";
import Footer from "../ui/dashboard/footer/footer.jsx"
import styles from "../ui/dashboard/dashboard.module.css";
// import Rightbar from "../ui/dashboard/rightbar/rightbar";


const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {/* {cards.map((item) => (
                        <Card item={item} key={item.id} />
                    ))} */}
                    
                </div>

            </div>
            <div className={styles.side}>
                {/* <Rightbar /> */}
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Dashboard;