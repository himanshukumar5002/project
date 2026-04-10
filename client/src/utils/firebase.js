
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "hppay-ddccb.firebaseapp.com",
  projectId: "hppay-ddccb",
  storageBucket: "hppay-ddccb.firebasestorage.app",
  messagingSenderId: "526779459565",
  appId: "1:526779459565:web:daaff8d33ba5409a6ca9e4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}