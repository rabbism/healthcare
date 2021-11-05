import initializeAuthrntication from './../../Firebase/firebase.initialize';
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

initializeAuthrntication()

const useFirebase = () =>{
    const [user,setUser] =useState({});
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleInUsingSignIn =() =>{
        
        signInWithPopup(auth, provider)
            .then(result=> {
            const user = result.user;
            console.log(user);
            setUser(user)

             })
  return{
    user,
    googleInUsingSignIn
  }


           

};
export default useFirebase;