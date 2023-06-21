import React, {useState, useEffect} from 'react'
import { onAuthStateChanged} from '@firebase/auth'
import { auth } from '../../hooks/firebase'
import { Outlet } from 'react-router-dom'
import { C2TNavbar } from '../Navbar/C2TNavbar'

const Layout = ()=>{
    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (data)=>{
            console.log(data)
            setUser(data)
        })
    }, [])

    return(
        <>
            <C2TNavbar user={user} />
            <Outlet />
        </>
    )
}

export {Layout}