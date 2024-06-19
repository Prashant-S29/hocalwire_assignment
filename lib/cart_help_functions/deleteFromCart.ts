'use client';

import { CartPropsType, Product } from '@/types';

export const deleteFromCart = ({ productData }: { productData: Product }) => {

  const cart = localStorage.getItem('cart');
  if (!cart) return;

  // if(cart.length === 0) ;

  let cartProducts: CartPropsType[] = JSON.parse(cart);

  const productIndex = cartProducts.findIndex(
    (item) => item.productData.id === productData.id,
  );

  if (productIndex !== -1) {
    cartProducts[productIndex].quantity -= 1;

    cartProducts = cartProducts.filter(
      (item) => item.productData.id !== productData.id,
    );

    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }
  console.log(cartProducts);
};
