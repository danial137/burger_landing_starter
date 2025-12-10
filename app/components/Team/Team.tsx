import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <h1 className='heading'>MEET Our expert <span className='text-red-600'>Cheef</span> </h1>
            <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
                <TeamCard image="/images/t1.jpg" name="John doe" position="Kitchen porter" />
                <TeamCard image="/images/t2.jpg" name="kohn doe" position="Kitchen porter" />
                <TeamCard image="/images/t3.jpg" name="John doe" position="Kitchen porter" />
            </div>
        </div>
    )
}

export default Team