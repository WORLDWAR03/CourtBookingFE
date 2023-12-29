import React, { useEffect, useState } from 'react'
import Navigation from '../../navigation/Navigation'
import './bookingPage.css'
import AxiosInstance from '../../../config/axiosInstance'
import { BASEURL } from '../../../Constants/baseUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import Button from '../../button/Button'
import Swal from 'sweetalert2'

function BookingPage() {
  
  const[courtData,setCourtData]=useState({})
  const[selectedDate,setSelectedDate]=useState(new Date().toISOString().split("T")[0])
  const [courtSchedules, setCourtSchedules]=useState([])
  const {id}=useParams()
 
  useEffect(()=>{

    AxiosInstance.get('/users/getBookingPage',{params:{id}}).then((res)=>{
         setCourtData(res.data.data)
        
    })
    getAvailabe()
  },[])

  const getAvailabe =()=>{
    try {
      
      let currentHour
      if(new Date().toISOString().split("T")[0] === new Date(selectedDate).toISOString().split("T")[0])
      {
        currentHour= new Date().getHours()
      }
      else{
        currentHour=-1
      }   AxiosInstance.get('users/getAvailableSlots',{params:{courtId:id,date:new Date(selectedDate),currentHour:currentHour}})
      .then((res)=>{
    
       
       setCourtSchedules(res.data.resp)
       
 
 
       
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }

  


  return (
    <>
    

    <div className=' md:flex flex-col  w-100% '>
        <div  className='nav' >
          <Navigation /> 
        </div>
          

        <div className=' sm:flex flex-row  '>
                <div className='flex flex-col basis-2/3 bg-white '>
                      <div className=' h-[100px] w-3/4 mt-5  mx-6  items-center'>
                         <p className='text-gray-600 py-2'>{courtData.location}</p>
                        <h3 className='text-3xl font-bold py-2 text-green '>{courtData.businessName}</h3>
                      </div>
                      <div className='img max-h-[600px]  mx-6 mt-5 '>
                         <img className='max-h-[90%] rounded w-[95%]' src={`${BASEURL}/venderImages/${courtData.image}`}/>
                      </div>
                      <div className=" flex flex-col ">
    <div className='h-[100px] mx-6 my-2 p-3 border rounded-xl'> 
      <h1 className="text-xl font-bold text-left ">Venue Type</h1>
      <p className=" mt-2">{courtData.venueType}</p>
    </div>  

        <div className='h-[150px] mx-6 my-2 p-3 border rounded-xl '>
        <h2 className="text-xl font-bold mt-5 mb-5">Amenities</h2>

          <div className='flex justify-evenly'>
          <div><FontAwesomeIcon icon={faCircleCheck} className='text-green-700' /> Parking</div>    <div><FontAwesomeIcon icon={faCircleCheck} className='text-green-700'/> Toilets</div>    <div><FontAwesomeIcon icon={faCircleCheck} className='text-green-700'/> Drinking Water</div>
          <div><FontAwesomeIcon icon={faCircleCheck} className='text-green-700'/> Waiting Area</div>             <div><FontAwesomeIcon icon={faCircleCheck} className='text-green-700'/> First Aid</div>       
    
        </div>
          </div>
        
    <div className='h-[150px] mx-6 my-2 p-3 border rounded-xl'> 
        <p className="text-xl font-bold mt-5 mb-5">Related To {courtData.businessName}</p>
        <p className="mb-2">Sports Clubs in Rohini,We provide necessary first aid and CPR certification for the users.</p>
      </div>
    </div>

                </div>

                <div className=' flex flex-col basis-1/3 items-center '>
                          <div className='items-center  mt-10 md:mt-24 px-2 w-[90%] '>

                            <div type="button" className="  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 text-center">
                              BooK
                            </div>
                           <div className=' pt-2 flex justify-between'>
                            <div type="button" className="w-1/2 text-center  text-green bg-white hover:bg-gray-200  cursor-pointer border border-gray-400  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "><FontAwesomeIcon className='text-green-900 ' icon={faShareFromSquare} /> Share</div>
                            <div type="button" className="w-1/2 text-center  text-green bg-white hover:bg-gray-200  cursor-pointer border border-green ring-green-900 ring-offset-1 ring-1 focus:ring-2 green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Bulk Booking</div>

                           </div>
                          </div>

                          <div className='h-[100px] flex flex-col justify-center items-center my-1 border border-1 border-gray-400 rounded w-[90%]'>
                           <p className='font-normal pl-1'>Offers Available</p>
                           <div className='border items-center w-[90%] h-[60%]'> 

                           </div>
                          </div>
                           
                           
                          <div className='h-auto my-1 border border-1 border-gray-400 rounded w-[90%]  '>
                      <div className='flex justify-between items-center m-2 gap-2'> 
                      <input className='w-4/5 border border-green-200 rounded h-[34px]' min={new Date().toISOString().split("T")[0]} value={selectedDate} type='date' onChange={(e)=>setSelectedDate(e.target.value)}/>
                      <button type="button" className= "w-1/5 text-white bg-gradient-to-r from-green-500 via-green-700 to-green-900 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-500 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2  text-center me-2 mt-1 mb-2 " onClick={getAvailabe}>search</button>



                      </div>

                     <div className='overflow-y-auto items-center mt-3 px-7 h-auto gap-2 grid grid-cols-4  overflow-x-visible w-full '>   {courtSchedules?.map((element)=>
                              <Button slot ={element}/>
                         )}</div>
                          </div>    
                          <div className='min-h-[200px] my-1 border border-1 items-center overflow-y-scroll  border-gray-400 rounded w-[90%]'>
                            <div className='justify-center m-3 '>
                            {courtData.aboutVenue}
                            </div>
                          </div>

                         
             

                </div>
        </div>

    </div>
    </>
  )
}

export default BookingPage