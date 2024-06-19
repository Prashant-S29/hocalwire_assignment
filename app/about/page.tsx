import { Breadcrumb } from '@/components/comman';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <div className='w-full max-h-screen p-5 text-[15px] md:text-[16px]'>
        <Breadcrumb />
        <div className='mt-5'>
          <span className=' font-bold'>About Me</span>
        </div>
        <div className='mt-2'>
          <span>
            Hey, If you are reading this,{' '}
            <span className='font-semibold'>Prashant Singh</span> this side from
            Jaipur, Rajasthan
          </span>
        </div>
        <div className='mt-3'>
          <span className='font-semibold'>
            I am 2 yrs+ experienced Full Stack Developer and really passionate
            in Frontend Web Developement
          </span>
        </div>
        <div>
        <div className='mt-5'>
          <span className=' font-bold'>More About Me</span>
        </div>
          <ul className='mt-2   '>
            <li>
              <Link
                href='https://www.instagram.com/web_with_prashant '
                target='_blank'
                className='text-blue-700 underline underline-offset-2'
              >
                Instagram (Great Frontend Projects here)
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/in/prashant-singh-529391250/'
                target='_blank'
                className='text-blue-700 underline underline-offset-2'
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/Prashant-S29'
                target='_blank'
                className='text-blue-700 underline underline-offset-2'
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href='https://code-prashant.vercel.app'
                target='_blank'
                className='text-blue-700 underline underline-offset-2'
              >
                Portfolio v3 (v4 is coming soon)
              </Link>
            </li>
            <li>
              <Link
                href='https://www.code-components.in'
                target='_blank'
                className='text-blue-700 underline underline-offset-2'
              >
                Exprimental Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
