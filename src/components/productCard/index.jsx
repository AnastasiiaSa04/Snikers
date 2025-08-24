import { useState } from "react";
import styles from "./styles.module.css";
import BtnAdd from "../../assets/BtnAdd.png";
import BtnAddBlack from "../../assets/BtnAddBlack.png";
import { useCart } from "../../context/cartContext";

function ProductCard({ id, name, image, price }) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleClick = () => {
    if (!added) addToCart({ id, name, image, price });
    setAdded(!added);
  };

  const smokeParticles = Array.from({ length: 300 }, (_, i) => i);

  return (
    <div
      className={styles.cardWrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.image} />
        <h2 className={styles.title}>{name}</h2>
        <p>Цена:</p>
        <div className={styles.priceAdd}>
          <p className={styles.price}>{price}</p>
          <img
            src={buttonHovered ? BtnAddBlack : BtnAdd}
            alt="cart button"
            className={styles.iconButton}
            onClick={handleClick}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          />
        </div>
      </div>


      {hovered && (
        <div className={styles.smokeWrapper}>
          {smokeParticles.map((_, idx) => {
            const delay = Math.random() * 0.5; 


            return (
              <div
                key={idx}
                className={styles.smoke}
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${8 + Math.random() * 50}px`,
                  height: `${8 + Math.random() * 100}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${0.3 + Math.random() * 2}s`
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductCard;