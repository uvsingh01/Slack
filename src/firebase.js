import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/firestorage';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { initializeApp } from 'firebase/app';
// import { Firestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC45YX9NZBTzWlvPMcClgNgQryNzYkGJQU",
    authDomain: "slack-clone-dae79.firebaseapp.com",
    projectId: "slack-clone-dae79",
    storageBucket: "slack-clone-dae79.appspot.com",
    messagingSenderId: "845592899045",
    appId: "1:845592899045:web:c95661627074195183130c",
    measurementId: "G-1RR3LMR330"
  };
// const firbaseApp = firebase.initializeApp(firebaseConfig);
// const db = firbaseApp.firestore()
// const auth= firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider();
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {db,auth, provider};
