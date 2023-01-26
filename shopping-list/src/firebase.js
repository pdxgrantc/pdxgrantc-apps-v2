import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCD_-9ryz2E4RRouaxeE1bKOl6xoPZVIwY",
    authDomain: "shopping-list-f4612.firebaseapp.com",
    projectId: "shopping-list-f4612",
    storageBucket: "shopping-list-f4612.appspot.com",
    messagingSenderId: "492725925529",
    appId: "1:492725925529:web:c0865252c5de8645572a08"
};

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
                    user_since: new Date()
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
