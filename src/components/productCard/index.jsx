import { useState } from "react";
import styles from "./styles.module.css";
import BtnAdd from "../../assets/BtnAdd.png";
import BtnAddBlack from "../../assets/BtnAddBlack.png";
import { useCart } from "../../context/cartContext";

function ProductCard({ id, name, image, price }) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false); 
  const { addToCart } = useCart();

  const handleClick = () => {
    if (!added) addToCart({ id, name, image, price });
    setAdded(!added);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
      <p>Цена:</p>
      <div className={styles.priceAdd}>
      <p className={styles.price}>{price} ₽</p>

      <img
        src={hovered ? BtnAddBlack : BtnAdd}  
        alt="cart button"
        className={styles.iconButton}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}  
        onMouseLeave={() => setHovered(false)} 
      />
      </div>
    </div>
  );
}

export default ProductCard;