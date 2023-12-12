import React, { useEffect, useState } from 'react'
import './resetPassword.css'
import red from '../../assets/Red.jpeg'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';


function ResetPassword() {

   const {id,token}=useParams()
    const obj ={
      password:'',
      password2:''
    }
  const [login ,setLogin]=useState(obj)
 const Navigate=useNavigate()
  
  
  const handleSignUp=()=>{
    try {
      axios.post(`http://localhost:8080/users/reset-password/`,{id:id,token:token,login:login}).then((res)=>{
      
      if (res.data.status=== "success"){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "password updated"
          });  
          Navigate('/')
    
      }else{
       alert('signup failed')
      };  }
     )
     
    } catch (res) {
      
      
    }
  }
  
  
  const [errors, setErrors] = useState({})
  
  const handleSubmit=(event)=>{
  event.preventDefault()
  
  const validationErrors = {
  
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
    
  
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
  }
  
  }
   
    return (
      <div className='formInput min-h-screen flex items-center justify-center'>
  
          <div className='bg-[#d8f3dc] flex  rounded-md shadow-lg max-w-3xl py-15 items-center'> 
  
          <div className='md:w-1/2 px-8'>
            <h2 className='font-bold text-2xl w-full uppercase text-[#00424F] mb-6'>Reset Your Password:</h2>
  
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              
              <input className='p-2 rounded-md border' type='password' value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} placeholder='Enter new password' />
              {errors.password && <span>{errors.password}</span>}
              <input className=' p-2 rounded-md border' type='password' value={login.password2} onChange={(e)=>setLogin({...login,password2:e.target.value})} placeholder='confirm password  ' />
              {errors.password2 && <span>{errors.password2}</span>}
              <button className='hover:scale-105 duration-300 bg-[#2d6a4f] rounded-md text-white py-2' onClick={handleSignUp}>Reset</button>
              
          </form> 

          </div>
  
          <div className='md:block hidden w-1/2 p-5'>
              <img className=' rounded-md' src={red} alt='' />
  
          </div>
  
          </div>
      </div>
    )
  }
  
  export default ResetPassword