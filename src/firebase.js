import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0KPpsG9orQ2eqMI-3hOdC9d4CNLmkfs4",
  authDomain: "clone-8b9dd.firebaseapp.com",
  projectId: "clone-8b9dd",
  storageBucket: "clone-8b9dd.appspot.com",
  messagingSenderId: "1013851082223",
  appId: "1:1013851082223:web:74e06cb6fe21c7e42cfa1a",
  measurementId: "G-Q6VN4SKLP7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // this initializes firebase with config above
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }; // exports these variables to they can be used in other files
