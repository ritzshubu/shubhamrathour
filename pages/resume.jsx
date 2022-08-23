import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const resume = () => {
  return (
    <>
      <Head>
        <title>Shubham Kumar Singh | Resume</title>
        <meta
          name='description'
          content="I'm Software Engineer cum Front-end Developer. I'm creating this portfolio as a part of studying NextJs"
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Shubham Kumar Singh</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/shubhamssr/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/ritzshubu'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://leetcode.com/ritzshubu/'
              target='_blank'
              rel='noreferrer'
            >
              <SiLeetcode size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://twitter.com/gareeb_vidyarti'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Software Engineer <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span>AGILE practitioner
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className='underline underline-offset-auto'>Software Engineer</p>
            <p className='underline underline-offset-auto'>Web Development</p>
            <p className='underline underline-offset-auto'>AGILE practitioner</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Programming Languages</span>
            <span className='px-2'>:</span>Java
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span>C/ C++
          </p>
          <p className='py-2'>
            <span className='font-bold'>Web Technology</span>
            <span className='px-2'>:</span>HTML/ CSS/ JS
            <span className='px-2'>|</span> Tailwind CSS
            <span className='px-2'>|</span>React
          </p>
          <p className='py-2'>
            <span className='font-bold'>Frameworks</span>
            <span className='px-2'>:</span>Spring
            <span className='px-2'>|</span>NextJS
          </p>
          <p className='py-2'>
            <span className='font-bold'>Tools</span>
            <span className='px-2'>:</span>Git/ Github
            <span className='px-2'>|</span>Spring Data JPA
            <span className='px-2'>|</span>Querydsl
            <span className='px-2'>|</span>Junit 5
            <span className='px-2'>|</span>Docker
            <span className='px-2'>|</span>Kubernetes
            <span className='px-2'>|</span>AWS Cloud Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              FIS Global
            </span>
            <span className='px-2'>|</span>KA, IN
          </p>
          <p className='py-1 italic'>Software Engineer E (2021 - Current)</p>
          <h6 className='italic'> Project : Enterprise API (Merchant Solutions)</h6>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>DXC Technology</span>
            <span className='px-2'>|</span>KA, IN
          </p>
          <p className='py-1 italic'>Intern : Associate Professional </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Used Dynatrace, an application monitoring tool that helps
             the users with proper performance monitoring and
              consistent availability in the system.
            </li>
            <li>
              Performed operational insights to enhance the productivity caused by 
              heavy load on the server.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
