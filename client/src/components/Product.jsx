export default function Product({ product }) {
  return (
    <div className=" flex border m-3 p-2 items-start">
      <img
        src={product.image}
        alt={product.name}
        className=" border-2 shrink-0 object-cover  h-40 w-40 "
      />
      <div className=" overflow-hidden ">
        <div className="flex flex-col shrink ml-2 ">
          <div className="font-bold">{product.name}</div>
          <div className="shrink my-1">{product.description}</div>
          <div className="space-x-2">
            <span>{product.brand}</span>
            <span>{product.category}</span>
          </div>
          <div className="flex space-x-5">
            <span>{product.price}$</span>
            <span>{product.countInStock} left</span>
          </div>
          <div className="space-x-5 ">
            <span>{product.rating} rating</span>
            <span>({product.numReviews})reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
