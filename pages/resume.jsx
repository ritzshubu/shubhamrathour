import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiCloudDownload } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const resume = () => {
  return (
    <>
      <Head>
        <title>Shubham Kumar Singh | Resume</title>
        <meta
          name='description'
          content="I'm Software Engineer cum Front-end Developer. I'm creating this portfolio as a part of studying NextJS"
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <a
            href='https://drive.google.com/file/d/1_xKfGYh6UsBM0yzEYpf6FoafYqqAzyaR/view?usp=drivesdk'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-center'>Resume 📝</h2>
        </a>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center dark:bg-gray-600 dark:text-gray-100'>
          <h2 className='text-center'>Shubham Kumar Singh</h2>
          <div className='flex'>
            <a
              href='mailto:shubham.ssr30@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineMail size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='tel:+919905355042'
              target='_blank'
              rel='noreferrer'
            >
              <BsFillTelephoneFill size={20} style={{ marginRight: '1rem' }} />
            </a>
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
            <span className='font-bold'>Database</span>
            <span className='px-2'>:</span>IBM DB2
            <span className='px-2'>:</span>Oracle
            <span className='px-2'>:</span>MongoDb
            <span className='px-2'>|</span>MySQL
          </p>
          <p className='py-2'>
            <span className='font-bold'>Web Technology</span>
            <span className='px-2'>:</span>HTML/ CSS/ JS
            <span className='px-2'>|</span> Tailwind CSS
            <span className='px-2'>|</span>React
          </p>
          <p className='py-2'>
            <span className='font-bold'>Frameworks</span>
            <span className='px-2'>:</span>Hibernate
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
        <div>
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
            <p className='py-1 italic'>Software Engineer E (June 2021 - Current)</p>
            <h6 className='italic'> Project : Enterprise API (Merchant Solutions)</h6>
            <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
              <li>
                  <span className='italic font-bold'> Authorization Batches - </span>Created a backened API service for TOAST client that enables them to retrieve the precise contents of a batch 
                  before release which help them troubleshoot issues while authorizing and reversing payments. API is currently handling more than 60k merchants.
              </li>
              <li>
                  <span className='italic font-bold'> Reporting API - </span>Enhanced an existing API that enables clients(banks/ financial institutions) to retrieve data on 
                  successful deposit, settlements and bank-errors. API was enhanced to include real time and non-real time authorizations, get complete details of an individual real time and non-real time authorization, 
                  summary of real time and non-real time authorizations.
              </li>
              <li>
                The average response time of API is around 3-5 seconds/4000 records. Sensitive data are masked according to the license being passed in it.
                APIs are deployed in AWS server.
              </li>
              <li>
                Database Used : IBM DB2, Snowflake
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
        <div>
          <h5 className='text-center underline text-[18px] py-4'>
            Education
          </h5>
          {/* Education */}
          <div className ='flex'>
          <div className='px-12'>
            <p className='italic'>
              <span className='font-bold italic'>
                REVA University,
              </span>
              <span className='px-2'>|</span> Bengaluru, KA, IN
            </p>
            <p className='py-1 italic'>B.Tech (August 2017 - June 2021)</p>
            <h6 className='italic'> Computer Science Engineering (CGPA : 9.19) </h6>
            </div>
            <div>
            <p className='italic'>
              <span className='font-bold italic'>
                Sri Chaitanya Techno School,
              </span>
              <span className='px-2'>|</span> Visakhapatnam, AP, IN
            </p>
            <p className='py-1 italic'>Intermediate (June 2015 - May 2017)</p>
            <h6 className='italic'> MPC + IP (Percentage : 82.2) </h6>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default resume;
