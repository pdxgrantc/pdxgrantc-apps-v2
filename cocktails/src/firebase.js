// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLTy_kRlmiqmKW40ou6CJfEXLZ5RayBcg",
    authDomain: "cocktails-f4d1a.firebaseapp.com",
    projectId: "cocktails-f4d1a",
    storageBucket: "cocktails-f4d1a.appspot.com",
    messagingSenderId: "269267686622",
    appId: "1:269267686622:web:ef7cd41e81d042891c9e4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        const path = "users/" + user.uid;
        const docRef = doc(db, path);
        getDoc(docRef).then((docSnap) => {
            if (!docSnap.exists()) {
                setDoc(doc(db, path), {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL,
                    user_since: new Date(),
                    friends: [],
                });
            }
        });
    }).catch((error) => {
        console.log(error);
    });
};

export const signOutUser = () => {
    signOut(auth);
}