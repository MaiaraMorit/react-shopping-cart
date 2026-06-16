//import { ProductList } from "../data/productList";

function ProductCard({ product, onAddToCart }) {

  

  return (
    <div className="product-card">
      <h3>{product.name}</h3>

        <p>Price: {product.price}</p>

        <button
          onClick={() => onAddToCart(product.name)}
        >
          Add to cart
        </button>
    </div>
  );
}

export default ProductCard;