import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

import swal from 'sweetalert';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
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

  return (
    <form onSubmit={signIn} autoComplete="off">
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
        <button type="submit" className="btn btn-primary my-2 form-control">Login</button>
    </form>
  )
}

export default LoginForm;