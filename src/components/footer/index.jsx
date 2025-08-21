import styles from "./styles.module.css"
import Facebook from "../../assets/Facebook.png"
import Twitter from "../../assets/Twitter.png"
import Instagramm from "../../assets/Instagramm.png"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contacts}>
                <h2>Контакты</h2>
                <p>8 800 000 00 00</p>
                <p>emailexample@email.com</p>
                <p>2024 Сникер-магазин. Все права защищены</p>
            </div>
            <div>
                <div className={styles.socialLinks}>
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Instagramm} alt="Instagramm" />
                    <input type="text" placeholder="Введите свой email" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;