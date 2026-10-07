export default function Product({ product }) {
  return (
    <div className="border">
      <img src={product.image} alt={product.name} 
      className="h-40 w-40 "/>
      <div className="flex flex-col">

      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>
        {product.brand}
        {product.category}
      </div>
      <div>
        {product.price}
        {product.countInStock}
      </div>
      <div>
        {product.rating}
        {product.numReviews}
      </div>
      </div>
    </div>
  );
}
