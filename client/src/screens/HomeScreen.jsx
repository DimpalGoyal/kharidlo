import Product from "../components/Product";
import { products } from "../data/products";

export function HomeScreen() {
  return (
    <div className="grid  2xl:grid-cols-3 lg:grid-cols-2 mx-3 mt-20 lg:mx-30 lg:mt-30 ">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}
