import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCM3eWQwdBBSkJ1qhyxJz2crvizAkq3G-k",
    authDomain: "fir-auth-73442.firebaseapp.com",
    databaseURL: "https://fir-auth-73442.firebaseio.com",
    projectId: "fir-auth-73442",
    storageBucket: "fir-auth-73442.appspot.com",
    messagingSenderId: "403209005817",
    appId: "1:403209005817:web:adb711c19f02b796a75028",
    measurementId: "G-QR3PY61G85"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;