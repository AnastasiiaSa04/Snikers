import { useCart } from "../../context/cartContext" 
import styles from "./styles.module.css"
import deleteCorb from "../../assets/deleteCorb.png"

function CartCard({ product }) {
  const { removeFromCart } = useCart()
  const handleRemove = () => {
    removeFromCart(product.id)
  }

  return (
<div className={styles.cartCard}>
        <img src={product.image} alt={product.name} className={styles.snikersPic} />
  <div className={styles.cartInfo}> 
        <h3>{product.name}</h3>
    <div className={styles.priceBlock}>
        <span>Цена:</span>
        <p>{product.price}€</p>
    </div>
          <button className={styles.deleteBtn} onClick={handleRemove}>
                <img src={deleteCorb} alt="Удалить" />
          </button>
  </div>
</div>
  )
}

export default CartCard