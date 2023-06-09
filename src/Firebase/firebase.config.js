// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyBw90Ddjs4VjNpTok7RQvbjaubMeYT_9pI",
    // authDomain: "autixir-aef09.firebaseapp.com",
    // projectId: "autixir-aef09",
    // storageBucket: "autixir-aef09.appspot.com",
    // messagingSenderId: "218534980115",
    // appId: "1:218534980115:web:1de523482201908c4f2de6"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app