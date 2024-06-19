export const allProductsInCart = () => {
  const cart = localStorage.getItem('cart');
  if (!cart) return [];

  return JSON.parse(cart);
};
