import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "",//add your firebase apikey
  authDomain: "",
  projectId: "lrdc-boat-app",
  storageBucket: "lrdc-boat-app.appspot.com",
  messagingSenderId: "820531552490",
  appId: "",
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

export { app, auth, db, fdb };
