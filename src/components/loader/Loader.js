import React from 'react';
import "./loader.css"
import { useSelector } from 'react-redux';


function Loader() {

  return (
    <>{
         <div className='overlay w-full' >
        <div className='absolute w-full  top-60 left-50 align  text-center   '>
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    
        </div>
        </div>
    }
      
    </>
  
  )
}

export default Loader