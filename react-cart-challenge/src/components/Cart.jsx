function Cart ({ cart }) {

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Add a product to your cart.</p>
            ):
            (
                <div>Os itens adicionados ao carrinho </div>
            )}
        </div>
    );
}

export default Cart;