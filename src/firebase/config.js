// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2gwysLZsNoei5RknLwjxFn925zaIBfGc",
    authDomain: "react-native-7ab94.firebaseapp.com",
    projectId: "react-native-7ab94",
    storageBucket: "react-native-7ab94.appspot.com",
    messagingSenderId: "834033188937",
    appId: "1:834033188937:web:08d367979f16cc9e5c7f98"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
