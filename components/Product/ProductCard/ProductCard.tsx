'use client';

import { Image } from '@/components/Image/Image';
import { CartIcon, ShareIcon } from '@/icons';
import { addToCart } from '@/lib/cart_help_functions/addToCart';
import { Product } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const ProductCard = ({
  product,
  isSimilarProduct,
}: {
  product: Product;
  isSimilarProduct?: boolean | true;
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseProductQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseProductQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addProductToCart = () => {
    addToCart({ productData: product, quantity: quantity });
  };

  return (
    <div>
      <Link href={`/products/${product.id}`} className='w-fit'>
        <div
          className={` ${
            isSimilarProduct ? 'w-full sm:w-[150px] h-[150px]' : 'w-full h-[200px] lg:h-[250px]'
          } rounded-[15px] border flex justify-center items-center object-cover  object-top overflow-hidden`}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={isSimilarProduct ? 80 : 150}
            height={150}
            priority
            unoptimized
            className={
              isSimilarProduct ? 'w-[80px] h-auto' : 'w-[100px] lg:w-[140px]'
            }
          />
        </div>
      </Link>
      <div className='p-3  leading-tight'>
        <div
          className={`${
            isSimilarProduct
              ? 'w-full sm:w-[150px] text-[14px] line-clamp-3'
              : 'w-[250px] text-[16px] overflow-hidden text-ellipsis whitespace-nowrap'
          } `}
        >
          <span className=' font-semibold'>{product.title}</span>
        </div>

        {!isSimilarProduct && (
          <div>
            <div className='line-clamp-1'>
              <span className='text-[13px] text-gray-700 font-medium capitalize'>
                {product.category}
              </span>
            </div>
            <div className='flex items-center gap-2 mt-2 justify-between'>
              <div>
                <div>
                  <span className='font-semibold'>₹{product.price}</span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
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
                      value={quantity}
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
              </div>
            </div>
          </div>
        )}
      </div>
      {!isSimilarProduct && (
        <>
          <div className='w-full flex gap-2 items-center px-3 '>
            <button
              className='w-full'
              onClick={() => {
                addProductToCart();
                toast('Added to cart');
              }}
            >
              <div className='rounded-[7px] border border-gray-300  flex justify-center items-center gap-2 bg-[#F5f5f5] p-2 text-[13px] font-medium text-center text-black'>
                Add to cart
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
