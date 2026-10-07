import Product from "../components/Product";
import { products } from "../data/products";

export function HomeScreen() {
  return (
    <div className="grid grid-cols-3">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}
