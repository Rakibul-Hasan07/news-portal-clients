import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //Google Login
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    //set state to user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // logout
    const logOut = () => {
        return signOut(auth)
    }
    // register users
    const createUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // set display name
    const setDisplayName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    // login user
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, googleLogin, logOut, createUsers, logInUser,setDisplayName }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;