import React, { useEffect, useState } from 'react'
import Navigation from '../components/navigation/Navigation'
import CourtCard from '../components/courtCards/CourtCard'
import AxiosInstance from '../config/axiosInstance'
import Loader from '../components/loader/Loader'
import { useDispatch } from 'react-redux'
import { setOpenLoader } from '../redux/userSlice'
import Footer from '../components/footer/Footer'

function MyCourtPage() {

  const [courtData,setCourtData]=useState([])
  const dispatch = useDispatch()

 useEffect(()=>{
  try {
    
    AxiosInstance.get('/vender/getMyCourtData').then((response)=>{
      setCourtData(response.data.data)

    }).catch((err)=>{
    })
  } catch (error) {
  }

 },[])



  return (
    <>


        <Navigation />
        <div className=' sm:grid-cols-1 z-0  pt-36 bg-[#fff] min-h-[700px]'>
        {courtData.map(court=>
         <CourtCard key={court._id} data={court}/>
        )}
       </div>

       <Loader/>
       <Footer/>
    </>
  )
}

export default MyCourtPage