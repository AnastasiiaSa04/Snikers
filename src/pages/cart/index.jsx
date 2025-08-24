import styles from "./styles.module.css";
import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard"; 

function Cart() {
  const { cartItems } = useCart();
  console.log(cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
<div className={styles.cartMain}>
  <h1>Корзина</h1>
  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <div className={styles.cartContent}>
      <div className={styles.cartItems}>
        {cartItems.map(item => (
          <CartCard key={item.id} product={item} />
        ))}
      </div>
      <div className={styles.totalPrice}>
        <p className={styles.total}>Итого</p>
        {cartItems.map(item => (
          <p className={styles.info} key={item.id}>{item.name}</p>
        ))}
      <div className={styles.price}>
        <div className={styles.priceLine}></div>
            <span>Цена:</span>
                <p>{totalPrice.toLocaleString("eu-EU")}€</p>
        </div>
      </div>
    </div>
  )}
</div>
  );
}

export default Cart;

 {/* Итого {totalPrice.toLocaleString("eu-EU")} */}