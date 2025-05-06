// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
    collection,
    addDoc,
    serverTimestamp,
    where,
    query,
    getDocs,
    deleteDoc,
    runTransaction,       // ← for atomic reads+writes
    onSnapshot,          // ← to watch last_clockin in real-time
    increment            // ← to increment pushup_count
  } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIWeA-p3ATPicOaPR47vq-oJMxPDpIs0E",
  authDomain: "saitama-daafb.firebaseapp.com",
  projectId: "saitama-daafb",
  storageBucket: "saitama-daafb.firebasestorage.app",
  messagingSenderId: "443480234538",
  appId: "1:443480234538:web:3943767776a852dd8f4153",
  measurementId: "G-77BJY247G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);

// Set persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // console.log("Persistence set successfully");
  })
  .catch((error) => {
    // console.error("Error setting persistence:", error);
  });

const db = getFirestore(app);
const imgDB = getStorage(app);

export {
    auth,
    db,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
    imgDB,
    collection,
    addDoc,
    serverTimestamp,
    where,
    query,
    getDocs,
    deleteDoc,
    runTransaction,
    onSnapshot,
    increment,
  };