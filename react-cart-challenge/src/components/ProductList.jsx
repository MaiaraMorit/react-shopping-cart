// products nesse caso é a prodcutList -> API
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    )

}

export default ProductList;