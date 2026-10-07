import Product from "../components/Product";
import { products } from "../data/products";

export function HomeScreen() {
  return (
    <div className="grid  xl:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-4">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}
