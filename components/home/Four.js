import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Four = () => {
  return (
    <div className='h-screen w-full bg-[#15004D] flex md:flex-row flex-col' id='download'>
      <div className="md:w-1/2 md:h-screen w-full h-2/6 p-3 md:flex md:flex-col md:justify-center
    md:px-32">
        <h1 className='text-5xl text-white  font-extrabold'>Download the</h1>
        <h1 className='text-5xl  text-white font-bold md:mb-4 mb-2'>BeSocial App</h1>
        <p className='md:text-lg text-white '>Try Besocial app for a good time with the best of shortform video content that is designed to amuse and entertain you.
          content consumers.</p>
        <div className="flex flex-row justify-between gap-4 mt-3">
          <Link href=''>
            <Image
              src="/playstore.png"
              alt="martha"
              width={204}
              height={115}
              className="object-fit md:w-[200px]"
            />
          </Link>
          <Link href=''>
            <Image
              src="/appstore.png"
              alt="martha"
              width={204}
              height={115}
              className="object-fit md:w-[200px]"
            />
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 md:h-screen w-full h-4/6 flex justify-center items-center
    md:justify-center md:pr-8">
        <Image
          src="/tiktok.png"
          alt="martha"
          width={204}
          height={115}
          className="object-fit md:w-[200px]"
        />
      </div>

    </div>
  )
}

export default Four