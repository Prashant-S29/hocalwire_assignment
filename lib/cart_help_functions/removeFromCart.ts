'use client';

import { CartPropsType, Product } from '@/types';

export const removeFromCart = ({ productData }: { productData: Product }) => {

  const cart = localStorage.getItem('cart');
  if (!cart) return;

  let cartProducts: CartPropsType[] = JSON.parse(cart);

  const productIndex = cartProducts.findIndex(
    (item) => item.productData.id === productData.id,
  );

  if (productIndex !== -1) {
    cartProducts[productIndex].quantity -= 1;

    if (cartProducts[productIndex].quantity <= 0) {
      cartProducts = cartProducts.filter(
        (item) => item.productData.id !== productData.id,
      );
    }

    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }
  console.log(cartProducts);
};
