import Image from 'next/image'
import React from 'react'

const Two = () => {
    return (
        <div className='h-screen w-full bg-[#15004D] flex md:flex-row flex-col'>
            <div className="md:w-1/2 md:h-screen w-full h-4/6 flex justify-center items-center
            md:justify-end md:pr-8">
                <Image
                    src="/image.png"
                    alt="martha"
                    width={204}
                    height={115}
                    className="object-fit md:w-[250px]"
                />
            </div>
            <div className="md:w-1/2 md:h-screen w-full h-2/6 p-3 md:flex md:flex-col md:justify-center
            md:px-32">
                <h1 className='text-5xl text-white  font-extrabold'>Artistic</h1>
                <h1 className='text-5xl  text-white font-bold md:mb-4 mb-2'>Expression</h1>
                <p className='md:text-xl text-white '>BeSocial is East Africa’s own short video
                    platform for viral and never ending
                    content to keep you entertained. It
                    caters for both content creators and
                    content consumers.</p>
            </div>

        </div>
    )
}

export default Two