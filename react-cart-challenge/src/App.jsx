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
