import React from 'react'
import './welcomepage.css'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div className='welcome shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 bg:center  min-h-screen '>

   
    <div className=' text-white pt-60 pl-5 max-w-xl shadow	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);'>
      <h1 className='text-6xl font-semibold leading-normal'>List Your Business</h1>
      <p>Looking to target sports and fitness enthusiasts to increase your outreach and sales? Get that and much more just by listing your business on Pley!
</p>
<div className='text-[#1b4332] uppercase mt-8'>
    <a className='bg-[#fff] text-[#1b4332] rounded-3xl py-3 px-5 font-medium inline-block mr-4 hover:bg-[#1b4332] hover:text-white duration-300 shadow-inner cursor-pointer' >I'm intrested</a>
<Link to={'/courtRegistration'}><a className='bg-[#fff] text-[#1b4332] rounded-3xl py-3 mt-2 px-5 font-medium inline-block mr-4 hover:bg-[#1b4332] hover:text-white duration-300 shadow-inner cursor-pointer' >List your Business</a></Link>
</div>

</div>

    </div>
  )
}

export default WelcomePage