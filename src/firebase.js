import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// אתחול Firebase
const app = initializeApp(firebaseConfig);

// ייצוא השירותים לשימוש בשאר האפליקציה
export const db = getFirestore(app);
export const auth = getAuth(app);

// פונקציית עזר להתחברות אנונימית מהירה
export const loginAnon = async () => {
  try {
    const res = await signInAnonymously(auth);
    return res.user;
  } catch (error) {
    console.error("Failed to login anonymously:", error);
    throw error;
  }
};