import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const gitProvider = new GithubAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return unsubscribe;
    },[])
    const signOutUser = () => {
        return signOut(auth)
    }
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const gitHubSignUp = () =>{
        return signInWithPopup(auth, gitProvider)
    }
    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authValues = {user, createNewUser, gitHubSignUp, googleSignUp, loginUser, signOutUser}
    return (
        <div>
            <AuthContext.Provider value={authValues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;