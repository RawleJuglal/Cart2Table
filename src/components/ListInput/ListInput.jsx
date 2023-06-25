import React from 'react'
import './ListInput.css'
import { Form, useSubmit } from 'react-router-dom'
import { database, auth, addData } from '../../hooks/firebase'
import { collection } from '@firebase/firestore'

async function action({request}){
    const formData = await request.formData()
    const item = formData.get('item')
    try{
       const collectionRef = collection(database, `${auth.currentUser.displayName}`)
       addData(collectionRef, {groceryItem: item})
       formData.delete('item')
       return null 
    } catch(err){
        throw new Error(err)
    }
}

const ListInput = ()=>{
    const submit = useSubmit()

    function handleClick(e){
        e.preventDefault()
        submit(e.currentTarget.form)
        e.currentTarget.form.reset()
    }
    
    return(
        <>
            <Form 
                method="post" 
                className='--list-input-form flex flex-column' 
                replace
            >
                <input 
                    type="text"
                    className='--list-input-item' 
                    name="item" 
                    placeholder="Bread" 
                    required
                />
                <button type="submit" onClick={event=>handleClick(event)}>Add</button>
            </Form>
        </>
    )
}

export {ListInput, action}