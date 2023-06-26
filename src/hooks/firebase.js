
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from '@firebase/auth'
import {  getFirestore, addDoc, } from '@firebase/firestore'
// import { process } from '../../env';



async function fetchKey(){
    const url = `https://eloquent-profiterole-92be35.netlify.app/.netlify/functions/fetchFirebaseApp`
    const response = await fetch(url, {
        method:'POST',
        headers:{
            'content-type':'text/plain'
        },
        body:{}
    })

    const data = await response.json()
    app = data.reply
}
let app = {}
const database = getFirestore(app)
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()

fetchKey()

const handleGoogleLogin = ()=>{
    signInWithPopup(auth, googleProvider)
    .then((results)=>{
        localStorage.setItem('currentAuth', JSON.stringify(results))
    })
    .catch(error => {
        throw new Error(error)
    })
}

const handleTwitterLogin = ()=>{
    signInWithPopup(auth, twitterProvider)
    .then((results)=>{
        localStorage.setItem('currentAuth', JSON.stringify(results))
    })
    .catch(error => {
        throw new Error(error)
    })
}

const handleGithubLogin = ()=>{
    signInWithPopup(auth, githubProvider)
    .then((results)=>{
        localStorage.setItem('currentAuth', JSON.stringify(results))
    })
    .catch(error => {
        throw new Error(error)
    })
}

const handleFacebookLogin = ()=>{
    signInWithPopup(auth, facebookProvider)
    .then((results)=>{
        localStorage.setItem('currentAuth', JSON.stringify(results))
    })
    .catch(error => {
        throw new Error(error)
    })
}

const handleSignOut = ()=>{
    signOut(auth).then(()=>{
        localStorage.removeItem('currentAuth')
    })
    .catch((error)=>{
        throw new Error(error)
    })
}

const addData = (ref, dataObj)=>{
    addDoc(ref, dataObj)
    .then(()=>{
        return `data added`
    })
    .catch((error)=>{
        throw new Error(error)
    })
}

export { app, database, auth, handleGoogleLogin, handleTwitterLogin, handleGithubLogin, handleFacebookLogin, handleSignOut, addData}