// services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
//// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDExZiymFQyxUIinwA3D2wvPMRcf8XnnkQ",
  authDomain: "athlink-c8eef.firebaseapp.com",
  projectId: "athlink-c8eef",
  storageBucket: "athlink-c8eef.firebasestorage.app",
  messagingSenderId: "341132946400",
  appId: "1:341132946400:web:d4a9fd90cb47dc942d9985",
  measurementId: "G-CSSTCH0ZYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);