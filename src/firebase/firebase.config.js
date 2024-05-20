// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnfRBSbpmWhUu3cZShFvxJ6vuc3ePWfY0",
  authDomain: "myapplication10-251101.firebaseapp.com",
  projectId: "myapplication10-251101",
  storageBucket: "myapplication10-251101.appspot.com",
  messagingSenderId: "783053746451",
  appId: "1:783053746451:web:c935957f6296e687852ae6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
