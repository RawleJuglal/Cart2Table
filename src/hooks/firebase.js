import { initializeApp } from '@firebase/app'
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from '@firebase/auth'
import {  getFirestore, addDoc, } from '@firebase/firestore'
// import { process } from '../../env';

const firebaseConfig = {
  apiKey: 'AIzaSyBqdW_Jd3BZseIsE2vz5VnRuW-ajaaAPSE',
  authDomain: "cart2table-1dd25.firebaseapp.com",
  projectId: "cart2table-1dd25",
  storageBucket: "cart2table-1dd25.appspot.com",
  messagingSenderId: "257185387712",
  appId: "1:257185387712:web:1fae6a58c6caf3d5a74925"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()


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