import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtHgnVsamgf76y3cE-1OBFNmGECbcbhsE",
  authDomain: "lrdc-boat-app.firebaseapp.com",
  projectId: "lrdc-boat-app",
  storageBucket: "lrdc-boat-app.appspot.com",
  messagingSenderId: "820531552490",
  appId: "1:820531552490:web:a144a3e7e3ccac6cbab793",
  measurementId: "G-7KGWS52JJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);

export { app, authentication, db };
