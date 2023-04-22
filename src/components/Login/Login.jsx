import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import './Login.css'


const Login = () => {

    const [user, setUser] = useState(null);


    const auth = getAuth(app);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
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
                setUser(null)
            })
            .catch(error => {
                console.log("Error", error);
            })
    }


    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
            })
            .catch()
    }




    return (
        <div>
            {/* User ? 'logOut' : 'logIn' */}


            {
                user ? <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGithubSignIn}>Github Login</button>
                    </>

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