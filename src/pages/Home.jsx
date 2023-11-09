import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Signup from '../components/signup/Signup'
import Card from '../components/card/Card'
import WelcomePage from '../components/welcomepage/WelcomePage'
import UserWelcome from '../components/welcomepage/UserWelcome'
import { useSelector } from 'react-redux'
import CourtCard from '../components/courtCards/CourtCard'



function Home() {

  const {user} = useSelector((state)=>state.user)
  return (
    <>
        <Navigation />
        {user.role===2 ?<WelcomePage/>:<UserWelcome/>} 
        <Signup />
        <Card />
        
        
        
      

    </>
  )
}

export default Home