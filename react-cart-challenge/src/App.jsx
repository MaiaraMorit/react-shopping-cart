//import { useState } from "react";
import ProductList from "./components/ProductList";
import { products } from "./data/productList";

function App() {
//  const [products, setProducts] = useState([]);
//  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    console.log(`${product} add to cart success`)
  }

  return (
    <div>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
      />

      <h1>Cart</h1>
    </div>
  );
}

export default App;
