import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Signup from '../components/signup/Signup'
import Card from '../components/common/card/Card'
import WelcomePage from '../components/welcomepage/WelcomePage'
import UserWelcome from '../components/welcomepage/UserWelcome'
import { useSelector } from 'react-redux'
import CardsAndEvents from '../components/HomePageViews/CardsAndEvents'
import  Pagination  from '../components/pagination/Pagination'




function Home() {

  const {user} = useSelector((state)=>state.user)
  return (
    <>
        <Navigation />
        {user.role===2 ?<WelcomePage/>:<UserWelcome/>} 
        <CardsAndEvents/>
        
        
        
        
      

    </>
  )
}

export default Home