import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


function RegisterForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                swal("SUCCESS!", "Account successfully created!", "success");
                navigate('/dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });
    }
    return (
        <form onSubmit={signIn} autoComplete="off">
            <div className="mb-3">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder='Name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-describedby="emailHelp" 
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
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
            {/* <div className="mb-3">
                <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    placeholder='Re-type password' 
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />
            </div> */}
            <button type="submit" className="btn btn-primary my-2 form-control">Register</button>
        </form>
    )
}

export default RegisterForm;