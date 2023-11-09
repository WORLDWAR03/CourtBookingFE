import React, { useState } from 'react'
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'



function WelcomeNav() {



  
    const [active,setActive]=useState(false)
      const showMenu=()=>{
        setActive(!active)
      }
  
    
    
    return (
      <div >
      <nav className='nav fixed bg-[#1b4332]  w-full md:flex justify-between p-4  items-center'>
        <a href='' className='brand text-2xl font-bold text-center block'>PLEY</a>
        
        <div className='absolute right-6 md:hidden '>
        <FontAwesomeIcon icon={faBars} className='h-6 text-white cursor-pointer scale-100' onClick={showMenu} />
  
        </div>
        
        <ul className="nav_menu hidden md:flex gap-8 p-6 uppercase items-center  " >
          <li className='nav_item'>
            <a href=''>
              <span area-hidden="true"></span>Home
            </a>
          </li>
          <li className='nav_item'>
            <a href="" className='nav_link'>
              <span aria-hidden="true"></span>Book
            </a>
          </li>
          <li className='nav_item'>
          <a href="" className='nav_link'>
              <span aria-hidden="true"></span>Events
            </a>
          </li>
  
          <li className='nav_item'>
          <a href="" className='nav_link'>
              Play
            </a>
          </li>
  
          <li className='nav_item'>
          <a href="" className='nav_link'>
              <span aria-hidden="true"></span>Learn
            </a>
          </li>
  
          
          
     
  
        </ul>
  
        <MenuItems showMenu={showMenu} active={active}/>
  
       
      </nav>
  
  
  
      </div>
  
  
  
    )
  }


export default WelcomeNav