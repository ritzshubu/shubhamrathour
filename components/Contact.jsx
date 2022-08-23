import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE, 
      form.current,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER
      )
      .then((result) => {
          form.current.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Shubham Kumar Singh</h2>
                <p className='py-4'>
                  I am available for freelancing projects or full-time positions.<br/><br/>
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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
                  <a
                    href='mailto:shubham.ssr30@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  </a>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-bold'>NAME</label>
                    <input {...register("name", { required: true})}
                      placeholder='What can I call You?'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-bold'>
                      Phone Number
                    </label>
                    <input {...register("phone", { required: false})}
                      placeholder='(+91) 9012345678'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 font-bold'>E-mail</label>
                  <input {...register("email", { required: true})}
                      placeholder='How can I contact you?'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 font-bold'>Subject</label>
                  <input {...register("subject", { required: false})}
                    placeholder='What is it regarding?'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 font-bold'>Message</label>
                  <textarea {...register("message", { required: true})}
                      placeholder='Please leave comment/ feedback/ or maybe just a Hi!'
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='8'
                  ></textarea>
                </div>
                <div className='flex flex-col p-5'>
                {errors.name && (
                  <span className='text-red-500'> - Name field is required</span>
                )}
                {errors.email && (
                  <span className='text-red-500'> - The Email Field is required</span>
                )}
                {errors.message && (
                  <span className='text-red-500'> - Oops! Please send some message.</span>
                )}
              </div>
              <input 
              type='submit'
              className='w-full p-4 mt-4 shadow bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer'
              value="Send Message!"
               />
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
