// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDunSIOABM8fcJoPKaAj7zXabeijyIvH7g",
  authDomain: "netflixgpt-abhishek01.firebaseapp.com",
  projectId: "netflixgpt-abhishek01",
  storageBucket: "netflixgpt-abhishek01.appspot.com",
  messagingSenderId: "790034164633",
  appId: "1:790034164633:web:a6b11c5f8f762bd91e4108",
  measurementId: "G-J8CV29Z9SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();