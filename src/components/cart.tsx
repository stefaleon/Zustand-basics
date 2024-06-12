const Cart = () => {
  const cartItems = [
    { id: "1", name: "Mobile" },
    { id: "2", name: "Tablet" },
  ];

  const removeItem = (id: string) => console.log("Removing ", id);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            {item.name} <button onClick={() => removeItem(item.id)}>-</button>
          </div>
        ))}
    </div>
  );
};
export default Cart;
