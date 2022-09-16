// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1mIUOLCDrAz-xpMeHw-n_enoV_G_7doQ",
    authDomain: "music-3caac.firebaseapp.com",
    databaseURL: "https://music-3caac-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "music-3caac",
    storageBucket: "music-3caac.appspot.com",
    messagingSenderId: "15528602335",
    appId: "1:15528602335:web:03ec69c72a9a6f1c51d76a",
    measurementId: "G-G148H33RXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export {
    db,
    app,
    auth,
}
