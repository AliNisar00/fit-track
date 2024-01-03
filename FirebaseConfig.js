// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVYIn7KptRRYXQb0wXvZyHGlFc6xPKFqA",
  authDomain: "fit-track-421c5.firebaseapp.com",
  projectId: "fit-track-421c5",
  storageBucket: "fit-track-421c5.appspot.com",
  messagingSenderId: "233212493086",
  appId: "1:233212493086:web:ff414ed236c4cc0d945d0f",
  measurementId: "G-9RCF8Q618M"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);