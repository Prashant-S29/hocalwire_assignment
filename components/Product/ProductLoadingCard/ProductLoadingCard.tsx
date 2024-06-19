import React from 'react';

export const ProductLoadingCard = ({
  isSimilarProduct,
}: {
  isSimilarProduct?: boolean | true;
}) => {
  return (
    <>
      <div>
        <div
          className={` ${
            isSimilarProduct ? 'w-[150px] h-[150px]' : 'w-full h-[250px]'
          } rounded-[15px] border flex justify-center items-center object-cover object-top overflow-hidden loaderCard`}
        />

        <div className='p-3 leading-tight'>
          <div className='w-[150px] h-[15px] rounded-full mt-1 loaderCard' />
          <div className='w-[100px] h-[10px] rounded-full mt-1 loaderCard' />
          <div className='w-[80px] h-[25px] rounded-lg mt-3 loaderCard' />
        </div>
      </div>
    </>
  );
};
