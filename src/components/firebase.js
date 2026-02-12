// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs6cvHLWQpCYMw4hnZgJj5LPLQxlCqOTM",
  authDomain: "athar-4f0b0.firebaseapp.com",
  projectId: "athar-4f0b0",
  storageBucket: "athar-4f0b0.firebasestorage.app",
  messagingSenderId: "935873795091",
  appId: "1:935873795091:web:9a9ab5df818e3e204a1be6",
  measurementId: "G-5T89LBJPWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth(app);
export const db = getFirestore(app);
export default app;