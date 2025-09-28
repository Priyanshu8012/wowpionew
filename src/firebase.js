// ✅ firebase.js
import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  connectFirestoreEmulator,
  CACHE_SIZE_UNLIMITED
} from "firebase/firestore";

// 🔹 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7tVw_NPdJmLOT3dtMzFIoAoBg2Wd0zcw",
  authDomain: "wowpio.firebaseapp.com",
  projectId: "wowpio",
  storageBucket: "wowpio.firebasestorage.app",
  messagingSenderId: "483432805983",
  appId: "1:483432805983:web:ba9514b48a02f49f720dea",
  measurementId: "G-TS3YBJWTB6"
};

// 🔹 Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 🔹 Initialize Firestore with settings (persistent cache, unlimited)
export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED, // unlimited cache
  experimentalForceLongPolling: true   // fixes local network issues
});

// 🔹 Connect to Firestore Emulator if running on localhost
if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8080);
  console.log("✅ Connected to Firestore Emulator");
}

// 🔹 Optional: Test Firestore connection
export async function testFirestoreConnection() {
  try {
    const snapshot = await db.collection("testCollection").get();
    console.log(
      "Firestore connection successful",
      snapshot.docs.map(doc => doc.data())
    );
  } catch (error) {
    console.error("Firestore connection failed:", error);
  }
}
