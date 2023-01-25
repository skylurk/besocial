import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'


const Three = () => {
  return (
    <div className='h-screen md:h-fit w-full md:mb-4'>
      <div className="md:min-h-2/6 py-5 hidden md:block text-[#15004D] ">
        <div className="w-1/3 px-10 ml-20">
          <h3 className='text-4xl font-extrabold'>
            Music is <br />
            Expression
          </h3>
          <p className=''>Each song can be interpreted in more ways
            than one. Check out the videos and gifs
            others have used to express their favorite
            music. Add new ones and tell us what your
            vibe is.</p>
        </div>
      </div>
      <div className="hidden md:block">
      <div className="md:h-screen  flex flex-row px-4 gap-4 justify-center ">
        <div className="h-full  grid place-items-end">
          <Image
            src="/imageFour.png"
            alt="martha"
            width={100}
            height={50}
            className="object-fit md:w-[200px]"
          />
        </div>
        <div className="h-full   grid place-items-center">
          <Image
            src="/imageTwo.png"
            alt="martha"
            width={100}
            height={50}
            className="object-fit md:w-[200px]"
          />
        </div>
        <div className="h-full  grid place-items-start">
          <Image
            src="/imageThree.png"
            alt="martha"
            width={100}
            height={50}
            className="object-fit md:w-[200px]"
          />
        </div>
      </div>
      </div>
      <div className="md:h-1/6 bg-purple-300"></div>

      <div className="md:hidden h-2/6 w-ful bg-white text-[#15004D] flex flex-col justify-center p-2">
        <h1 className='text-4xl font-extrabold'>Music is <br />Expression</h1>
        <p className='text-lg'>Each song can be interpreted in more ways
          than one. Check out the videos and gifs
          others have used to express their favorite
          music. Add new ones and tell us what your
          vibe is.</p>
      </div>
      <div className="md:hidden h-4/6 w-full p-2">
        <div className="h-full w-full">
          <Carousel className=' h-full w-full'>
            <div className="w-400 h-full bg-imageFour bg-contain bg-no-repeat bg-center"></div>
            <div className="w-400 h-full bg-imageFive bg-contain bg-no-repeat bg-center"></div>
            <div className="w-400 h-full bg-imageSix bg-contain bg-no-repeat bg-center"></div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Three