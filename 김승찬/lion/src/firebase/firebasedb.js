// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxYIX-odFO7Lgva-ORr-QLTYXVw7W4uNw",
  authDomain: "solver-feb56.firebaseapp.com",
  projectId: "solver-feb56",
  storageBucket: "solver-feb56.appspot.com",
  messagingSenderId: "484334744672",
  appId: "1:484334744672:web:4e569f04c128822083ff05",
  measurementId: "G-T123Q2LC8D",
};

const firebasedb = initializeApp(firebaseConfig);

export default firebasedb;
