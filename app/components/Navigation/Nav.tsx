import Link from 'next/link'
import React from 'react'
import { BiCycling } from 'react-icons/bi'
import { FaBurger } from 'react-icons/fa6'

const Nav = () => {
    return (
        <div className='h-[12vh] bg-white'>
            <div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>

                {/* logo div */}

                <div className='flex items-center space-x-2'>
                    <FaBurger className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500' />
                    <h1 className='text-[20px] sm:text-[30px] font-semibold'>BurgerBite</h1>
                </div>
                {/* navLink dj */}
                <ul className='hidden lg:flex items-center space-x-10'>
                    <li className='text-[20px] font-medium hover:text-red-600'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='text-[20px] font-medium hover:text-red-600'>
                        <Link href="/">Shop</Link>
                    </li>
                    <li className='text-[20px] font-medium hover:text-red-600'>
                        <Link href="/">Blog</Link>
                    </li>
                    <li className='text-[20px] font-medium hover:text-red-600'>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
                {/* button */}
                <div className='flex items-center space-x-4'>
                    <button className='px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white'>
                        <span>
                            <BiCycling className='w-[1.3rem] h-[1.3rem]' />
                        </span>
                        <span>
                            Order Now
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav