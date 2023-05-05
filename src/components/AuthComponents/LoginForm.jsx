import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInEmail = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            swal("SUCCESS!", "Succesfully Logged In!", "success");
            navigate('/dashboard');
        }) 
        .catch((error) => {
            const errorMessage = error.message;
        
            if (error.code && error.code.indexOf("auth/") === 0) {
                const errorCode = error.code.split("auth/")[1];
                swal("ERROR!", `${errorCode}`, "error");
            } else {
                swal("ERROR!", `${errorMessage}`, "error");
            }
        });
    }

    const signInGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          await signInWithRedirect(auth, provider);
          navigate("/dashboard"); // Redirect to dashboard after successful login
        } catch (error) {
            if (error.code && error.code.indexOf("auth/") === 0) {
                const errorCode = error.code.split("auth/")[1];
                swal("ERROR!", `${errorCode}`, "error");
            } else {
                swal("ERROR!", `${errorMessage}`, "error");
            }
        };
    }


  return (
    <>
        <form onSubmit={signInEmail} autoComplete="off">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder='xxxxxxxx@xxxx.com' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-describedby="emailHelp" 
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary my-2 form-control">Sign In</button>
        </form>
        <button type="submit" className="btn btn-danger my-2 form-control" onClick={signInGoogle}>
            <FontAwesomeIcon icon={faGoogle} /> &nbsp;
            Sign in with Google
        </button>
    </>
  )
}

export default LoginForm;
