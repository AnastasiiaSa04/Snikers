import { useCart } from "../../context/cartContext" 
import styles from "./styles.module.css"
import deleteCorb from "../../assets/deleteCorb.png"

function CartCard({product}) {
    const {removeFromCart} = useCart();
    const handleRemove = () => {
        removeFromCart(product.id);
    }  
    return (
        <div className={styles.cartCard}>
            <img src={product.image} alt={product.name} className={styles.image}></img>
            <h3>{product.name}</h3>
            <div>Price:
                <p>{product.price} evriki</p>
                     <img className={styles.deleteCorb} 
                          onClick={handleRemove}  
                          src={deleteCorb} 
                          alt="delete Button" />
               
            </div>
        </div>
    )
}

export default CartCard;