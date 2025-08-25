import { useState } from "react";
import styles from "./styles.module.css";
import Boo from "../../icons/Boo.svg";
import X from "../../icons/X.svg";
import Fb from "../../icons/Fb.svg";

function Contacts() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

const validate = () => {
  let newErrors = {};

  if (!formData.email) {
    newErrors.email = "Введите email";
  } else if (!formData.email.includes("@")) {
    newErrors.email = "Email должен содержать символ @";
  }


  if (!formData.name) {
    newErrors.name = "Введите имя";
  } else if (formData.name.length < 2) {
    newErrors.name = "Имя должно содержать минимум 2 символа";
  }

  if (!formData.message) {
    newErrors.message = "Введите сообщение";
  } else if (formData.message.length < 10) {
    newErrors.message = "Сообщение должно быть минимум 10 символов";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Форма успешно отправлена ");
      setFormData({ email: "", name: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className={styles.contactsMain}>
      <h1>Контакты</h1>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <ul className={styles.contactsList}>
            <li>8 800 000 00 00</li>
            <li>emailexample@email.com</li>
          </ul>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputsRow}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Ваш email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>
            </div>

            <div className={styles.messageRow}>
              <textarea
                placeholder="Введите сообщение"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <button type="submit">Отправить</button>
          </form>
        </div>
        <div className={styles.rightColumn}>
          <p>Найдите нас:</p>
          <div className={styles.socialIcons}>
            <img src={Boo} alt="Boo" />
            <img src={X} alt="X" />
            <img src={Fb} alt="Fb" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;