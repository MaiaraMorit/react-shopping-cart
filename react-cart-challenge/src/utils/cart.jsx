export const addToCart = (cart, product) => {
  console.log(`${product.name} add to cart`);

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cart, {...product, quantity: 1 }];
};

export const removeFromCart = (cart, product) => {
  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct.quantity === 1) {
    return cart.filter((item) => item.id !== product.id);
  }

  return cart.map((item) =>
    item.id === product.id
      ? {...item, quantity: item.quantity - 1}
      : item
  );
};

export const calculateTotal = (cart) => {
  return cart.reduce(
    (accumulator, item) =>
      accumulator + item.price * item.quantity,
    0
  );
};