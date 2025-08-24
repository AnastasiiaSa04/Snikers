import styles from "./styles.module.css";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import Instagramm from "../../assets/Instagramm.png";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email отправлен!");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <h2>Контакты</h2>
        <h6>8 800 000 00 00</h6>
        <h6>emailexample@email.com</h6>
        <p>2024 Сникер-магазин. Все права защищены</p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.socialLinks}>
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagramm} alt="instagram" />
      </div>


        <form className={styles.footerForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введите свой email"
            className={styles.emailInput}
          />
        </form>
      </div>
    </footer>
  );
}

export default Footer;