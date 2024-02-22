// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASJWZpduI487FozHkQUM0aOCSGCuNW2CI",
  authDomain: "quickbitepro.firebaseapp.com",
  projectId: "quickbitepro",
  storageBucket: "quickbitepro.appspot.com",
  messagingSenderId: "262280603021",
  appId: "1:262280603021:web:a9147279b2d163446509c4",
  measurementId: "G-9CVBN34J49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);