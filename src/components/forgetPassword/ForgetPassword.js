import React, { useState } from 'react'
import loginPic from '../../assets/volly.jpeg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

function ForgotPassword() {


    const [login,setLogin]=useState({
        email:'',
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
     
     setErrors(showErrors)
     

    }

    
    const navigate=useNavigate()
    const makeLogin =()=>{
        try {
            axios.post('http://localhost:8080/users/forget-password',login).then((response)=>{
                console.log(response);  
                if(response.data.status=== 'user not existed'){
                    Swal.fire({
                        icon: "question",
                        text: "user not existed!",
                        confirmButtonColor: '#2d6a4f',
                        background: '#d8f3dc'
                      });
                }
                if(response.data.staus === "success"){
                    Swal.fire({
                        icon: "question",
                        text: "A link has been sent to your email addressplease check your email!",
                        confirmButtonColor: '#2d6a4f',
                        background: '#d8f3dc'
                      });
                    navigate()

                }else{
                    alert("login failed")
                }
                
        }).catch(res=>{
            Swal.fire({
                icon: "question",
                text: "Enter Valid Email!",
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
   <section className='forgot min-h-screen  flex items-center justify-center '>

  <div className='bg-[#d8f3dc]  mx-8 flex rounded-md shadow-lg max-w-3xl  items-center'> 
  <div className='md:block hidden w-1/2 p-5'>
    <img className=' rounded-md' src={loginPic} alt=''></img>
    

   </div>

   <div className='sm:p-8 my-6 md:w-2/4 px-16 border '>
    <h2 className='font-bold text-2xl text-[#00424F]'> FORGOT PASSWORD </h2>
<p className='text-sm mt-4 text-[#00424F]' >Enter the email address you used to register with PLEY
    </p>

    <form onSubmit={handleLogin} action='' className='flex flex-col gap-4'>
        <input className='p-2 mt-8 rounded-md border' type='text' name='email' placeholder='Please enter your email id' onChange={(e)=>setLogin({...login,email:e.target.value})}/>
        {errors.email && <span>{errors.email}</span>}
        
        <button className='hover:scale-105 duration-300 bg-[#2d6a4f] rounded-md text-white py-2' onClick={makeLogin}>Send me instructions</button>
    </form>
    <div className='mt-4  items-center text-gray-400'>
        <hr className='border-gray-400'></hr>
        <p className='mt-2 text-center text-xs'>Terms and conditions & privacy policy</p>

    </div>

   

   </div>



  </div>
   </section>

  )
}

export default ForgotPassword