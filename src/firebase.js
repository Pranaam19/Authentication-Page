// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMZZHn_x9vO2gyNbo59YE-vojQBJyWL84",
    authDomain: "auth-ffc24.firebaseapp.com",
    projectId: "auth-ffc24",
    storageBucket: "auth-ffc24.appspot.com",
    messagingSenderId: "698738830040",
    appId: "1:698738830040:web:3693f98a34de618d1d85ad",
    measurementId: "G-DB3KJ9J88J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};
