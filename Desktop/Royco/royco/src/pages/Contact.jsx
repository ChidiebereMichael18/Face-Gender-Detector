import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <div className='mt-6 '>
        <h1 className='font-bold text-center md:text-4xl text-2xl font-mont'>Contact Us</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between mx-4 md:mx-15 lg:mx-20'>
        <ContactForm/>
        <div className='mt-8 '>
          <h2 className='text-center text-blue text-xl font-mont font-bold'>OUR ADDRESS</h2>
          <p className='pt-4 text-black font-lexend'>Africa,Asia, Americas, UK and Europe</p>
          <p className='pt-1 tet-black font-lexend'>Tel: +1 542-247-3405</p>
          <p className='pt-1 text-black font-lexend'>Email: roycodeliveryexpress@gmail.com </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
