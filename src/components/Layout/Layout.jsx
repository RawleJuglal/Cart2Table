import React, {useState, useEffect} from 'react'
import { onAuthStateChanged} from '@firebase/auth'
import { auth } from '../../hooks/firebase'
import { Outlet } from 'react-router-dom'
import { C2TNavbar } from '../Navbar/C2TNavbar'

const Layout = ()=>{

    useEffect(()=>{
        onAuthStateChanged(auth, (data)=>{
            console.log(data)
        })
    }, [])

    return(
        <>
            <C2TNavbar />
            <Outlet />
        </>
    )
}

export {Layout}