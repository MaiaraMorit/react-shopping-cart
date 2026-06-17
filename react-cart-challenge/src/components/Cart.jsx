function Cart ({ cart, total, onRemoveFromCart, onAddToCart }) {

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>🛒 Carrinho de Compras</h2>
                <span className="cart-count">{cart.length}</span>
            </div>
            
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Seu carrinho está vazio</p>
                    <p className="cart-hint">Adicione produtos para começar!</p>
                </div>
            ):(
                <div className="cart-items">
                    {cart.map((product) => (
                        <div key={product.id} className="cart-item">
                            <div className="item-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            
                            <div className="item-details">
                                <h4>{product.title}</h4>
                                <p className="item-price">${product.price.toFixed(2)}</p>
                            </div>

                            <div className="item-controls">
                                <button
                                    className="btn-quantity"
                                    onClick={() => onRemoveFromCart(product)}
                                >
                                    −
                                </button>
                                <span className="quantity">{product.quantity}</span>
                                <button
                                    className="btn-quantity"
                                    onClick={() => onAddToCart(product)}
                                >
                                    +
                                </button>
                            </div>

                            <div className="item-subtotal">
                                ${(product.price * product.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            <div className="cart-footer">
                <div className="cart-total">
                    <span>Total:</span>
                    <span className="total-amount">${total.toFixed(2)}</span>
                </div>
                {cart.length > 0 && (
                    <button className="btn-checkout">Finalizar Compra</button>
                )}
            </div>
        </div>
    );
}

export default Cart;