import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Authentication/LoginPage/Login';
import Signup from './pages/Authentication/SignupPage/Signup';
import Profile from './pages/ProfilePage/Profile';
import Dashboard from './pages/DashboardPage/Dashboard';
// import ErrorPage from "./error-page";

import App from './App';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <Signup />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    // errorElement: <ErrorPage />,
  }
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
