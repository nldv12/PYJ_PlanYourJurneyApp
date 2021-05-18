import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUNdsTGKId58nGRVZqvd0NkYuyw08tLR8",
    authDomain: "plan-your-journey-142c8.firebaseapp.com",
    projectId: "plan-your-journey-142c8",
    storageBucket: "plan-your-journey-142c8.appspot.com",
    messagingSenderId: "492469753237",
    appId: "1:492469753237:web:b9f34cccdece3c1c59d29c",
    measurementId: "G-45EZQD2GC9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();