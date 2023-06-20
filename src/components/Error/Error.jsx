import React from 'react'
import { useRouteError } from 'react-router-dom'
import './Error.css'

const Error = ()=>{
    const error = useRouteError()
    return(
        <>
            <h1>Error:{error.status} - {error.message}</h1>
        </>
    )
}

export { Error }