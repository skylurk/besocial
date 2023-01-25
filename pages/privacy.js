import React from 'react'
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';
import { privacy } from '../data/privacy'

const Privacy = () => {
    const privacyDoc = privacy;
  return (
    <div className='bg-[#15004D] min-h-screen w-full md:px-20 py-20 px-4 md:p-24'>
        <Nav />
        <h4 className='font-bold text-5xl text-white mb-4'>Privacy Policy - Besocial</h4>
        <p className='text-white'>
            {
                privacyDoc.body
            }
        </p>
        <Footer />
    </div>
  )
}

export default Privacy