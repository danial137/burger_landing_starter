import React from 'react'
import img1 from "@/public/images/f1.jpg"
import img2 from "@/public/images/f2.jpg"
import img3 from "@/public/images/f3.jpg"
import Image from 'next/image'

const Features = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            {/* heading */}
            <h1 className='heading'>
                burgers made with <br /> love and
                <span className='ml-5'>Care</span>
            </h1>
            {/* card */}
            <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
                {/* card1 */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                        <Image src={img1} alt='img' className='rounded-md' />
                        <h1 className='mt-[1.rem] text-center text-[24px] text-black font-semibold'>Our Burger </h1>
                        <p className='mt-[0.2rem] text-black text-opacity-70 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, ducimus alias impedit recusandae dolorem nulla quibusdam. Itaque, dolor ipsam!</p>
                    </div>
                </div>
                {/* card2 */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                        <Image src={img2} alt='img' className='rounded-md' />
                        <h1 className='mt-[1.rem] text-center text-[24px] text-black font-semibold'>Our Opiniion is important </h1>
                        <p className='mt-[0.2rem] text-black text-opacity-70 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, ducimus alias impedit recusandae dolorem nulla quibusdam. Itaque, dolor ipsam!</p>
                    </div>
                </div>
                {/* card3 */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                        <Image src={img3} alt='img' className='rounded-md' />
                        <h1 className='mt-[1.rem] text-center text-[24px] text-black font-semibold'>Our Burger </h1>
                        <p className='mt-[0.2rem] text-black text-opacity-70 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, ducimus alias impedit recusandae dolorem nulla quibusdam. Itaque, dolor ipsam!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features