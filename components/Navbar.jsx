import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/navLogo.png';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon} from '@heroicons/react/solid'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#fffff0');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme ==='system' ? systemTheme : theme;

    if(currentTheme === 'dark') {
      return(
        <SunIcon className='w-7 h-7 dark:text-gray-400' role='button' onClick={() => setTheme('light')} />
      )
    }
    else {
      return(
        <MoonIcon className='w-7 h-7' role='button' onClick={() => setTheme('dark')} />
      );
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setMounted(true);
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  },[]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 font-extrabold dark:bg-gray-900 dark:border-gray-700'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='200'
              height='200'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex text-black'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            {renderThemeChanger()}
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b dark:text-gray-100'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b dark:text-gray-100'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b dark:text-gray-100'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b dark:text-gray-100'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b dark:text-gray-100'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b dark:text-gray-100'>
              <Link href='/#contact'>Contact Me</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f0f2dd] p-10 ease-in duration-500 dark:bg-gray-900  dark:border-gray-700 dark:text-gray-100'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 dark:border-gray-700 dark:text-gray-100'
          }
        >
          <div className='dark:border-gray-700'>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='50'
                    height='50'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-800 my-4'>
              <p className='w-[85%] md:w-[90%] py-2 font-bold'>
                Let&#39;s Dig into my profile!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col font-bold'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact Me
                </li>
              </Link>
            </ul>
            <div className='py-4'>
              <h5 className='underline'> Toggle Theme</h5>
              {renderThemeChanger()}
            </div>
            <div className='pt-34'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-2 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/shubhamssr/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/ritzshubu'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a href='mailto:shubham.ssr30@gmail.com'
                    target='_blank'
                    rel='noreferrer'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
