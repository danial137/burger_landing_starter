import React from 'react'
import { BsFileEarmarkFill } from 'react-icons/bs'
import { FaBurger } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem ] items-center'>
        {/* 1st part */}
        <div>
          {/* logo */}
          <div className='flex items-center text-white space-x-2'>
            <FaBurger className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500' />
            <h1 className='text-[20px] sm:text-[30px] font-semibold'>BurgerBite</h1>
          </div>
          <p className='text-white mt-[0.4rem] opacity-60 font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi amet qui </p>
          <div className='flex items-center text-white space-x-2 mt-[1.2rem]'>
            <MdEmail className='w-4 h-4' /> <h1 className='font-semibold'>Danial79fakhrabadi@gmail.com</h1>
          </div>
        </div>
      </div>
      {/* 2st part */}

      <div>
        <h1></h1>
      </div>

    </div>
  )
}

export default Footer