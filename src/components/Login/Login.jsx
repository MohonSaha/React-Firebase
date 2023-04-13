import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import './Login.css'


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    console.log(app);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loogedInUser = result.user;
                console.log(loogedInUser);
                setUser(loogedInUser);
            })
            .catch(error => {
                console.log("error", error.message);
            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log("Error", error);
            })
    }




    return (
        <div>
            {/* User ? 'logOut' : 'logIn' */}


        {
            user ? <button onClick={handleSignOut}>Sign Out</button> :  <button onClick={handleGoogleSignIn}>Google Login</button> 
            
        }



           
            {
                user && <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;