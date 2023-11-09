import React, { useEffect, useState } from 'react'
import './signup.css'
import red from '../../assets/Red.jpeg'
import axios from 'axios';


function Signup({setBoxName}) {




  const obj ={
    fullName:'',
    email:'',
    password:'',
    password2:''
  }

const [login ,setLogin]=useState(obj)
useEffect(()=>{
  console.log(login);

},[login])

const handleSignUp=()=>{
  axios.post('http://localhost:8080/auth/register',login).then((res)=>{
    
   if (res.data.signup){
    setBoxName('login')
   }else{
    alert('signup failed')
   };  }
  )
}

const [errors, setErrors] = useState({})

const handleSubmit=(event)=>{
event.preventDefault()

const validationErrors = {

}

if(!login.fullName.trim()){
  validationErrors.fullName = "username is required"
}
if(!login.email.trim()){


  validationErrors.email = "email is required"
} else if(/\S+@\S+\.S+/.test(login.email)){
  validationErrors.email = "email is required"
}
if(!login.password.trim()){
  validationErrors.password = "password is required"
} else if(login.password.length < 8){
  validationErrors.password2 = "password must contain atleast 8 characters"
}
if(login.password2 !== login.password){
  validationErrors.password2 = "password must match "
}

setErrors(validationErrors)
if(Object.keys(validationErrors).length === 0){
  alert("form Submitted successfully")
}

}
 
  return (
    <div className='formInput min-h-screen flex items-center justify-center'>

        <div className='bg-[#d8f3dc] flex  rounded-2xl shadow-lg max-w-3xl py-15 items-center'> 

        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-2xl text-[#00424F]'>Register here:</h2>
          <p className='text-sm mt-4 text-[#00424F]'>Togethor we can</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <label className=' mt-8 text-[#00424F] text-sm'>Full Name</label>
            <input className=' p-2 rounded-xl border' type='text' value={login.fullName} onChange={(e)=>setLogin({...login,fullName:e.target.value})} placeholder='Full name'  />
            {errors.fullName && <span>{errors.fullName}</span>}
          
            <label className='  text-[#00424F] text-sm'>Email</label>

            <input className='p-2 rounded-xl border' type='email' value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})} placeholder='email' />
            {errors.email && <span>{errors.email}</span>}
            <label className='text-[#00424F] text-sm'>Password</label>

            <input className='p-2 rounded-xl border' type='password' value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} placeholder='password' />
            {errors.password && <span>{errors.password}</span>}
            <input className=' p-2 rounded-xl border' type='password' value={login.password2} onChange={(e)=>setLogin({...login,password2:e.target.value})} placeholder='confirm password  ' />
            {errors.password2 && <span>{errors.password2}</span>}
            <button className='hover:scale-105 duration-300 bg-[#2d6a4f] rounded-xl text-white py-2' onClick={handleSignUp}>Register</button>
            
        </form> 
        <div className='text-xs flex justify-between mt-2 items-center border-t py-2'>
            <p>Have an accout?</p>
            <button className='hover:scale-110 duration-300 py-2 px-5 bg-white border rounded-xl' onClick={()=>setBoxName('login')}>Login</button>
        </div>
        </div>

        <div className='md:block hidden w-1/2 p-5'>
            <img className=' rounded-2xl' src={red} alt='' />

        </div>

        </div>
    </div>
  )
}

export default Signup