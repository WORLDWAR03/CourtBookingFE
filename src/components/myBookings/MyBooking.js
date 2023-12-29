import React, { useEffect, useState } from 'react'
import Navigation from '../navigation/Navigation'
import './myBooking.css'
import AxiosInstance from '../../config/axiosInstance'
import UpComingBookings from '../upComingBookings/UpComingBookings'
import {Menu, Transition} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Button } from "@material-tailwind/react";
 



function MyBooking() {
  const [bookings, setBookings]= useState([])
 useEffect(()=>{
   getMyBookings()
 },[])

 const getMyBookings =()=>{
    try {
       AxiosInstance.get('/users/getMyBookings').then((res)=>{
        console.log(res);
        setBookings(res.data)
        console.log(bookings);

       })
    } catch (error) {
        
    }
 }

 const getPreviousBookings=()=>{
    try {
      AxiosInstance.get('/users/getPreviousBookings').then((res)=>{
        console.log(res);
        setBookings(res.data)
      })
        
    } catch (error) {
      alert("something went wrong")
    }
 }  

 const getCancelldBookings =()=>{
  try {
    AxiosInstance.get('/users/getCancelldBookings').then(
      (res)=>setBookings(res.data)
    )
  } catch (error) {
    alert("something went wrong")
  }
 }
  return (

    <>
    <div className='nav'>
        <Navigation/>
    </div>
    <div className=' m-w-full items-center flex justify-between  '>
      <div>
      <h3 className='text-3xl font-bold m-6 mt-8 '>Bookings :</h3>
      </div>

      <div className='py-2 font-md m-6 mt-8'>
       
        <Button variant="filled" className='m-1' onClick={getMyBookings}>UpComing</Button>
        <Button variant="gradient"className='m-1' onClick={getPreviousBookings}>Previous Bookings</Button>
      <Button variant="outlined"className='m-1' onClick={getCancelldBookings}>Cancelled</Button>
      </div>

    </div>
    <div className='min-w-full  items-ceneter  mt-3 gap-4  grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 md:max-w-7xl bg-[#fff] overflow-x-hidden min-h-[500px]' >

      

     {
      bookings.map(data=><UpComingBookings key={data._id} data={data}/>
      )
     }
    
     
    
  
    </div>
    </>
  
  )
}

export default MyBooking