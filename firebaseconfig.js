import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

//  Firebase configuration
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
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth(); //for a authentication
const db = getDatabase();
const fdb = getFirestore(app);

export { app, auth, db };
