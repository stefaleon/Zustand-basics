import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const store = useCartStore();

  const cartItems = store.cart;
  const removeItem = (id: string) => store.removeItem(id);
  const clearCart = store.clearCart;

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
