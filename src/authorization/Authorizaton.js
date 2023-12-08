import React from "react";
import {Navigate,Outlet} from 'react-router-dom'

export  function Authorization(){
    const token=localStorage.getItem('autherisation')
    const user= JSON.parse(localStorage.getItem('user'))
    return(
        (token && user )? <Outlet/>:<Navigate to='/'/>
        
    )
}

export  function LoginPageAuth(){
    const token = localStorage.getItem('autherisation')
    return(
        token ? <Navigate to={'/home'}/> : <Outlet/>
    )
}

export function VenderAuth(){
    const token=localStorage.getItem('autherisation')
    const user= JSON.parse(localStorage.getItem('user'))
    return(
        (token && user.role === 2 )? <Outlet/>:<Navigate to='/'/>
        
    )
}
