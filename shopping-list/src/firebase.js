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
const user = auth.currentUser;
export const db = getFirestore(app);

export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);

    const docRef = doc(db, "users", user.email);
    getDoc(docRef).then((docSnap) => {
        if (!(docSnap.exists())) {
            setDoc(doc(db, "users", user.email), {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
                user_since: new Date(),
                lists: []
            });
        }
    }
    )
};

export const signOutUser = () => {
    signOut(auth);
}
