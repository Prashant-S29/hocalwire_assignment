'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { rightArrow } from '@/public';

export const Breadcrumb = () => {
  const paths = usePathname();
  const pathNames: string[] = paths.split('/').filter((path) => path);

  return (
    <div className='h-[20px] w-full'>
      <ul className='flex items-center'>
        <li className='text-[12px] text-gray-700 sm:text-[14px]'>
          <Link href={'/'} className='font-medium px-1'>
            Home
          </Link>
        </li>
        {pathNames.length > 0 && <Image src={rightArrow} alt='rightArrow' className='w-[10px] h-[10px]' />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href
              ? `text-gray-600 text-[12px] sm:text-[14px]`
              : `  text-[12px] sm:text-[14px] text-gray-700`;
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);
          return (
            <React.Fragment key={index}>
              {index === pathNames.length - 1 ? (
                <li className={itemClasses}>
                  <Link href={href} className='font-medium'>
                    {itemLink.split('-').map((item, index) => (
                      <span key={index} className='px-1 capitalize'>
                        {item}
                      </span>
                    ))}
                  </Link>
                  {pathNames.length !== index + 1 && (
                    <Image src={rightArrow} alt='rightArrow' className='w-[10px] h-[10px]' />
                  )}
                </li>
              ) : (
                <li className={itemClasses}>
                  <div className='flex items-center'>
                    <Link href={href} className='font-medium px-1'>
                      {itemLink}
                    </Link>
                    {pathNames.length !== index + 1 && (
                      <Image src={rightArrow} alt='rightArrow' className='w-[10px] h-[10px]' />
                    )}
                  </div>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
