import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

import './Login.css';

function Login() {
  return (
    <MDBContainer className='my-5 contain'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4 field' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4 field' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100 button">Sign in</MDBBtn>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <Link to={`signup`} class="link-info">
                  <MDBBtn outline className='mx-2' color='danger'>
                    CREATE NEW
                  </MDBBtn>
                </Link>
              </div>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Login;