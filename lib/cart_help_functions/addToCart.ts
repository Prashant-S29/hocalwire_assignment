import { CartPropsType, Product } from '@/types';

export const addToCart = ({
  productData,
  quantity,
}: {
  productData: Product;
  quantity?: number;
}) => {
  const cart = localStorage.getItem('cart');
  const cartProducts: CartPropsType[] = cart ? JSON.parse(cart) : [];

  const productIndex = cartProducts.findIndex(
    (item) => item.productData.id === productData.id,
  );

  if (productIndex === -1) {
    cartProducts.push({ productData, quantity: quantity || 1 });
  } else {
    cartProducts[productIndex].quantity += 1;
  }

  localStorage.setItem('cart', JSON.stringify(cartProducts));
  console.log(cartProducts);
};
