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
                    Spirits: [
                        {
                            Whisky: {
                                name: "Whisky",
                                items: [
                                    {
                                        Bourbon: {
                                            name: "Bourbon",
                                            db_name: "Bourbon",
                                            value: false,
                                        },
                                    },
                                    {
                                        Rye: {
                                            name: "Rye",
                                            db_name: "Rye",
                                            value: false,
                                        },
                                    },
                                    {
                                        Scotch: {
                                            name: "Scotch",
                                            db_name: "Scotch",
                                            value: false,
                                        },
                                    },
                                    {
                                        Irish: {
                                            name: "Irish",
                                            db_name: "Irish",
                                            value: false,
                                        },
                                    },
                                    {
                                        Corn: {
                                            name: "Corn",
                                            db_name: "Corn",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Gin: {
                                name: "Gin",
                                items: [
                                    {
                                        London_Dry: {
                                            name: "London Dry",
                                            db_name: "London_Dry",
                                            value: false,
                                        },
                                    },
                                    {
                                        Old_Tom: {
                                            name: "Old Tom",
                                            db_name: "Old_Tom",
                                            value: false,
                                        },
                                    },
                                    {
                                        Plymouth: {
                                            name: "Plymouth",
                                            db_name: "Plymouth",
                                            value: false,
                                        },
                                    },
                                    {
                                        Reserve: {
                                            name: "Reserve",
                                            db_name: "Reserve",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Tequila: {
                                name: "Tequila",
                                items: [
                                    {
                                        Blanco: {
                                            name: "Blanco",
                                            db_name: "Blanco",
                                            value: false,
                                        },
                                    },
                                    {
                                        Reposado: {
                                            name: "Reposado",
                                            db_name: "Reposado",
                                            value: false,
                                        },
                                    },
                                    {
                                        Anejo: {
                                            name: "Anejo",
                                            db_name: "Anejo",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Rum: {
                                name: "Rum",
                                items: [
                                    {
                                        White: {
                                            name: "White",
                                            db_name: "White",
                                            value: false,
                                        },
                                    },
                                    {
                                        Gold: {
                                            name: "Gold",
                                            db_name: "Gold",
                                            value: false,
                                        },
                                    },
                                    {
                                        Dark: {
                                            name: "Dark",
                                            db_name: "Dark",
                                            value: false,
                                        },
                                    },
                                    {
                                        Spiced: {
                                            name: "Spiced",
                                            db_name: "Spiced",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Vodka: {
                                name: "Vodka",
                                items: [
                                    {
                                        Grain: {
                                            name: "Grain",
                                            db_name: "Grain",
                                            value: false,
                                        },
                                    },
                                    {
                                        Rye: {
                                            name: "Rye",
                                            db_name: "Rye",
                                            value: false,
                                        },
                                    },
                                    {
                                        Potato: {
                                            name: "Potato",
                                            db_name: "Potato",
                                            value: false,
                                        },
                                    }
                                ],
                            },
                        }

                    ],
                    Liqueurs: [
                        {
                            Vermouth: {
                                name: "Vermouth",
                                items: [
                                    {
                                        Sweet: {
                                            name: "Sweet",
                                            db_name: "Sweet",
                                            value: false,
                                        }
                                    },
                                    {
                                        Dry: {
                                            name: "Dry",
                                            db_name: "Dry",
                                            value: false,
                                        }
                                    }
                                ],
                            },
                        },
                        {
                            Other: {
                                name: "Other",
                                items: [
                                    {
                                        Amaretto: {
                                            name: "Amaretto",
                                            db_name: "Amaretto",
                                            value: false,
                                        },
                                    },
                                    {
                                        Irish_Cream: {
                                            name: "Irish Cream",
                                            db_name: "Irish_Cream",
                                            value: false,
                                        },
                                    },
                                    {
                                        Orange_Liqueur: {
                                            name: "Orange Liqueur",
                                            db_name: "Orange_Liqueur",
                                            value: false,
                                        },
                                    },
                                    {
                                        St_Germain: {
                                            name: "St. Germain",
                                            db_name: "St_Germain",
                                            value: false,
                                        },
                                    },
                                    {
                                        Maraschino_Liqueur: {
                                            name: "Maraschino Liqueur",
                                            db_name: "Maraschino_Liqueur",
                                            value: false,
                                        },
                                    },
                                    {
                                        Galliano: {
                                            name: "Galliano",
                                            db_name: "Galliano",
                                            value: false,
                                        },
                                    },
                                    {
                                        Creme_de_Menthe: {
                                            name: "Crème de Menthe",
                                            db_name: "Creme_de_Menthe",
                                            value: false,
                                        },
                                    },
                                    {
                                        Crème_de_Cacao: {
                                            name: "Crème de Cacao",
                                            db_name: "Crème_de_Cacao",
                                            value: false,
                                        },
                                    },
                                    {
                                        Bénédictine: {
                                            name: "Bénédictine",
                                            db_name: "Bénédictine",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                    Mixers: [
                        {
                            Bitters: {
                                name: "Bitters",
                                items: [
                                    {
                                        Angostura: {
                                            name: "Angostura",
                                            db_name: "Angostura",
                                            value: false,
                                        },
                                    },
                                    {
                                        Peychauds: {
                                            name: "Peychaud's",
                                            db_name: "Peychauds",
                                            value: false,
                                        },
                                    },
                                    {
                                        Orange: {
                                            name: "Orange",
                                            db_name: "Orange",
                                            value: false,
                                        },
                                    },
                                    {
                                        Chocolate: {
                                            name: "Chocolate",
                                            db_name: "Chocolate",
                                            value: false,
                                        },
                                    },
                                    {
                                        Grapefruit: {
                                            name: "Grapefruit",
                                            db_name: "Grapefruit",
                                            value: false,
                                        },
                                    },
                                    {
                                        Peach: {
                                            name: "Peach",
                                            db_name: "Peach",
                                            value: false,
                                        },
                                    },
                                    {
                                        Lemon: {
                                            name: "Lemon",
                                            db_name: "Lemon",
                                            value: false,
                                        },
                                    },
                                    {
                                        Cherry: {
                                            name: "Cherry",
                                            db_name: "Cherry",
                                            value: false,
                                        },
                                    },
                                    {
                                        Plum: {
                                            name: "Plum",
                                            db_name: "Plum",
                                            value: false,
                                        },
                                    },
                                    {
                                        Mint: {
                                            name: "Mint",
                                            db_name: "Mint",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Soda: {
                                name: "Soda",
                                items: [
                                    {
                                        Club_Soda: {
                                            name: "Club Soda",
                                            db_name: "Club_Soda",
                                            value: false,
                                        },
                                    },
                                    {
                                        Tonic: {
                                            name: "Tonic",
                                            db_name: "Tonic",
                                            value: false,
                                        },
                                    },
                                    {
                                        Ginger_Ale: {
                                            name: "Ginger Ale",
                                            db_name: "Ginger_Ale",
                                            value: false,
                                        },
                                    },
                                    {
                                        Ginger_Beer: {
                                            name: "Ginger Beer",
                                            db_name: "Ginger_Beer",
                                            value: false,
                                        },
                                    },
                                    {
                                        Lemon_Lime: {
                                            name: "Lemon Lime",
                                            db_name: "Lemon_Lime",
                                            value: false,
                                        },
                                    },
                                    {
                                        Cola: {
                                            name: "Coca-Cola",
                                            db_name: "Cola",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Juice: {
                                name: "Juice",
                                items: [
                                    {
                                        Lemon: {
                                            name: "Lemon",
                                            db_name: "Lemon",
                                            value: false,
                                        },
                                    },
                                    {
                                        Lime: {
                                            name: "Lime",
                                            db_name: "Lime",
                                            value: false,
                                        },
                                    },
                                    {
                                        Orange: {
                                            name: "Orange",
                                            db_name: "Orange",
                                            value: false,
                                        },
                                    },
                                    {
                                        Cranberry: {
                                            name: "Cranberry",
                                            db_name: "Cranberry",
                                            value: false,
                                        },
                                    },
                                    {
                                        Grapefruit: {
                                            name: "Grapefruit",
                                            db_name: "Grapefruit",
                                            value: false,
                                        },
                                    },
                                    {
                                        Pineapple: {
                                            name: "Pineapple",
                                            db_name: "Pineapple",
                                            value: false,
                                        },
                                    },
                                    {
                                        Tomato: {
                                            name: "Tomato",
                                            db_name: "Tomato",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Other: {
                                name: "Other",
                                items: [
                                    {
                                        Simple_Syrup: {
                                            name: "Simple Syrup",
                                            db_name: "Simple_Syrup",
                                            value: false,
                                        },
                                    },
                                    {
                                        Agave_Syrup: {
                                            name: "Agave Syrup",
                                            db_name: "Agave_Syrup",
                                            value: false,
                                        },
                                    },
                                    {
                                        Demerara_Syrup: {
                                            name: "Demerara Syrup",
                                            db_name: "Demerara_Syrup",
                                            value: false,
                                        },
                                    },
                                    {
                                        Grenadine: {
                                            name: "Grenadine",
                                            db_name: "Grenadine",
                                            value: false,
                                        },
                                    },
                                    {
                                        Cream: {
                                            name: "Cream",
                                            db_name: "Cream",
                                            value: false,
                                        },
                                    },
                                    {
                                        Coffee: {
                                            name: "Coffee",
                                            db_name: "Coffee",
                                            value: false,
                                        },
                                    },
                                    {
                                        Tea: {
                                            name: "Tea",
                                            db_name: "Tea",
                                            value: false,
                                        },
                                    },
                                    {
                                        Tabasco: {
                                            name: "Tabasco",
                                            db_name: "Tabasco",
                                            value: false,
                                        },
                                    },
                                    {
                                        Worcestershire: {
                                            name: "Worcestershire",
                                            db_name: "Worcestershire",
                                            value: false,
                                        },
                                    },
                                    {
                                        Water: {
                                            name: "Water",
                                            db_name: "Water",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                    Garnish: [
                        {
                            name: "Garnish",
                            Fruit: {
                                items: [
                                    {
                                        Orange: {
                                            name: "Orange",
                                            db_name: "Orange",
                                            value: false,
                                        },
                                    },
                                    {
                                        Lemon: {
                                            name: "Lemon",
                                            db_name: "Lemon",
                                            value: false,
                                        },
                                    },
                                    {
                                        Lime: {
                                            name: "Lime",
                                            db_name: "Lime",
                                            value: false,
                                        },
                                    },
                                    {
                                        Cherries: {
                                            name: "Cherries",
                                            db_name: "Cherries",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            Other: {
                                name: "Other",
                                items: [
                                    {
                                        Salt: {
                                            name: "Salt",
                                            db_name: "Salt",
                                            value: false,
                                        },
                                    },
                                    {
                                        Olives: {
                                            name: "Olives",
                                            db_name: "Olives",
                                            value: false,
                                        },
                                    },
                                    {
                                        Mint: {
                                            name: "Mint",
                                            db_name: "Mint",
                                            value: false,
                                        },
                                    },
                                    {
                                        Celery: {
                                            name: "Celery",
                                            db_name: "Celery",
                                            value: false,
                                        },
                                    },
                                    {
                                        Pickles: {
                                            name: "Pickles",
                                            db_name: "Pickles",
                                            value: false,
                                        },
                                    },
                                    {
                                        Whipped_Cream: {
                                            name: "Whipped Cream",
                                            db_name: "Whipped_Cream",
                                            value: false,
                                        },
                                    },
                                ],
                            },
                        },
                    ],
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
