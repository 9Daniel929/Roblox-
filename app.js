// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNIGa8rJQCLZp0AyosayFL-l4jWklyagU",
  authDomain: "polyblox2.firebaseapp.com",
  projectId: "polyblox2",
  storageBucket: "polyblox2.firebasestorage.app",
  messagingSenderId: "844864509875",
  appId: "1:844864509875:web:786ed59b0b6340a5995dc6",
  measurementId: "G-0W9QRGNHKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
