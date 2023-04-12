import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
// import { Link } from "react-router-dom";

import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // // Signed in 
      // const user = userCredential.user;
      // // ...
      console.log(userCredential);
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);
  });
  }

  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'black'}}>
            The best File Manager <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{color: '#e6e6e6'}}>
            Organize your files like never before with our intuitive file manager. <br />
            Say goodbye to cluttered folders and hello to effortless file management. <br />
            Streamline your workflow and boost productivity with just a few clicks.
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
              <form onSubmit={signUp}>

                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                  </MDBCol>
                </MDBRow>

                <MDBInput 
                wrapperClass='mb-4' 
                label='Email' 
                id='form1' 
                type='email'
                value={ email } 
                onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput 
                wrapperClass='mb-4' 
                label='Password' 
                id='form1' 
                type='password'
                value={ password }
                onChange={(e) => setPassword(e.target.value)}
                />

                <MDBBtn className='w-100 mb-4 button' size='md'>sign up</MDBBtn>
              </form>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;