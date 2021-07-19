import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDv5b6_G2-8YXc-GjQ3NpORD4ALpR4b7pE",
    authDomain: "rav1-f8593.firebaseapp.com",
    projectId: "rav1-f8593",
    storageBucket: "rav1-f8593.appspot.com",
    messagingSenderId: "210478390634",
    appId: "1:210478390634:web:7b565da29cd771d9e45913"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db=firebase.firestore()

export { auth, provider ,db};
