import firebase from "firebase/app";
import "firebase/firestore";

// ref: https://firebase.google.com/docs/web/setup
const firebaseConfig = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

export { firebaseConfig as firebase };
