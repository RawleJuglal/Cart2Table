import React, {useState, useEffect } from 'react'
import './ShoppingList.css'
import { database, auth } from '../../hooks/firebase'
import { collection, onSnapshot, deleteDoc, doc } from '@firebase/firestore'

const ShoppingList = (props)=>{
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [user, setUser] = useState(props.user)

    let ShoppingListEL = ''

    useEffect(()=>{
        setIsLoading(true) 
        const collectionRef = collection(database, `${user.displayName}`) 
        const unsub = onSnapshot(collectionRef, (data)=>{
            const dataArr = data.docs.map(item =>({
                ...item.data(),
                id:item.id
            }))
            console.log(dataArr)
            setData(dataArr)
            setIsLoading(false)
        })  
        
        return ()=>{
            unsub()
        }
    },[])

    function handleDelete(currentID){
        const docToUpdate = doc(database, auth.currentUser.displayName, currentID)
        deleteDoc(docToUpdate)
        .then(()=>{
            console.log('document deleted')
        })
        .catch((error)=>{
            throw new Error(error)
        })
    }

    if(data){
        ShoppingListEL = data.map(item => {
            return(<div className='list-item' key={item.id} onDoubleClick={event=> (handleDelete(item.id))}>{item.groceryItem}</div>)
        })
    }

    return(
        <>
            {!isLoading ? (<section id='shoppingList-div' className='--shoppingList-container flex flex-wrap'>
                {data?.length > 0 && ShoppingListEL ? (ShoppingListEL): (<h1>Data not available</h1>)}
            </section>) : (<h1>Shopping List is loading...</h1>)}
            
            
        </>
    )
}

export { ShoppingList }