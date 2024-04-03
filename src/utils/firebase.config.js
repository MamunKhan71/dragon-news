// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhTDyLCjCntjrBVgeo9fLYeiH375KxalM",
  authDomain: "dragon-news-dc232.firebaseapp.com",
  projectId: "dragon-news-dc232",
  storageBucket: "dragon-news-dc232.appspot.com",
  messagingSenderId: "328024001622",
  appId: "1:328024001622:web:411b37ec6090ed1973bff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;