import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { ListInput } from '../../components/ListInput/ListInput'
import { ShoppingList } from '../../components/ShoppingList/ShoppingList'
import './Home.css'


const Home = ()=>{
    const user = useOutletContext()

    return(
        <>
            <main className='--main flex flex-column flex-align-center'>
                <ListInput />
                {user ? (<ShoppingList user={user} />): (<h1>Please login for your list</h1>) }
            </main>
            
        </>
    )
}

export {Home};