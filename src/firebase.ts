// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1IAlbArw7pc_iz_dMMu6TxMMzSEeCpqI",
  authDomain: "socialpulse-8b0cf.firebaseapp.com",
  projectId: "socialpulse-8b0cf",
  storageBucket: "socialpulse-8b0cf.firebasestorage.app",
  messagingSenderId: "871981742806",
  appId: "1:871981742806:web:cadc584caad595400ce777",
  measurementId: "G-M8DB5P356V"
};

const app = initializeApp(firebaseConfig);

// 2. Initialize and EXPORT services so they are accessible in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;



