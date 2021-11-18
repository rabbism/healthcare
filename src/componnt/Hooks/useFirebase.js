import initializeAuthrntication from './../../Firebase/firebase.initialize';
import {getAuth,signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthrntication()

const useFirebase = () =>{
    const [user,setUser] =useState({});
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleInUsingSignIn =() =>{ 
       return signInWithPopup(auth, provider)
       .finally(() => { setLoading(false) })
            }
  
useEffect( () => {
  const auth = getAuth();
  const unsubscribe =  onAuthStateChanged(auth, user => {
    if (user) {
      setUser(user)
     }
     else {
      setUser({});
  }
  setLoading(false);
});
return () => unsubscribe;
},[]);
  const logOut =() =>{
    const auth = getAuth();
    setLoading(true);
      signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setLoading(false))
  }


  return {
    user,
    loading,
    googleInUsingSignIn,
    logOut
  }


}
export default useFirebase;