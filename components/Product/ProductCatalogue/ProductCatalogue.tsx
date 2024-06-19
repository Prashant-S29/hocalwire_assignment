'use client';

import React, { useEffect, useState } from 'react';

import { Product } from '@/types';
import { ProductCard } from '../ProductCard';
import { fetchAllProducts } from '@/lib/api_helper_functions/fetch/fetchAllProducts';
import { Breadcrumb } from '@/components/comman';
import { ProductLoadingCard } from '../ProductLoadingCard';

export const ProductCatalogue = () => {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthAllProducts = async () => {
      setLoading(true);
      const AllProductData = await fetchAllProducts();
      if (AllProductData.data) {
        setProducts(AllProductData.data);
      }
      setLoading(false);
    };

    fecthAllProducts();
  }, []);

  return (
    <>
      <div className='p-5 pb-0'>
        <Breadcrumb />
      </div>
      <div className='p-5'>
        <div>
          <span className='font-bold text-[18px]'>All Products</span>
        </div>

        {loading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5'>
            <ProductLoadingCard />
            <ProductLoadingCard />
          </div>
        ) : (
          <div>
            {!products ? (
              <div>
                <span>No products found</span>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5'>
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
