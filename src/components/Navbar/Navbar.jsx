'use client';
import React, { useState } from 'react';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { getAuth } from '@/components/Auth/getAuth';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const { user, handleLogout } = getAuth();

  const menuItem = [
    // {
    //   title: 'Home',
    //   link: '/',
    // },
    // {
    //   title: 'All events',
    //   link: '/all-events',
    // },
    // {
    //   title: 'Locations',
    //   link: '/locations',
    // },
    // {
    //   title: 'Contact Us',
    //   link: '/contact',
    // },
  ];

  return (
    <>
      {/*<!-- Header --> */}
      <header className='relative z-20 w-full border-b shadow-lg bg-primary_1 border-b-1 border-slate-200 shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden'>
        <div className='container relative px-6 mx-auto'>
          <nav
            aria-label='main navigation'
            className='flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700'
            role='navigation'
          >
            {/*      <!-- Brand logo --> */}
            <Link
              aria-current='page'
              className='flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1'
              href='/'
            >
              <span className='p-3 text-2xl font-bold text-primary_1 bg-primary_2'>
                SC
              </span>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                    : ''
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? 'true' : 'false'}
              aria-label='Toggle navigation'
            >
              <div className='absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
                ></span>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300'
                ></span>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role='menubar'
              aria-label='Select page'
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              {menuItem.map((item) => (
                <li role='none' key={item.title} className='flex items-stretch'>
                  <Link
                    role='menuitem'
                    aria-haspopup='false'
                    className='flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8'
                    href={item.link}
                  >
                    <span> {item.title} </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/*      <!-- Actions --> */}
            <div className='flex items-center justify-end px-6 ml-auto lg:ml-0 lg:flex-1 lg:p-0'>
              {user ? (
                <Link
                  className='relative px-3 py-3 text-sm transition rounded shadow-md bg-primary_2 text-primary_1 hover:scale-105'
                  href='/account'
                >
                  {user.email}
                </Link>
              ) : (
                <Link
                  className='relative px-3 py-3 text-lg transition rounded shadow-md bg-primary_2 text-primary_1 hover:scale-105'
                  href='/login'
                >
                  Account
                </Link>
              )}

              {user && (
                <Button onClick={handleLogout} className='ml-3'>
                  {' '}
                  Log Out{' '}
                </Button>
              )}
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
