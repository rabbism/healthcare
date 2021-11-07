import initializeAuthrntication from './../../Firebase/firebase.initialize';
import {getAuth,signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthrntication()

const useFirebase = () =>{
    const [user,setUser] =useState({});
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleInUsingSignIn =() =>{ 
       return signInWithPopup(auth, provider)
          
            }
  
useEffect( () => {
  const auth = getAuth();
    onAuthStateChanged(auth, user => {
    if (user) {
      setUser(user)
     }
    })
  },[]);
  const logOut =() =>{
    const auth = getAuth();
      signOut(auth)
      .then(() => {
        setUser({})
      })
  }


  return {
    user,
    googleInUsingSignIn,
    logOut
  }


}
export default useFirebase;