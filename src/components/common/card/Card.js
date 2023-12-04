import React from 'react'
import { BASEURL } from '../../../Constants/baseUrl'
import { useNavigate } from 'react-router-dom'

function Card({data}) {

    const navigate = useNavigate()

    const openBookingPage =()=>{
       navigate(`/singleCardView/${data._id}`)
    }


  return (
   




<div className="overflow-x-hidden   min-w-[300px] max-w-[700px] p-3 m-6 cursor-pointer  shadow-xl  rounded-xl  dark:bg-[#1b4332] dark:border-gray-700" onClick={()=>openBookingPage()}>
    <a href="#">
        <img className="rounded-t-lg max-h-[200px] w-full" src={`${BASEURL}/venderImages/${data.image}`} alt="" />
    </a>
    <div className="p-5 w-fill ">
        <a href="#" className='w-fill'>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white items-center">{data.businessName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.aboutVenue.slice(0,120)}</p>
            <p> {JSON.stringify(data._id)}</p> 
       
    </div>

    






</div>

  )
}

export default Card