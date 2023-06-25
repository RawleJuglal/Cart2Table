import React from 'react'
import { handleGoogleLogin, handleTwitterLogin, handleGithubLogin, handleSignOut, handleGithubLogin } from '../../hooks/firebase';
import { Google, Twitter, Github, Facebook, CaretDownFill } from 'react-bootstrap-icons';
import './C2TNavbar.css'

const C2TNavbar = (props)=>{
    const user = props.user
    return(
        <>
            <header className='--header flex'>
                {user ? (<nav className='navbar'>
                    <button className='--c2tnavbar-auth-button --c2tnavbar-sign-out' onClick={handleSignOut}>Sign Out</button>
                </nav>) :
                (<nav className='navbar'>
                    <div className="dropdown">
                        <span className='flex --c2tnavbar-auth-button'>Sign In <CaretDownFill className='navbar-caret-down' /></span>
                        <div className="dropdown-content">
                            <div>
                                <ul>
                                    <li onClick={handleGoogleLogin}><Google /> Google</li>
                                    <li onClick={handleTwitterLogin}><Twitter /> Twitter</li>
                                    <li onClick={handleGithubLogin}><Github /> Github</li>
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