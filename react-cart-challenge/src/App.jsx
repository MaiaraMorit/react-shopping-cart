import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import { addToCart, removeFromCart, calculateTotal } from "./utils/cart";
import { getProducts } from "./components/FakeProductService";
import "./styles/App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch {
        setError("Erro ao carregar produtos");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart(addToCart(cart, product));
  };

  const handleRemoveFromCart = (product) => {
    setCart(removeFromCart(cart, product));
  };

  const total = calculateTotal(cart);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🛍️ E-Commerce Store</h1>
        <p>Bem-vindo ao nosso catálogo de produtos</p>
      </header>

      <div className="app-content">
        <main className="products-section">
          <h2>Produtos Disponíveis</h2>
          {loading && <div className="loading">Carregando produtos...</div>}
          {error && <div className="error">{error}</div>}
          {!loading && <ProductList products={products} onAddToCart={handleAddToCart} />}
        </main>

        <aside className="cart-section">
          <Cart
            cart={cart}
            total={total}
            onRemoveFromCart={handleRemoveFromCart}
            onAddToCart={handleAddToCart}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
