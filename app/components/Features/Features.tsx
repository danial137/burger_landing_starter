import React from 'react'
import img1 from "@/public/images/f1.jpg"
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
                        <Image src={img1} alt='img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features