import ProductList from "./components/ProductList";
import { products } from "./data/productList";
import Cart from "./components/Cart";
import { useState } from "react";
import { addToCart, removeFromCart, calculateTotal } from "./utils/cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(addToCart(cart, product));
  };

  const handleRemoveFromCart = (product) => {
    setCart(removeFromCart(cart, product));
  };

  const total = calculateTotal(cart);

  return (
    <div>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
      />

      <Cart
        cart={cart}
        total={total}
        onRemoveFromCart={handleRemoveFromCart}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}

export default App;
