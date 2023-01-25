import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
    const [showMobMenu, setShowMobMenu] = useState(false);

    const handleShowMobMenu = () => {
        setShowMobMenu(!showMobMenu);
    }
    const Router = useRouter();
    return (
        <nav className='h-20 w-full  flex flex-row items-center justify-between p-3 fixed top-0 left-0
        md:px-20 md:h-24'>
            <div className="w-12 h-12 bg-imageTwo bg-contain bg-center bg-no-repeat cursor-pointer" onClick={() => Router.push('/')}></div>
            <div className=""><IoIosMenu onClick={handleShowMobMenu} className='text-gray-300 text-3xl md:hidden' />
                <ul className="hidden md:block text-white ">
                    <li className="inline mr-4 mix-blend-multiply text-gray-300 font-semibold
                    after:bg-red-300"  onClick={() => Router.push('/')}><a href="">Home</a></li>
                    <li className="inline text-gray-300 font-semibold"><a href="/#download">Download</a></li>
                </ul>
            </div>
            {
                showMobMenu ? 
            <div className="bg-slate-100 md:hidden fixed w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg">
                <AiOutlineClose className='top-3 absolute right-3 text-3xl' onClick={() => setShowMobMenu(false)} />
                <ul className='p-20 text-2xl'>
                    <li className='my-4' onClick={() => Router.push('/').then(() => setShowMobMenu(false))}>Home</li>
                    <li className='my-4' onClick={() => Router.push('/#download').then(() => setShowMobMenu(false))}>Download</li>
                </ul>
            </div> : null
            }


        </nav>
    )
}

export default Nav
