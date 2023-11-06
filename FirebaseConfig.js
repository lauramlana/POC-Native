import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ3UbY8ifvxHP2blNB6xpMx2lmZPU0ZnE",
  authDomain: "poc-react-native-802e0.firebaseapp.com",
  projectId: "poc-react-native-802e0",
  storageBucket: "poc-react-native-802e0.appspot.com",
  messagingSenderId: "93265877309",
  appId: "1:93265877309:web:6c8b6f859ce914b8eb8d54"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);