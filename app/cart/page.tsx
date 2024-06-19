'use client';

import { CartProductCard } from '@/components/Product';
import { Breadcrumb } from '@/components/comman';
import { allProductsInCart } from '@/lib/cart_help_functions/allItemsInCart';
import { CartPropsType } from '@/types';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<CartPropsType[]>([]);

  useEffect(() => {
    const products: CartPropsType[] = allProductsInCart();
    setCartProducts(products);
  }, []);


  return (
    <>
      <div className='p-5 pb-0'>
        <Breadcrumb />
        <div className='mt-5'>
          <span className='font-bold text-[18px]'>
            My Cart
          </span>
        </div>
      </div>
      <div className=' relative w-full min-h-screen px-5 pb-5'>
        <div>
          {cartProducts.length !== 0 ? (
            <div className='w-full  md:flex justify-center'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2   gap-5 mt-5 w-full md:w-[50%] lg:w-[60%]'>
                {cartProducts.map(({ productData, quantity }, index) => (
                  <CartProductCard
                    key={index}
                    productData={productData}
                    quantity={quantity}
                  />
                ))}
              </div>
              <div className='w-full md:w-[50%] px-0 md:px-5 mt-5 md:mt-0'>
                <div className=' sticky top-[70px]  border border-gray-300 bg-white p-5 rounded-lg'>
                  <div>
                    <span className='text-[15px] font-semibold'>
                      Order Summary
                    </span>
                  </div>
                  <div className='mt-3'>
                    <span className='text-[15px]'>
                      Total Items:
                      <span className='text-[15px] font-semibold'>
                        {' '}-
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className='text-[15px]'>
                      Subtotal:{' '}
                      <span className='text-[15px] font-semibold'>
                        ₹ -
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className='text-[15px]'>
                      GST:
                      <span className='text-[15px] font-semibold'> 5%</span>
                    </span>
                  </div>
                  <div className='w-full h-[0.5px] bg-gray-300 my-5' />

                  <div className='mt-2 flex  gap-2 items-center'>
                    <input
                      id='couponCode'
                      placeholder='Promo Code'
                      className= 'w-[150px] sm:w-[250px] px-3 py-2 text-[13px] outline-none focus:border-gray-500 bg-white border rounded-lg border-gray-300'
                    />
                    <div>
                      <button className='px-4 py-2 border border-gray-500 rounded-lg  text-[13px]'>
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className='w-full h-[0.5px] bg-gray-300 my-5' />
                  <div>
                    <span className='text-[15px]'>
                      Payable Amount:
                      <span className='text-[15px] font-semibold'> ₹ -</span>
                    </span>
                  </div>
                  <div className='mt-3'>
                    <button className='px-4 py-2 bg-[#1e1e1e] rounded-md text-white text-[13px]'>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <span>Cart is empty</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
