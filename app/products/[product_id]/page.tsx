'use client';

import { Image } from '@/components/Image/Image';
import { ProductCard } from '@/components/Product';
import { Breadcrumb } from '@/components/comman';
import { DeleteIcon } from '@/icons';
import { fetchSingleProductById } from '@/lib/api_helper_functions/fetch/fetchSingleProductById';
import { addToCart } from '@/lib/cart_help_functions/addToCart';
import { removeFromCart } from '@/lib/cart_help_functions/removeFromCart';
import { fetchSimilarProduct } from '@/lib/helper/fetchSimilarProduct';
import { Product } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProductDetail = ({ params }: { params: { product_id: string } }) => {
  const [product, setProduct] = useState<Product>();
  const [similarProducts, setSimilarProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fecthProductDetails = async () => {
      // 10 seconds timeout for the request
      setLoading(true);
      const timeout = setTimeout(() => {
        abortController.abort();
        setError('Request timed out');
        setLoading(false);
      }, 10000);

      const AllProductData = await fetchSingleProductById(
        params.product_id,
        signal,
      );
      if (AllProductData.data) {
        setProduct(AllProductData.data);
      }
      clearTimeout(timeout);
      setLoading(false);
    };

    const fetchSimilarProductData = async () => {
      const similarProducts = await fetchSimilarProduct(
        params.product_id,
        signal,
      );
      if (similarProducts.data) {
        setSimilarProducts(similarProducts.data);
      }
    };

    fecthProductDetails();
    fetchSimilarProductData();

    // Cleanup function
    return () => {
      abortController.abort();
    };
  }, [params.product_id]);

  const [productQuantity, setProductQuantity] = useState(1);

  const increaseProductQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const decreaseProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };

  const addProductToCart = () => {
    if (!product) {
      return;
    }
    addToCart({ productData: product, quantity: productQuantity });
  };

  return (
    <>
      <div className='p-5 pb-0'>
        <Breadcrumb />
      </div>
      {product && (
        <div className='min-h-screen w-full'>
          <div className='block sm:flex w-full gap-5 p-5'>
            <div className= 'h-[200px] sm:h-[300px] lg:h-[350px] w-full sm:w-[300px] rounded-[15px] border flex justify-center items-center object-cover object-top overflow-hidden'>
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className='w-[100px] sm:w-[150px] lg:w-[200px]'
              />
            </div>
            <div className='mt-2 sm:mt-0 flex w-full leading-tight px-3 sm:px-0'>
              <div className='w-full py-2'>
                <div>
                  <span className='text-[18px] font-semibold'>
                    {product.title}
                  </span>
                </div>
                <div>
                  <div className='mt-1 text-[14px] text-gray-700'>
                    <span>Category: </span>
                    <span className='font-medium text-black capitalize'>
                      {product.category}
                    </span>
                  </div>
                  <div className='mt-3'>
                    <div className='leading-tight'>
                      <span className='text-[15px] text-gray-700'>
                        {product.description}
                      </span>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div>
                      <span className='text-[18px] font-semibold'>₹ 1399</span>
                    </div>
                    {/* <div>
                      <span className='text-[14px] text-gray-700 line-through'>
                        MRP: ₹ 2119
                      </span>
                    </div>
                    <div>
                      <span className='text-[14px] text-gray-700'>
                        save ₹ 720 (34% off)
                      </span>
                    </div> */}
                  </div>
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
                </div>
                <div className='mt-3 flex gap-3'>
                  <div>
                    <button className='rounded-md border border-[#1e1e1e] bg-[#1e1e1e] px-7 py-4 text-[12px] text-white'>
                      Buy Now
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={addProductToCart}
                      className='rounded-md border border-[#1e1e1e] px-7 py-4 text-[12px] font-medium text-black'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-5 pb-[50px]'>
            <div>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <span className='text-[16px] font-semibold'>
                    Similar Porducts
                  </span>
                </div>
                <div>
                  <Link
                    href={`/catrgory/${product.category}`}
                    className='text-[14px] text-blue-500 underline underline-offset-2'
                  >
                    see all
                  </Link>
                </div>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 mt-5'>
                {similarProducts?.map((product, index) => (
                  <ProductCard isSimilarProduct key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
