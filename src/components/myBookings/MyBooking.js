import React, { useEffect } from 'react'
import Navigation from '../navigation/Navigation'
import './myBooking.css'
import AxiosInstance from '../../config/axiosInstance'

function MyBooking() {
 useEffect(()=>{
   getMyBookings()
 },[])

 const getMyBookings =()=>{
    try {
       AxiosInstance.get('/users/getMyBookings').then((res)=>{
        console.log(res);
       })
    } catch (error) {
        
    }
 }
  return (

    <>
    <div className='nav'>
        <Navigation/>
    </div>
    <div className='min-h-full min-w-full  items-ceneter  mt-6  gap-4  grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-7xl bg-[#fff] overflow-x-hidden' >

    hellow
  
    </div>
    </>
  
  )
}

export default MyBooking