import React, { useEffect, useState } from 'react'
import Navigation from '../components/navigation/Navigation'
import CourtCard from '../components/courtCards/CourtCard'
import AxiosInstance from '../config/axiosInstance'
import Loader from '../components/loader/Loader'
import { useDispatch } from 'react-redux'
import { setOpenLoader } from '../redux/userSlice'

function MyCourtPage() {

  const [courtData,setCourtData]=useState([])
  const dispatch = useDispatch()

 useEffect(()=>{
  try {
    
    AxiosInstance.get('/vender/getMyCourtData').then((response)=>{
      setCourtData(response.data.data)

    }).catch((err)=>{
      console.log(err);
    })
  } catch (error) {
    console.log(error);
  }

 },[])



  return (
    <>


        <Navigation />
        <div className=' sm:grid-cols-1 z-0  pt-36 bg-[#fff]'>

        {courtData.map(court=>
         <CourtCard key={court._id} data={court}/>
                       )}
       </div>

       <Loader/>
    </>
  )
}

export default MyCourtPage