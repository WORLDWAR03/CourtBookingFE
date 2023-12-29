import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-biege-500 text-green text-center py-8">
      <div className="gap-3 flex  md:grid-cols-2">
        <div className=' w-1/3 items-center  m-2'>
          <h3 className='text-xl font-bold uppercase text-[#1b4332] pb-1'>NEED help</h3>
          <ul>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Contact Us</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>My Account</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Payment Issues</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Refund</li>
          </ul>
          
        </div>

        <div className=' w-1/3 items-center m-2'>
          <h3 className='text-xl font-bold uppercase text-[#1b4332] pb-1'>COMPANY</h3>
          <ul>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>About Us</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Careers</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Community Initiatives</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>PLEY Community</li>
          </ul>
          
        </div>

        <div className=' w-1/3 items-center m-2'>
          <h3 className='text-xl font-bold uppercase text-[#1b4332] pb-1'>MORE INFO</h3>
          <ul>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Everything About</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Sitemap</li>
            
          </ul>
          
        </div>

        <div className=' w-1/3 items-center m-2'>
          <h3 className='text-xl font-bold uppercase text-[#1b4332] pb-1'>PLEY NEAR ME</h3>
          <ul>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>TamilNadu</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Kerala</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Karnataka</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Andra</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Delhi</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Gujarat</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Maharastra</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Mumbai</li>
            <li className='hover:text-black m-2 text-xl font-semibold text-gray-700 cursor-pointer'>Goa</li>




          </ul>
          
        </div>

       
        
      </div>
      <div>
        <hr className='my-3'></hr>
      <p className="mb-2">Copyright © 2023 PLEY. All rights reserved.</p>
        <nav className="flex justify-center">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a href="#" className="text-gray-600 hover:text-gray-200">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="#" className="text-gray-600 hover:text-gray-200">
                Terms of Service
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-gray-600 hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;