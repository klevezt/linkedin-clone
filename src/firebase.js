import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1nYNEzqRht-3kDh3F81__qfpRps5YXlU",
  authDomain: "kplc-linkedin-clone.firebaseapp.com",
  projectId: "kplc-linkedin-clone",
  storageBucket: "kplc-linkedin-clone.appspot.com",
  messagingSenderId: "682001458179",
  appId: "1:682001458179:web:9bcefaab1db872b03bda36",
  measurementId: "G-8RLY6LF79H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
