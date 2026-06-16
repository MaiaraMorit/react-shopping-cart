function Cart ({ cart, total, onRemoveFromCart, onAddToCart }) {

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Add a product to your cart.</p>
            ):
            (
                <div>
                    {cart.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>

                            <button
                                onClick={() => onRemoveFromCart(product)}
                            >
                                -
                            </button>
                            <span>Quantity: {product.quantity}</span>
                            <button
                                onClick={() => onAddToCart(product)}
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <h3>Total: ${total}</h3>
        </div>
    );
}

export default Cart;