// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyBmV3IDDe7kin8oDrSJvTfN0q9q9edesTo",
  // authDomain: "trusted-furniture.firebaseapp.com",
  // projectId: "trusted-furniture",
  // storageBucket: "trusted-furniture.appspot.com",
  // messagingSenderId: "540400905251",
  // appId: "1:540400905251:web:23f8cbfc6a2e5888aa9596",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;