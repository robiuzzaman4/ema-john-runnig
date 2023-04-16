// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8AEQzBEY2O9ZiVRfXvXlImtzsG62IF_M",
  authDomain: "ema-john-78b74.firebaseapp.com",
  projectId: "ema-john-78b74",
  storageBucket: "ema-john-78b74.appspot.com",
  messagingSenderId: "774620592100",
  appId: "1:774620592100:web:d378701e4312922822f9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;