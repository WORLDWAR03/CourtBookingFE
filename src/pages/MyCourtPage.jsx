import React, { useEffect, useState } from 'react'
import Navigation from '../components/navigation/Navigation'
import CourtCard from '../components/courtCards/CourtCard'
import AxiosInstance from '../config/axiosInstance'

function MyCourtPage() {

  const [courtData,setCourtData]=useState([])

 useEffect(()=>{
  try {
    AxiosInstance.get('/users/getMyCourtData').then((response)=>{
      setCourtData(response.data.data)
    }).catch((err)=>{
      console.log(err);
    })
  } catch (error) {
    console.log(error);
  }

 },[courtData])



  return (
    <>


        <Navigation />
        <div className=' sm:grid-cols-1 pt-20 bg-[#2c6e49]'>

        {courtData.map(court=>
         <CourtCard key={court._id} data={court}/>
                       )}
       </div>
    </>
  )
}

export default MyCourtPage