import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent';
import Navbar from '../../components/DashboardComponents/NavBar/Navbar';
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';
import { auth } from '../../config/firebase';

function DashboardPage() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
          } else {
            navigate('/');
          }
      })
  }, []);

  return (
    <>
    <Navbar />
    <SubBar />
    <HomeComponent />
    </>
  )
}

export default DashboardPage;