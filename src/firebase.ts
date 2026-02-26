import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAILsVuSVw6HpjY-Ptf03-DyS4tAvc2orI",
    authDomain: "karmaya-clinic.firebaseapp.com",
    projectId: "karmaya-clinic",
    storageBucket: "karmaya-clinic.firebasestorage.app",
    messagingSenderId: "307987663395",
    appId: "1:307987663395:web:af43fa34e652e09c737f96",
    measurementId: "G-2PEXNDQ56E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
