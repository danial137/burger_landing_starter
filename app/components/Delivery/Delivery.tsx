import Image from 'next/image'
import React from 'react'
import DeliveryImg from "@/public/images/delivery.svg"

const Delivery = () => {
    return (
        <div className='pt-[8rem] pb-[3rem]'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]'>

                {/* image */}
                <div>
                    <Image src={DeliveryImg} alt='img' />
                </div>
                {/* text */}
                <div>
                    <h1 className='text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>Your <span className='text-red-600'>Favorite Burger</span> On the Way</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum amet odit atque facilis maxime consequatur doloribus asperiores accusamus voluptatum omnis, quos soluta cumque ut earum rem eaque, dignissimos nisi hic.</p>
                </div>
            </div>
        </div>
    )
}

export default Delivery