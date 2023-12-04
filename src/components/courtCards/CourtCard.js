import React from 'react'
import { BASEURL } from '../../Constants/baseUrl'
import { useNavigate } from 'react-router-dom'

function CourtCard({data}) {
  const navigate= useNavigate()
  const openThisCard=()=>{
    navigate(`/singleCourtView/${data._id}`)
  }

  return (


 <div className=' mx-auto max-w-md bg:center gap-4  py-8 justify-center grid  md:grid-cols-1 place-items-center align-middle cursor-pointer  md:max-w-6xl bg-[#fff'>
    
   

  <div  className=" align-center sm:max-w-sm md:max-w-xl md:max-h-[32rem] w-full lg:max-w-full cursor-pointer lg:flex rounded-lg bg-[#d8f3dc]  shadow-lg" onClick={()=>openThisCard()}>
    <div  className="h-48 lg:h-auto md:h-52 lg:w-56 flex-none bg-cover rounded-t-lg lg:rounded-t-none   text-center overflow-hidden  items-end "  title="court image ">
        <img className='lg:h-full lg-w-full  rounded-l-lg' src={`${BASEURL}/venderImages/${data.image}`}/>
    </div>
    <div  className="border-r border-b border-l border-[#95d5b2] lg:border-l-0 lg:border-t-0 lg:border-r-0 lg:border-b-0  rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal bg-[#d8f3dc]">
      <div  className="mb-8 pt-2">
        <p  className="text-sm text-gray-600 flex items-center">
          <svg  className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p>
        <div  className="text-[#00424F] font-bold text-xl mb-2">{data.businessName}</div>
        <small>location:{data.location}</small>
        <br></br>
        <small>VenueType:{data.venueType} ({data.feature})</small>
        <p  className="text-gray-700 text-base">{data.aboutVenue}</p>
      </div>
    
    </div>
  </div>
 

 


</div>
  
  )
}

export default CourtCard