import React, {useState, useEffect} from 'react'
import { onAuthStateChanged} from '@firebase/auth'
import { auth } from '../../hooks/firebase'
import { Outlet } from 'react-router-dom'
import { C2TNavbar } from '../Navbar/C2TNavbar'
import ShoppingCart from '../../assets/ShoppingCart.png'
import './Layout.css'

const Layout = ()=>{
    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (data)=>{
            setUser(data)
        })
    }, [])

    return(
        <>
            <C2TNavbar user={user} />
            <div className='--layout-image-container flex flex-center'>
                <img className='--layout-shoppingCart-image' src={ShoppingCart} alt="picture of shopping Cart" />
            </div>
            <Outlet context={user}/>
        </>
    )
}

export {Layout}