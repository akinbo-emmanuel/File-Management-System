import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../../components/AuthComponents/LoginForm'

const Login = () => {
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