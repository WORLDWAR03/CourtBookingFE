import React, { useEffect, useState } from 'react'
import Card from '../common/card/Card'
import Event from '../common/Events/Event'
import AxiosInstance from '../../config/axiosInstance'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function CardsAndEvents() {

const [page,setPage]=useState(1)  
const [count,setCount]=useState(0)
console.log(page);


const [courts,setCourts]=useState([])

console.log(courts);
    useEffect(()=>{
       getAllCourtsData()

    },[page])

    const getAllCourtsData=()=>{
      try {
        AxiosInstance.get('/vender/getAllCourtData',{params:{page}}).then((res)=>{
          setCourts(res.data.courts)
          }).catch((res)=>{
            if(res){

            }
          })
          
          
      }
  
      catch (error) {
        
      }
    }


  
 
  const getItemProps = (index) =>
    ({
      variant: page === index ? "filled" : "text",
      color: '',
      onClick: () => setPage(index),
      className: "rounded-full",

     
    } );
   
 
  const next = () => {
    setPage((p)=>{
      if(p==5) return p;
      return p +1;
    })
  };
 
  const prev = () => {
    setPage((p)=>{
      if(p === 1) return p;
      return p - 1;
    })
  };
  return (
    <>
    <div className='min-h-full min-w-full  items-ceneter  mt-6  gap-4  grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-7xl bg-[#fff] overflow-x-hidden' >

        {
          courts.map((element)=>
            <Card key={element.id} data={element}/>
          )
        }
       
       </div>

    <div className="flex justify-center py-3 items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={page === 1}
        
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2 ">
        <IconButton {...getItemProps(1) }  value={1}>1</IconButton>
        <IconButton {...getItemProps(2) }  value={2}>2</IconButton>
        <IconButton {...getItemProps(3) }  value={3}>3</IconButton>
        <IconButton {...getItemProps(4) }  value={4}>4</IconButton>
        <IconButton {...getItemProps(5) }  value={5}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={page === 5}
      
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>


      
    </div>
    </>
  )
}

export default CardsAndEvents