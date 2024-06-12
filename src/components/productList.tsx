import { FC } from "react";
import { useCartStore } from "../store/cartStore";

export type Product = {
  id: string;
  name: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  const store = useCartStore();
  const addToCart = (product: Product) => store.addToCart(product);

  return (
    <div>
      <h1>Products</h1>
      {products &&
        products.map((p) => (
          <div key={p.id}>
            {p.name} <button onClick={() => addToCart(p)}>+</button>
          </div>
        ))}
    </div>
  );
};
export default ProductList;
