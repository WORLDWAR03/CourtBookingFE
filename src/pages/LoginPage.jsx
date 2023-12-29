import React, { useState } from 'react'
import Login from '../components/login/Login'
import Signup from '../components/signup/Signup'
import Navigation from '../components/navigation/Navigation';
import WelcomeNav from '../components/navigation/WelcomeNav';
import { setUser } from '../redux/userSlice';
import UserWelcome from '../components/welcomepage/UserWelcome';
import Footer from '../components/footer/Footer';

function LoginPage() {
const [boxName,setBoxName] =useState('login');
const {user} = setUser((state)=>state.user)


  return (
    <div>

 {user ? <Navigation/> : <WelcomeNav />}
 <UserWelcome/>
{ boxName==='login' &&<Login setBoxName={setBoxName}/>}
{ boxName==='signup' && <Signup setBoxName={setBoxName} />}
<Footer/>
    </div>
  )
}

export default LoginPage