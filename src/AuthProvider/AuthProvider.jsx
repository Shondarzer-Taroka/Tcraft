import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
export const AuthContext=createContext(null)
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const AuthProvider = ({children}) => {
       let [user,setUser]=useState('')
      //  let [loading,setLoading]=useState(false)
       let [spinner,setSpinner]=useState(true)

     function createUser(email,password) {
        setSpinner(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     function signInUser(email,password) {
      setSpinner(true)
        return signInWithEmailAndPassword(auth,email,password)
     }


     function signInbyGoogle() {
      setSpinner(true)
       return signInWithPopup(auth,googleProvider)
     }

     function signInbyTwitter() {
      setSpinner(true)
        return signInWithPopup(auth,twitterProvider)
     }

     function updateUser(name,photo) {
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
     }



     function logout() {
      setSpinner(true)
        return signOut(auth)
     }
     useEffect(()=>{
        let unsubscribe= onAuthStateChanged(auth,(user)=>{
           setUser(user)
           setSpinner(false)
        })

        return ()=>{
            unsubscribe()
        }
     },[])
        // console.log(children);
    let info={createUser,updateUser,logout,signInUser,signInbyGoogle,signInbyTwitter,user,setSpinner,spinner}
    return (
        <div>
            <AuthContext.Provider value={info}> {children} </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;