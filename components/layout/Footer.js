import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs'
import { IoLogoAndroid, IoLogoApple } from 'react-icons/io'

const Footer = () => {
    return (
        <div className='h-16 w-full  flex flex-row bg-[#1e085a]'>
            <div className="md:w-1/2 w-2/3 h-full flex flex-row justify-center items-center gap-2 md:gap-4 text-white">
                <Link href='privacy'>
                    <h2>Privacy Policy</h2>
                </Link>
                <Link href='terms'>
                    <h2>Terms of service</h2>
                </Link>
                <BsInstagram className='mr-4'/>
                <BsTwitter />
            </div>
            <div className="md:w-1/2 w-1/3 h-full text-3xl flex flex-row justify-center items-center text-white gap-6">
                <IoLogoAndroid className='cursor-pointer'/>
                <IoLogoApple className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default Footer