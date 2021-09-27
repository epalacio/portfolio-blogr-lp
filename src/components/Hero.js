import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

import logo from '../img/logo.svg';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gradient-to-r from-salmon via-carnation to-carnation rounded-bl-blogrRad pb-32'>
      <nav className='relative'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center w-full justify-between'>
              <div className='flex-shrink-0'>
                <img src={logo} alt='Company Logo' />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <a href='/' className='text-white hover:underline px-3 py-2'>Product</a>
                  <a href='/' className='text-white hover:underline px-3 py-2'>Company</a>
                  <a href='/' className='text-white hover:underline px-3 py-2'>Connect</a>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <a href='/' className='text-white hover:underline px-3 py-2'>Login</a>
                  <a href='/' className='text-carnation hover:text-white bg-white hover:bg-fadedRed px-6 py-2 rounded-full border-2 border-transparent hover:border-fadedRed'>Sign Up</a>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
          className='absolute z-10 w-11/12 bg-white rounded-xl shadow-2xl mx-auto left-0 right-0 pb-16 pt-2'
        >
          {(ref) => (
            <div
              className='md:hidden flex flex-col justify-between z-20'
              id='mobile-menu'
              style={{ 'min-height': 'max-content' }}
            >
              <div
                ref={ref}
                className='pb-3 divide-y-1 divide-graySuit text-center'
              >
                <a href='/' className='text-regalBlue hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop font-bold my-6'>Product</a>
                <a href='/' className='text-regalBlue hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop font-bold my-6'>Company</a>
                <a href='/' className='text-regalBlue hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop font-bold my-6'>Connect</a>
                <div className='block px-3 py-2 w-full border-t-2 border-iron'>
                  <a href='/' className='text-regalBlue hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop font-bold mb-6 mt-6'>Login</a>
                  <a href='/' className='text-white hover:text-carnation bg-gradient-to-r from-salmon via-carnation to-carnation hover:bg-white px-8 py-4 ml-3 rounded-full mt-4'>Sign Up</a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <div className='text-center'>
        <h1 className='text-white text-heroHeaderMobile sm:text-heroHeaderDesktop mt-20 mb-4'>A modern publishing platform</h1>
        <p className='text-white mb-12'>Grow your audience and build your online brand</p>
        <div>
          <a href='/' className='text-carnation hover:text-white bg-white hover:bg-fadedRed px-6 py-4 mr-3 rounded-full border-2 border-transparent hover:border-fadedRed'>Start for Free</a>
          <a href='/' className='text-white hover:text-carnation bg-carnation hover:bg-white px-6 py-4 ml-3 rounded-full border-2 border-white hover:border-carnation'>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
