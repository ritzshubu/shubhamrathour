import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          
          <h1 className='py-4 text-gray-700'>
            Hey, I&#39;m <span className='text-[#a84d4d]'> Shubham</span>
          </h1>
          <div className='text-4xl sm:text-5xl md:text-6xl font-[Raleway] py-2 text-gray-700 font-bold'>
          <Typewriter
            options={{
              strings: ['Software Developer', 'Web Developer'],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto justify-center'>
            I'm currently working as a backend <span className='text-[#ff3232]'>java developer</span>  and trying to learn more about <span className='text-[#ff3232]'>front-end</span> development.
          </p>
          <p className='text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest text-gray-600'>
            LET&#39;S DIG INTO MY <Link href='/#about'><span className='text-[#3a8cff] cursor-pointer'> PROFILE!</span></Link>
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/shubhamssr/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/ritzshubu'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
