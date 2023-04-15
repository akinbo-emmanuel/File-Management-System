import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../../../components/AuthComponents/RegisterForm'

const Register = () => {
  return (
    <div className="container-fluid">
        <h2 className="display-1 my-5 text-center">Register</h2>
        <div className="row">
            <div className="col-md-5 mx-auto md-5">
                <RegisterForm />
                <p className="text-end my-2">
                    Already a member? <Link to={`/login`}> Login</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Register;