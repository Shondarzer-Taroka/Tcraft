// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8oUD-Cb2nwW4LYef_vOYDBEnnnzHIgIY",
  authDomain: "assignment-ten-server-client.firebaseapp.com",
  projectId: "assignment-ten-server-client",
  storageBucket: "assignment-ten-server-client.appspot.com",
  messagingSenderId: "494228845314",
  appId: "1:494228845314:web:d68a29d1e4a71a092b881b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);