function ProductCard({ product, onAddToCart }) {

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        
        <p className="product-category">{product.category}</p>
        
        <p className="product-description">{product.description.substring(0, 100)}...</p>
        
        <div className="product-rating">
          ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button
            className="btn-add-cart"
            onClick={() => onAddToCart(product)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;