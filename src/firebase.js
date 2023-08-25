// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


require('dotenv').KEY();
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "clone-9842a.firebaseapp.com",
  projectId: "clone-9842a",
  storageBucket: "clone-9842a.appspot.com",
  messagingSenderId: "801045550673",
  appId: "1:801045550673:web:7aaedbeed6595f81438a70",
  measurementId: "G-B63T2CD5XR",
};  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
