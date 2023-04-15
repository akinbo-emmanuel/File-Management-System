import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
        
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