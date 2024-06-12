import { FC } from "react";

type Product = {
  id: string;
  name: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
const addToCart = (id: string) => console.log("Adding ", id);

  return (
    <div>
      <h1>Products</h1>
      {products &&
        products.map((p) => (
          <div key={p.id}>
            {p.name} <button onClick={() => addToCart(p.id)}>+</button>
          </div>
        ))}
    </div>
  );
};
export default ProductList;
