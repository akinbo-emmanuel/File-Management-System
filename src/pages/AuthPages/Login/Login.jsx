import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../../../components/AuthComponents/LoginForm'
import { auth } from '../../../config/firebase';

const Login = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
              navigate('/dashboard');
          } else {
              setAuthUser(null);
          }
      })
  }, []);
  
  return (
    <div className="container-fluid">
        <h2 className="display-1 my-5 text-center">Login</h2>
        <div className="row">
            <div className="col-md-5 mx-auto md-5">
                <LoginForm />
                <p className="text-end my-2">
                    Not a member? <Link to={`/register`}> Register</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login;