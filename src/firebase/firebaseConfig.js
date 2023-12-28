// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQYHdJriyWbtK8OL0I8mC_MfqteFda4V0",
  authDomain: "chat-room-e531e.firebaseapp.com",
  projectId: "chat-room-e531e",
  storageBucket: "chat-room-e531e.appspot.com",
  messagingSenderId: "1073727926002",
  appId: "1:1073727926002:web:6ba6a5001ae5f71a1d6a6b",
  measurementId: "G-JQVRS151FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
