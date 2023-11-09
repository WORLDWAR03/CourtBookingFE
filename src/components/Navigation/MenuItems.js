import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {Menu, Transition} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MenuItems({showMenu, active}) {

  return (
    <div className={active ? 'flex-col flex items-center fixed inset-0 left-1/4  uppercase bg-black/40 backdrop-blur-md gap-8 justify-center md:hidden ':'hidden'} >

       <FontAwesomeIcon icon={faXmark} className='text-white h-6 cursor-pointer' onClick={showMenu}/>
         <ul className="nav_menu uppercase " >
        <li className='nav_item pb-2'>
          <a href=''>
            <span area-hidden="true"></span>Home
          </a>
        </li>
        <li className='nav_item pb-2'>
          <a href="" className='nav_link'>
            <span aria-hidden="true"></span>Bookings
          </a>
        </li>
        <li className='nav_item pb-2'>
        <a href="" className='nav_link'>
            <span aria-hidden="true"></span>Events
          </a>
        </li>

        <li className='nav_item pb-2'>
        <a href="" className='nav_link'>
            <span aria-hidden="true"></span>Play
          </a>
        </li>

        <li className='nav_item pb-2'>
        <a href="" className='nav_link'>
            <span aria-hidden="true"></span>Learn
          </a>
        </li>

        
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transperant px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-10 hover:text-black">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
    </div>
  )
}

export default MenuItems