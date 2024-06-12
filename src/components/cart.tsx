import { useCartStoreSelectors } from "../store/cartStore";

const Cart = () => {
  

  const cartItems = useCartStoreSelectors.use.cart();
  const removeItem = useCartStoreSelectors.use.removeItem();
  const clearCart = useCartStoreSelectors.use.clearCart();

  return (
    <div>
      <h1>Cart</h1>
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            {item.name} <button onClick={() => removeItem(item.id)}>-</button>
          </div>
        ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};
export default Cart;
