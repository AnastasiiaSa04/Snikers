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
        <>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>  
    <div className={styles.totalPrice}>
        <p>Итого</p>
            {cartItems.map(item => (
        <p key={item.id}>{item.name}</p>
  ))}
        <p>{totalPrice.toLocaleString("eu-EU")} E</p>
</div>
        </>
      )}
    </div>
  );
}

export default Cart;

 {/* Итого {totalPrice.toLocaleString("eu-EU")} */}