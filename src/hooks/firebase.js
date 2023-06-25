import { initializeApp } from '@firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth'
import { collection, getFirestore, getDocs, addDoc, doc, updateDoc, deleteDoc } from '@firebase/firestore'
import { process } from '../../env';

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


const handleGoogleLogin = ()=>{
    signInWithPopup(auth, googleProvider)
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

export { app, database, auth, handleGoogleLogin, handleSignOut, addData}