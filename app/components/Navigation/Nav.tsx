import Link from 'next/link'
import React from 'react'
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
                </ul>
            </div>
        </div>
    )
}

export default Nav