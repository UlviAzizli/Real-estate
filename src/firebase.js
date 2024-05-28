// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-144d2.firebaseapp.com",
  projectId: "real-estate-144d2",
  storageBucket: "real-estate-144d2.appspot.com",
  messagingSenderId: "198357884585",
  appId: "1:198357884585:web:0292b85865b86ec3c1d3b8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
