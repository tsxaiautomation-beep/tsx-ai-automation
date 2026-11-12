/**
 * TSX AI Automation - Firebase Configuration Template
 * 
 * To connect Firebase Firestore to this application:
 * 1. Create a Firebase project at https://console.firebase.google.com/
 * 2. Add a Web App or generate a Service Account Key
 * 3. Fill in your credentials below or use Environment Variables
 */

export const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "tsxaiautomation.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "tsxaiautomation",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "tsxaiautomation.appspot.com",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_SENDER_ID",
  appId: process.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Instructions:
// If you want full client-side Firebase sync:
// `npm install firebase`
// Then import { initializeApp } from "firebase/app"; and { getFirestore } from "firebase/firestore";

