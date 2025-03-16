// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Anm0VIAdW1T21BFuwO4zmERiHGpKJKQ",
  authDomain: "aatralregistration.firebaseapp.com",
  projectId: "aatralregistration",
  storageBucket: "aatralregistration.firebasestorage.app",
  messagingSenderId: "747309277340",
  appId: "1:747309277340:web:7e17d1b99df8c252480d59",
  measurementId: "G-DB505504HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
