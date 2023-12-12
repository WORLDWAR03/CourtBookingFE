import React, { useState } from 'react'
import './login.css'
import loginPic from '../../assets/omg.jpeg'
import google from '../../assets/google.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

function Login({setBoxName}) {


    const [login,setLogin]=useState({
        email:'',
        password:''
    });


    const dispatch = useDispatch()



    const [errors,setErrors]=useState({})


    const handleLogin=(event)=>{
     event.preventDefault()
     const showErrors={

     }
     if(!login.email.trim()){
        showErrors.email="email is required"
     }else if(/\S+@\S+\.S+/.test(login.email)){
            showErrors.email = "valid email is required"

     }
     if(!login.password.trim()){
        showErrors.password="password is required"
     }else if(login.password.length < 8){
        showErrors.password="password must contain atleast 8 characters"
     }
     setErrors(showErrors)
     

    }

    
    const navigate=useNavigate()
    const makeLogin =()=>{
        try {
            axios.post('http://localhost:8080/auth/login',login).then((response)=>{
                console.log(response);  
                if(response.data.login){
                    localStorage.setItem('autherisation',response?.data?.token)
                    dispatch(setUser(response?.data.user))
                    navigate('/home')

                }else{
                    alert("login failed")
                }
                
        }).catch(res=>{
            Swal.fire({
                icon: "question",
                text: "Enter Valid Email and Password!",
                confirmButtonColor: '#2d6a4f',
                background: '#d8f3dc'
              });
        })

        } catch (res) {


            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            
        }
       
       
   
    }



   
  return (
   <section className='logo min-h-screen flex items-center justify-center '>
s  
  <div className='bg-[#d8f3dc] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'> 

   <div className='md:w-1/2 px-16'>
    <h2 className='font-bold text-2xl text-[#00424F]'>login</h2>
<p className='text-sm mt-4 text-[#00424F]' >new styles of bueatiful newmorphic designs
    </p>

    <form onSubmit={handleLogin} action='' className='flex flex-col gap-4'>
        <input className='p-2 mt-8 rounded-xl border' type='text' name='email' placeholder='Email' onChange={(e)=>setLogin({...login,email:e.target.value})}/>
        {errors.email && <span>{errors.email}</span>}
        <input className='p-2 rounded-xl border w-full' type='password' name='password' placeholder='Password'onChange={(e)=>setLogin({...login,password:e.target.value})} />
        {errors.password && <span>{errors.password}</span>}
        <button className='hover:scale-105 duration-300 bg-[#2d6a4f] rounded-xl text-white py-2' onClick={makeLogin}>Login</button>
    </form>
    <div className='mt-7 grid grid-cols-3  items-center text-gray-400'>
        <hr className='border-gray-400'></hr>
         <p className='text-center '>OR</p>
        <hr className='border-gray-400'></hr>
    </div>

    <button className='hover:scale-105 duration-300 bg-white border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-5m'><img className='w-6' src={google} /> Login with Google</button>

    <Link to={'/forgot-password'}><p className='mt-1 text-xs text-black border-b py-2'>forget your password</p></Link>

    <div className='text-xs flex justify-between mt-2 items-center'>
        <p>Dont have an account?</p>
        <button className='hover:scale-110 duration-300 py-2 px-5 bg-white border rounded-xl' onClick={()=>setBoxName('signup')} >Register</button>
    </div>

   </div>

   <div className='md:block hidden w-1/2 p-5'>
    <img className=' rounded-2xl' src={loginPic} alt=''></img>
    

   </div>

  </div>
   </section>

  )
}


export default Login