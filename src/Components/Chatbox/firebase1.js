import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAbn-5hyhT49cmqEBEl_CMZxHr4HYDeAUg",
  authDomain: "firechat-3ab42.firebaseapp.com",
  projectId: "firechat-3ab42",
  storageBucket: "firechat-3ab42.appspot.com",
  messagingSenderId: "296558572125",
  appId: "1:296558572125:web:258ac9f797c07c68a8d3b4",
  measurementId: "G-T39R8K9PCZ",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
