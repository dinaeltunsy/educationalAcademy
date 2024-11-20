// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // For Realtime Database

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjvW0369im6fsA_TPRKc1-gPCflXLry-M",
  authDomain: "jupitermcq-5bc7c.firebaseapp.com",
  databaseURL: "https://jupitermcq-5bc7c-default-rtdb.firebaseio.com",
  projectId: "jupitermcq-5bc7c",
  storageBucket: "jupitermcq-5bc7c.firebasestorage.app",
  messagingSenderId: "785430069234",
  appId: "1:785430069234:web:157497191cda0edf63756b"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// For Realtime Database
export const database = getDatabase(app);
