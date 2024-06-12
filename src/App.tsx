import Cart from "./components/cart";
import ProductList from "./components/productList"

const products = [
  {id: '1', name: 'Mobile'},
  {id: '2', name: 'Tablet'},
  {id: '3', name: 'PC'},
]

function App() {
  return (
    <>
      <h1>Main</h1>
      <ProductList products={products} />
      <Cart />
    </>
  );
}

export default App;
