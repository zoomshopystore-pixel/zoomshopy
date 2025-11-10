// Import Firebase from the CDN (simple method, recommended for your site)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiidI7VfMw5fN0SfKDeQwrLK4HAFfhg78",
  authDomain: "zoom-shopy.firebaseapp.com",
  projectId: "zoom-shopy",
  storageBucket: "zoom-shopy.firebasestorage.app",
  messagingSenderId: "521524635595",
  appId: "1:521524635595:web:c93b6caf4d77ec8525b84e",
  measurementId: "G-86JY1J7HSV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
