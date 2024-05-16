// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Required for side-effects

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVTj1CQPIUZYOnQYwy1kA1tqQsBSk-MwI",
  authDomain: "chat-b0b09.firebaseapp.com",
  projectId: "chat-b0b09",
  storageBucket: "chat-b0b09.appspot.com",
  messagingSenderId: "301238481679",
  appId: "1:301238481679:web:428c7b741c563e29d4447a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export {
  app, 
  db,
  storage
}