import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Anm0VIAdW1T21BFuwO4zmERiHGpKJKQ",
  authDomain: "aatralregistration.firebaseapp.com",
  projectId: "aatralregistration",
  storageBucket: "aatralregistration.firebasestorage.app",
  messagingSenderId: "747309277340",
  appId: "1:747309277340:web:7e17d1b99df8c252480d59",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
