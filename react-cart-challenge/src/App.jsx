import ProductList from "./components/ProductList";
import { products } from "./data/productList";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log(`${product.name} add to cart success`);

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1}
            : item
        )
      )
    } else {
      setCart([...cart, {...product, quantity: 1}])
    };
  };

  const handleRemoveFromCart = (product) => {
    console.log(`${product.name} remove from cart`);

    const existingProduct = cart.find(
        (item => item.id === product.id)
    );

    if (existingProduct.quantity === 1) {
      setCart(
        cart.filter((item) => item.id !== product.id)
      )
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1}
            : item
        )
      )
    }
  };

  const total = cart.reduce(
    (accumulator, item) =>
      accumulator + item.price * item.quantity,
    0
  );

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
