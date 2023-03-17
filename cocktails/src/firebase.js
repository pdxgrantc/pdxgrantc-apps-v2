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
        // create users collection in firestore
        const userRef = doc(db, "users", result.user.uid);
        getDoc(userRef).then((docSnap) => {
            if (!docSnap.exists()) {

                setDoc(userRef, {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid,
                    createdAt: new Date(),
                    // include ingredients object
                    ingriedients: {
                        spirits: {
                            whisky: {
                                bourbon: {
                                    value: false,
                                },
                                rye: {
                                    value: false,
                                },
                                scotch: {
                                    value: false,
                                },
                                irish: {
                                    value: false,
                                },
                                corn: {
                                    value: false,
                                },
                            },
                            gin: {
                                london_dry: {
                                    value: false,
                                },
                                old_tom: {
                                    value: false,
                                },
                                plymouth: {
                                    value: false,
                                },
                                reserve: {
                                    value: false,
                                },
                            },
                            tequila: {
                                blanco: {
                                    value: false,
                                },
                                reposado: {
                                    value: false,
                                },
                                anejo: {
                                    value: false,
                                },
                            },
                            rum: {
                                white: {
                                    value: false,
                                },
                                gold: {
                                    value: false,
                                },
                                dark: {
                                    value: false,
                                },
                                spiced: {
                                    value: false,
                                },
                            },
                            vodka: {
                                plain: {
                                    value: false,
                                },
                                rye: {
                                    value: false,
                                },
                                potato: {
                                    value: false,
                                },
                            }
                        },
                        liqueurs: {
                            vermouth: {
                                sweet: {
                                    value: false,
                                },
                                dry: {
                                    value: false,
                                },
                            },
                            other: {
                                amaretto: {
                                    value: false,
                                },
                                irish_cream: {
                                    value: false,
                                },
                                orange_liqueur: {
                                    value: false,
                                },
                                st_germain: {
                                    value: false,
                                },
                                maraschino_liqueur: {
                                    value: false,
                                },
                                galliano: {
                                    value: false,
                                },
                                crème_de_menthe: {
                                    value: false,
                                },
                                crème_de_cacao: {
                                    value: false,
                                },
                                bénédictine: {
                                    value: false,
                                },
                            }
                        },
                        mixers: {
                            bitters: {
                                angostura: {
                                    value: false,
                                },
                                peychauds: {
                                    value: false,
                                },
                                orange: {
                                    value: false,
                                },
                                chocolate: {
                                    value: false,
                                },
                                grapefruit: {
                                    value: false,
                                },
                                peach: {
                                    value: false,
                                },
                                lemon: {
                                    value: false,
                                },
                                cherry: {
                                    value: false,
                                },
                                plum: {
                                    value: false,
                                },
                                mint: {
                                    value: false,
                                },
                            },
                            soda: {
                                club_soda: {
                                    value: false,
                                },
                                tonic: {
                                    value: false,
                                },
                                ginger_ale: {
                                    value: false,
                                },
                                ginger_beer: {
                                    value: false,
                                },
                                lemon_lime: {
                                    value: false,
                                },
                                cola: {
                                    value: false,
                                },
                            },
                            juice: {
                                lemon: {
                                    value: false,
                                },
                                lime: {
                                    value: false,
                                },
                                orange: {
                                    value: false,
                                },
                                cranberry: {
                                    value: false,
                                },
                                grapefruit: {
                                    value: false,
                                },
                                pineapple: {
                                    value: false,
                                },
                                tomato: {
                                    value: false,
                                },
                            },
                            other: {
                                simple_syrup: {
                                    value: false,
                                },
                                agave_syrup: {
                                    value: false,
                                },
                                demerara_syrup: {
                                    value: false,
                                },
                                grenadine: {
                                    value: false,
                                },
                                cream: {
                                    value: false,
                                },
                                coffee: {
                                    value: false,
                                },
                                tea: {
                                    value: false,
                                },
                                tabasco: {
                                    value: false,
                                },
                                worcestershire: {
                                    value: false,
                                },
                            },
                        },
                        garnish: {
                            fruit: {
                                orange: {
                                    value: false,
                                },
                                lemon: {
                                    value: false,
                                },
                                lime: {
                                    value: false,
                                },
                                cherries: {
                                    value: false,
                                },
                            },
                            other: {
                                salt: {
                                    value: false,
                                },
                                olives: {
                                    value: false,
                                },
                                mint: {
                                    value: false,
                                },
                                celery: {
                                    value: false,
                                },
                                pickles: {
                                    value: false,
                                },
                                whipped_cream: {
                                    value: false,
                                },
                            },
                        },
                    }
                });
            }
        });
    }).catch((error) => {
        console.log(error);
    }
    );
}

export const signOutUser = () => {
    signOut(auth);
}
