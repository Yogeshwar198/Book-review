import React from 'react'
import Title from './../components/Title';
import { assets } from '../assets/assests'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img 
          className='w-full md:w-auto max-w-full md:max-w-[450px] h-auto object-cover' 
          src={assets.about} 
          alt="About Us" 
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to our Book Review Platform, where book lovers unite! We are passionate about connecting readers with stories that resonate, inspire, and transform. Our platform is built for avid readers, casual enthusiasts, and everyone in between.
          </p>
          <p>
            At our core, we believe in the power of storytelling. Books have the unique ability to transport us to new worlds, spark our imagination, and broaden our perspectives. Whether you're here to discover your next great read or share your thoughts about a beloved book, you're in the right place.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to create a vibrant community where readers can explore, review, and recommend books that matter to them. By fostering meaningful discussions and sharing authentic reviews, we aim to make book discovery more personal and enjoyable for everyone.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Reviews:</b>
          <p className='text-gray-600'>
            We prioritize authentic, detailed, and thoughtful reviews written by readers for readers. Discover books based on real experiences, not marketing hype.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Personalized Recommendations:</b>
          <p className='text-gray-600'>
            Our platform uses curated lists and community insights to recommend books tailored to your preferences and interests.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Engaged Community:</b>
          <p className='text-gray-600'>
            Join a growing community of book enthusiasts who share your passion. Participate in discussions, follow your favorite reviewers, and make reading social again!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
