"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerImg1 from "@/public/images/b1.png";
import BurgerImg2 from "@/public/images/b2.png"
import Image from 'next/image';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const Hero = () => {
    return (
        <Carousel additionalTransfrom={0} arrows={false} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={true}>
            {/* 1st hero slide */}
            <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 clip_path'>
                <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
                    {/* imge */}
                    <Image src={BurgerImg1} alt='burger' />
                    {/* information */}
                    <div>
                        <h1 className='text-[40px] font-semibold text-yellow-400'>Fast Food Burger </h1>
                        <h1 className='text-[90px] leading-[5rem] font-bold uppercase text-white'>Best <br /> Burgers</h1>
                        <p className='mt-[1rem] text-white'>
                            
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium illum adipisci tenetur asperiores 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium illum adipisci tenetur asperiores 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium illum adipisci tenetur asperiores 
                            Lorem ipsum dolor sit amet 
                  
                        </p>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default Hero