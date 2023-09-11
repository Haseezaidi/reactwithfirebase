// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUGruGMrZ3UUfohJsDD5IhQvqfHkNbuiA",
  authDomain: "vite-contact-42045.firebaseapp.com",
  projectId: "vite-contact-42045",
  storageBucket: "vite-contact-42045.appspot.com",
  messagingSenderId: "1029009024360",
  appId: "1:1029009024360:web:4020c9ffd3fc39adc8a2dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
