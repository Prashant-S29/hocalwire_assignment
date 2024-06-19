'use client';

import { DeleteIcon, HeartIcon } from '@/icons';
import { addToCart } from '@/lib/cart_help_functions/addToCart';
import { deleteFromCart } from '@/lib/cart_help_functions/deleteFromCart';
import { removeFromCart } from '@/lib/cart_help_functions/removeFromCart';
import { Product } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';

export const CartProductCard = ({
  productData,
  quantity,
}: {
  productData: Product;
  quantity: number;
}) => {
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [showProduct, setShowProduct] = useState(true);

  const increaseProductQuantity = () => {
    setProductQuantity((prev) => prev + 1);
    addToCart({ productData });
  };

  const decreaseProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
      removeFromCart({ productData });
    }
  };

  const deleteProduct = () => {
    deleteFromCart({ productData });
    setShowProduct(false);
  };

  return (
    <div
      className={
        showProduct
          ? 'flex justify-between items-baseline gap-5  bg-white w-fit border-gray-500 rounded-lg'
          : 'hidden'
      }
    >
      <div className='flex gap-3'>
        <div className=' h-[120px] min-w-[100px] sm:min-w-[120px] border border-gray-300 p-5 rounded-[10px] flex justify-center items-center object-cover object-top overflow-hidden'>
          <Image
            src={productData.image}
            alt={productData.title}
            width={120}
            height={120}
            className='w-[50px] sm:w-[60px]'
          />
        </div>
        <div className='leading-tight'>
          <div className='w-full py-2'>
            <div className=' line-clamp-2 '>
              <span className='text-[14px] font-medium'>
                {productData.title}
              </span>
            </div>
          </div>
          <div className=' leading-none line-clamp-2 text-gray-700'>
            <span className=' text-black font-semibold text-[15px] capitalize'>
              ₹{productData.price}
            </span>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <div className='flex items-center'>
              <div>
                <button
                  onClick={decreaseProductQuantity}
                  className='size-7 rounded-l-md border border-gray-300  text-[16px]'
                >
                  -
                </button>
              </div>
              <div>
                <input
                  placeholder='0'
                  disabled
                  value={productQuantity}
                  className='size-7  border-gray-300 border-y-[1px]  bg-white p-1 text-center text-[14px] outline-none'
                />
              </div>
              <div>
                <button
                  onClick={increaseProductQuantity}
                  className='size-7 rounded-r-md border border-gray-300  text-[16px]'
                >
                  +
                </button>
              </div>
            </div>
            <div className='flex  items-center  gap-1'>
              <div>
                <button onClick={deleteProduct} className='p-1'>
                  <DeleteIcon className='text-gray-400' />
                </button>
              </div>

              <div className='cursor-pointer p-1'>
                <HeartIcon className='text-gray-400 text-[14px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        
       
      </div> */}
    </div>
  );
};
