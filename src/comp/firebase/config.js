// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1r8u0MOKrmJpwh28lEabeMrgh7MY2liM",
  authDomain: "rj-coder-sanchezmartin.firebaseapp.com",
  projectId: "rj-coder-sanchezmartin",
  storageBucket: "rj-coder-sanchezmartin.appspot.com",
  messagingSenderId: "1057311872118",
  appId: "1:1057311872118:web:4849cf031f85f89700bb57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
