import { initializeApp } from '@firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { process } from '../../env';

const firebaseConfig = {
  apiKey: process.env.C2T_API_KEY,
  authDomain: "cart2table-1dd25.firebaseapp.com",
  projectId: "cart2table-1dd25",
  storageBucket: "cart2table-1dd25.appspot.com",
  messagingSenderId: "257185387712",
  appId: "1:257185387712:web:1fae6a58c6caf3d5a74925"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()


const handleGoogleLogin = ()=>{
    signInWithPopup(auth, googleProvider)
    .then((results)=>{
        console.log(results)
    })
    .catch(error => {
        throw new Error(error)
    })
}

export { app, auth, handleGoogleLogin}