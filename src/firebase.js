// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0v4vv6WxVuo-Ix3tkrmrK-uPFPwJKtKg",
    authDomain: "auth-page-ee6e6.firebaseapp.com",
    projectId: "auth-page-ee6e6",
    storageBucket: "auth-page-ee6e6.appspot.com",
    messagingSenderId: "558402206759",
    appId: "1:558402206759:web:e481c27bffa4225e80e202",
    measurementId: "G-JS00RN6BZV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};
