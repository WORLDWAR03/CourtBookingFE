import React from 'react'
import SigleCourtView from '../components/intialCourtData/IntialCourtData'
import Navigation from '../components/navigation/Navigation'
import IntialCourtData from '../components/intialCourtData/IntialCourtData'
import ScheduleTable from '../components/table/ScheduleTable'
import Modal from '../components/common/modal/Modal'
import Footer from '../components/footer/Footer'
 


function SingleCourtViewPage(){    
  return (
    <>

        
      
       <Navigation/>
        <IntialCourtData />
    

        <ScheduleTable />
        <Footer/>
        
    
        {/* schedule table */}
        
    

    </>
    
  )
}

export default SingleCourtViewPage