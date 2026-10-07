export default function Product({ product }) {
  return (
    <div className=" flex lg:items-center shadow-xs shadow-black rounded-xl m-3 p-2 h-50 self-start">
      <img
        src={product.image}
        alt={product.name}
        className=" border-2 shrink-0 object-cover  rounded-2xl p-1 h-40 w-40 "
      />
      <div className="ml-4 text-left">
        <div className="flex flex-col shrink ml-2 ">
          <div className="font-bold line-clamp-1 text-2xl">{product.name}</div>
          <div className="line-clamp-3 my-1">{product.description}</div>
          <div className="space-x-1">
            <span className="bg-yellow-100 py-1 px-3 rounded-xl">{product.brand}</span>
            <span className="bg-yellow-50 py-1 px-3 rounded-xl">{product.category}</span>
          </div>
          <div className="flex space-x-5">
            <span className="font-bold text-green-800">{product.price}$</span>
            <span>{product.countInStock} left</span>
          </div>
          <div className="space-x-8 ">
            <span>{product.rating} rating</span>
            <span>({product.numReviews})reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
