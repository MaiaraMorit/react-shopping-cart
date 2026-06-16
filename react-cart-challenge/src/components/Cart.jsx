function Cart ({ cart }) {

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
                            <p>Quantity: {product.quantity}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;