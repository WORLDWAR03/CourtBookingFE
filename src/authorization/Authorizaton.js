import React from "react";
import {Navigate,Outlet} from 'react-router-dom'

export function Authorization(){
    const token=localStorage.getItem('token')
    const user=localStorage.getItem('user')
    return(
        (token )?<Outlet/>:<Navigate to='/'/>
        
    )
}