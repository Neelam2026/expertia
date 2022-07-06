
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const app = firebase.initializeApp({
  apiKey: "AIzaSyDJVWbSRk_S-qvxJbAsUJXu80KMdUCQ6Do",
  authDomain: "nice-mix-340903.firebaseapp.com",
  projectId: "nice-mix-340903",
  storageBucket: "nice-mix-340903.appspot.com",
  messagingSenderId: "578262969465",
  appId: "1:578262969465:web:bde269df588aa162ec78a8",
  measurementId: "G-8KQSMPJ2EV"
});

export const db = firebase.firestore();
export const auth = app.auth();
export default app;
