import firebase from "firebase/app";
// import storage and firestore
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrR7wD-4KzkCHRnbNkfbcBW5mTsIXGHsc",
  authDomain: "kollinarts-bde61.firebaseapp.com",
  projectId: "kollinarts-bde61",
  storageBucket: "kollinarts-bde61.appspot.com",
  messagingSenderId: "260400562060",
  appId: "1:260400562060:web:3135ea05cabe3937a560a9",
  measurementId: "G-NKMD8K8J4V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// create a firebase timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
