import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlpN-bUW4S43Ac1ax1cy37pXAEUEF7EiQ",
  authDomain: "course-request-webpage.firebaseapp.com",
  projectId: "course-request-webpage",
  storageBucket: "course-request-webpage.appspot.com",
  messagingSenderId: "640023494327",
  appId: "1:640023494327:web:eb654a25c8c9dfdc231732",
  measurementId: "G-9NBL1K4WZE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)