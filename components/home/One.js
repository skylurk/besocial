import React from 'react'
import { BsDot } from 'react-icons/bs'

const One = () => {
    return (
        <div className="bg-image h-screen w-full bg-center bg-no-repeat bg-cover p-4">
            <div className=' h-screen w-full  bg-cover flex flex-col justify-end pb-12
            md:w-[40%] md:mx-auto md:items-center'>
                <h1 className="text-6xl font-extrabold mb-10 text-white">Be<span class="text-[#F9A735]">Social</span> App</h1>
                <p className="mb-6 text-1xl font-bold md:font-normal md:text-center md:text-2xl text-white">BeSocial is East Africa’s own short video platform for viral
                    and never ending
                    content to keep you entertained. It caters for both content creators and content consumers.</p>
                    <button className="w-1/2 py-3 bg-[#F9A735] rounded-full mb-6 text-white">Donwload</button>
                    
                    <div className="w-full  grid place-items-center"><BsDot className='text-6xl animate-bounce text-white' /></div>

                
            </div>

        </div>
    )
}

export default One