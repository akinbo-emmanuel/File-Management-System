import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterForm from '../../../components/AuthComponents/RegisterForm'
import { auth } from '../../../config/firebase';

const Register = () => {
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
        <h2 className="display-1 my-5 text-center">Register</h2>
        <div className="row">
            <div className="col-md-5 mx-auto md-5">
                <RegisterForm />
                <p className="text-end my-2">
                    Already a member? <Link to={`/`}> Login</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Register;