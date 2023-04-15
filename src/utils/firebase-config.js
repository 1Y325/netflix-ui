import { initializeApp } from "firebase/app";
import {getAuth,} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDw2BE9nBkk5mxX6rOsG1Daz611wOhWwkQ",
  authDomain: "react-netflix-clone-dcb0c.firebaseapp.com",
  projectId: "react-netflix-clone-dcb0c",
  storageBucket: "react-netflix-clone-dcb0c.appspot.com",
  messagingSenderId: "316750191661",
  appId: "1:316750191661:web:8c3467c501c5d871926ca4",
  measurementId: "G-Y61Z9HJDH7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);