import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDiNPx_U_ozMHHwmkVci-0N6QyI04nIetk",
    authDomain: "chatbot-d1910.firebaseapp.com",
    projectId: "chatbot-d1910",
    storageBucket: "chatbot-d1910.appspot.com",
    messagingSenderId: "452385183810",
    appId: "1:452385183810:web:ad6a5dd2d695032826f5db",
    measurementId: "G-FFMLPDJWSW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export  const auth = getAuth(app);