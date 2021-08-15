import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4uyBL68T7v2GMwmftdjrpZ5pSZp3WOss",
    authDomain: "insta-reels-clone123.firebaseapp.com",
    projectId: "insta-reels-clone123",
    storageBucket: "insta-reels-clone123.appspot.com",
    messagingSenderId: "610466267465",
    appId: "1:610466267465:web:8ad55ab6b2c57c9e161a98",
    measurementId: "G-DL23V35F0V"
})
const db = firebaseApp.firestore();
 
export default db;