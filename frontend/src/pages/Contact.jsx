import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assests'


const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>123 Main Street <br />
            Suite 101, New York, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br />Email: contact@booksreview.com</p>
          <p className=''></p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Book Review</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white taransition-all duration-500 hover:scale-105 shadow-md hover:shadow-gray-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact