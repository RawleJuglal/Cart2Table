import React from 'react'
import { handleGoogleLogin, handleSignOut } from '../../hooks/firebase';
import { Google, Twitter, Github, Facebook, CaretDownFill } from 'react-bootstrap-icons';
import './C2TNavbar.css'

const C2TNavbar = (props)=>{
    const user = props.user
    return(
        <>
            <header className='flex'>
                {user ? (<nav className='navbar'>
                    <button onClick={handleSignOut}>Sign Out</button>
                </nav>) :
                (<nav className='navbar'>
                    <div className="dropdown">
                        <span className='flex'>Sign In <CaretDownFill className='navbar-caret-down' /></span>
                        <div className="dropdown-content">
                            <div>
                                <ul>
                                    <li onClick={handleGoogleLogin}><Google /> Google</li>
                                    <li><Twitter /> Twitter</li>
                                    <li><Github /> Github</li>
                                    <li><Facebook /> Facebook</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>)}                
            </header>
        </>
    )
}


export { C2TNavbar }