// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARhUVrkd6DYTvHwyN8Cd1Mc6WRyn9BSlM",
  authDomain: "tugerente-challenge-3fab8.firebaseapp.com",
  projectId: "tugerente-challenge-3fab8",
  storageBucket: "tugerente-challenge-3fab8.appspot.com",
  messagingSenderId: "1096717192832",
  appId: "1:1096717192832:web:dd801834d3030316b12065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);