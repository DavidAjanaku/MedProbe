// THIS IS THE APPS PRIVATE INFORMATION !!!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsifsu5jEepc17Ak5uSbmg5OHBMiLxHw",
  authDomain: "medprobe-auth.firebaseapp.com",
  projectId: "medprobe-auth",
  storageBucket: "medprobe-auth.appspot.com",
  messagingSenderId: "338602095735",
  appId: "1:338602095735:web:d724cfde0da5b592d5c272",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
