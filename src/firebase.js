// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_fgH-gqRagjhIRoY6SUaKoxlgyzjPrIk",
  authDomain: "file-manager-1169c.firebaseapp.com",
  projectId: "file-manager-1169c",
  storageBucket: "file-manager-1169c.appspot.com",
  messagingSenderId: "627965509307",
  appId: "1:627965509307:web:0e4d1eee0cdb5fce1cf39e",
  measurementId: "G-50PEMH6L40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);