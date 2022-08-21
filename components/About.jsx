import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4'>Hmmm... As for me</h2>
          <p className='py-2 text-gray-600'>
            As far as development is concerned, I might be the chosen one.
            Though I&#39;m very new to the organisational level of development, but trust me, learning new tech and 
            implementing it for the never-ending development for flora and fauna, had been running in veins since
            2015. I started my journey with simple HTML form, which was nothing more than taking values from a form, and 
            storing it in MySQL DB... lol. And now I&#39;m trying to learn more and more with the latest technology. Whether it&#39;s Vanilla JS, 
            Angular, ReactJS, or even NextJS, which infact I have used to build this portfolio, I&#39;m never really not 
            surprised with what power simple JS had bought us to the developer.
          </p>
          <p className='py-2 text-gray-600'>
            Suprised and fascinated with these computer tech, landed me with Bachelor of Technology degree with 
            Computer Science and understandable knowledge to start building things. Which resulted in making
            some good freelancing web projects and understanding of web development stacks, like MERN and PERN.
          </p>
          <p className='py-2 text-gray-600'>
            With the eager to not stop learning, I started learning JAVA, whch infact was my first programming
            language, tbh it was tough in beginning. But with the kid inside me who wants to learn more, 
            I got proficient in Java which finally landed my first step in organisational level, and I started working
            as a backend java developer at <a className='text-[#3a8cff] cursor-pointer' href='https://www.fisglobal.com/en/' target='_blank'>
               FIS Global. </a>Now I&#39;m learning more on production level with front-end learning going side-by-side. Husshhh! Enough of me.... If you want to connect with me feel 
            free to drop a hi over <a className='text-[#3a8cff] cursor-pointer' href='/#contact'>HERE </a>
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer text-lg'>
              You can also check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
