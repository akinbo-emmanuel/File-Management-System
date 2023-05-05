import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../config/firebase';
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
          } else {
              setAuthUser(null);
          }
      })
    
      return () => {
        listen();
      }
  }, []);

  const userSignOut = () => {
    signOut(auth)
        .then(() => {
            swal("SUCCESS!", "Succesfully Logged Out!", "success");
            navigate('/');
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
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm'>
      <Link to={`/`} className="navbar-brand ms-5">File Manager</Link>

      {authUser ?  
        <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item mx-2">
                <button type="button" class="btn btn-danger btn-sm" onClick={userSignOut}>Log Out</button>
            </li>
        </ul> 
        : 
        <ul className="navbar-nav ms-auto me-5">
          {/* <li className="nav-item mx-2">
              <Link to={`login`} className="btn btn-primary btn-sm">Log In</Link>
          </li>
          <li className="nav-item">
              <Link to={`register`} className="btn btn-success btn-sm">Register</Link>
          </li> */}
        </ul> 
      }
    </nav>
  )
}

export default Navbar;