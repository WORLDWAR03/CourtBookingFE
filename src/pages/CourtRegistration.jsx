import React from 'react'
import Navigation from '../components/navigation/Navigation'
import CortRegistrationForm from '../components/courtRegistrationForm/CourtRegistrationForm'
import Footer from '../components/footer/Footer'

function CourtRegistration() {
  return (
    <div>
        <Navigation/>
        <CortRegistrationForm />
        <Footer/>
    </div>
  )
}

export default CourtRegistration