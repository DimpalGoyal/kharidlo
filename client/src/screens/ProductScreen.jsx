import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductScreen() {
  const { id } = useParams("id");
  const product = products.find((p) => p.id == id);
  console.log(product);

  return (
    <div className="m-5 flex justify-center items-center h-screen ">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <img
            src={product.image}
            alt={product.name}
            className="  rounded-2xl p-1 h-auto w-full"
          />
        </div>
        <div className=" text-left mr-20 border ml-5">
          <div className="flex flex-col shrink ml-2 ">
            <div className="font-bold text-4xl">{product.name}</div>
            <div className=" mt-5 my-1 text-xl  text-gray-700">
              {product.description}
            </div>
            <div className="mt-4 text-2xl ">
              <span className="text-yellow-500">{product.rating}</span>
              <span className="text-gray-500"> ({product.numReviews} reviews)</span>
            </div>
            {/* <div className="space-x-1  mt-10">
              <span className="bg-yellow-100 py-1 px-3 rounded-xl">
                {product.brand}
              </span>
              <span className="bg-yellow-50 py-1 px-3 rounded-xl">
                {product.category}
              </span>
            </div> */}
            <div className="flex flex-col space-x-5">
              <span className="font-bold text-green-800">{product.price}$</span>
              <span>{product.countInStock} left</span>
            </div>
            <div className="">
              <label htmlFor="quantity">Quantity: </label>
              <select
                id="quantity"
                className="px-2 bg-white py-1 rounded-xl border "
              >
                {[...Array(product.countInStock).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
