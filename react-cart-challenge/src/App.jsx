//import { useState } from "react";
import ProductList from "./components/ProductList";
import { products } from "./data/productList";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log(`${product} add to cart success`)
  }

  return (
    <div>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
      />

      <Cart
        cart={cart}
      />

    </div>
  );
}

export default App;
