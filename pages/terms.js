import React from 'react'
import { terms } from '../data/terms'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer';

const Terms = () => {
    const termsDoc = terms;
  return (
    <div className='bg-[#15004D] min-h-screen w-full md:px-20 py-20 px-4 md:p-24'>
        <Nav />
        <h4 className='font-bold text-5xl text-white mb-4'>Besocial user Terms and Conditions</h4>
        <p className='text-white'>
            {
                termsDoc.body
            }
        </p>
        <Footer />
    </div>
  )
}

export default Terms