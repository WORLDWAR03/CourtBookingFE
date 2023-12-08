import React, { useState } from 'react'
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuItems from './MenuItems'
import {Menu, Transition} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Navigation() {

  const Navigate = useNavigate()
  const {user}=useSelector((state)=>state.user)
  const {id}= useParams()
  

  const [active,setActive]=useState(false)
    const showMenu=()=>{
      setActive(!active)
    }

  const Logout=()=>{
    localStorage.clear()
    Navigate('/') 
  }
  
  return (
    <div className='z-10' >
    <nav className='nav fixed bg-[#1b4332]  w-full md:flex justify-between p-4 mb-48 items-center'>
      <a href='' className='brand text-2xl font-bold text-center block'>PLEY</a>
      
      <div className='absolute right-6 md:hidden '>
      <FontAwesomeIcon icon={faBars} className='h-6 text-white cursor-pointer scale-100' onClick={showMenu} />

      </div>
      
      <ul className="nav_menu hidden md:flex gap-8 p-6 uppercase items-center  " >
        <li className='nav_item'>
        <Link to={'/home'}> <a href=''>
            <span area-hidden="true"></span>Home
          </a></Link> 
        </li>
        <li className='nav_item'>
        <Link to={'/Bookings'}>
          <a href="" className='nav_link'>
            <span aria-hidden="true"></span>Bookings
          </a>
          </Link>
        </li>
        <li className='nav_item'>
        <a href="" className='nav_link'>
            <span aria-hidden="true"></span>Events
          </a>
        </li>

       

        <li className='nav_item'>
        <a href="" className='nav_link'>
            <span aria-hidden="true"></span>Learn
          </a>
        </li>

        {user.role ===2 &&  <li className='nav_item'>
          <Link to={'/myCourts'}>
        <a href="" className='nav_link'>
            Mycourt
          </a>
          </Link>
        </li>}

 {user.role===2 && <li className='nav_item'>
 <Link to={'/courtRegistration'}> <a  className='nav_link cursor-pointer'>

          partner-with-us</a>
          </Link>
        </li> }
        
    <Menu as="div" className="relative inline-block text-left max-w-xs ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#2c6e49] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50">
       <p>{`${user?.fullName}`}</p> 
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={Logout}
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

      </ul>

      <MenuItems showMenu={showMenu} active={active}/>

     
    </nav>



    </div>



  )
}

export default Navigation
