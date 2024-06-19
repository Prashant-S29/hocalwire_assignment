'use client';

import { NavLinks } from '@/contant';
import { CloseIcon, MenuIcon } from '@/icons';
import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className='px-5 py-4 h-[60px]  sticky w-full top-0 border-b border-gray-200 bg-white  flex justify-between md:justify-normal items-center gap-5 z-20'>
        <div>
          <span className='text-[16px] font-bold'>Hocalwire</span>
        </div>
        <div className='w-[0.5px] bg-gray-500 h-[20px] hidden md:block' />
        <div>
          <ul className=' items-center gap-5 hidden md:flex'>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className='text-[14px] font-medium'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='block md:hidden relative z-20'>
          <div className='p-2' onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <CloseIcon className='text-[20px]' />
            ) : (
              <MenuIcon className='text-[20px]' />
            )}
          </div>
        </div>
      </div>

      {showMenu && (
        <div className='fixed w-full h-screen top-0 z-10 bg-white flex justify-center items-center'>
          <ul className=' items-center gap-3 flex flex-col '>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className='text-[16px] font-medium'
                  onClick={() => setShowMenu(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
