import Link from 'next/link';
import React from 'react';

export const Hero = () => {
  return (
    <>
      <div className='w-full min-h-[calc(100vh-100px)] bg-white flex justify-center items-center p-5 leading-tight sm:text-center'>
        <div>
          <div>
            <span className='text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold'>
              Welcome to Fake Ecommerce Store
            </span>
          </div>
          <div className='mt-2'>
            <span className='text-[14px] sm:text-[15px] lg:text-[16px] font-medium'>
              Assignment Solution for Frontend Dev at{' '}
              <span className='font-bold'>Hocalwire</span>
            </span>
          </div>
          <div>
            <span className='text-[14px] sm:text-[15px] lg:text-[16px] font-medium'>
              Project submission by{' '}
              <Link
                href='https://code-prashant.vercel.app'
                target='_blank'
                className='font-bold underline-offset-2 underline'
              >
                Prashant Singh
              </Link>
            </span>
          </div>
          <div className='leading-none mt-5'>
            <span className='text-[14px] font-medium'>
              make sure to read{' '}
              <Link
                href='/overview'
                className='font-semibold italic underline-offset-2 underline'
              >
                project overview
              </Link>{' '}
              to understand
              <br />
              the whole project better
            </span>
          </div>
          <div className='mt-5'>
            <Link
              href='https://github.com/Prashant-S29/hocalwire_assignment.git'
              target='_blank'
              className='font-semibold underline-offset-2 underline'
            >
              Source code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};