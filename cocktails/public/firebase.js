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
                    Spirits: {
                        Whisky: {
                            name: "Whisky",
                            items: {
                                bourbon: {
                                    name: "Bourbon",
                                    value: false,
                                },
                                rye: {
                                    name: "Rye",
                                    value: false,
                                },
                                scotch: {
                                    name: "Scotch",
                                    value: false,
                                },
                                irish: {
                                    name: "Irish",
                                    value: false,
                                },
                                corn: {
                                    name: "Corn",
                                    value: false,
                                },
                            },

                        },
                        Gin: {
                            name: "Gin",
                            items: {
                                London_Dry: {
                                    name: "London Dry",
                                    value: false,
                                },
                                old_tom: {
                                    name: "Old Tom",
                                    value: false,
                                },
                                Plymouth: {
                                    name: "Plymouth",
                                    value: false,
                                },
                                Reserve: {
                                    name: "Reserve",
                                    value: false,
                                },
                            },
                        },
                        Tequila: {
                            name: "Tequila",
                            items: {
                                Blanco: {
                                    name: "Blanco",
                                    value: false,
                                },
                                Reposado: {
                                    name: "Reposado",
                                    value: false,
                                },
                                Anejo: {
                                    name: "Anejo",
                                    value: false,
                                },
                            },
                        },
                        Rum: {
                            name: "Rum",
                            items: {
                                White: {
                                    name: "White",
                                    value: false,
                                },
                                Gold: {
                                    name: "Gold",
                                    value: false,
                                },
                                Dark: {
                                    name: "Dark",
                                    value: false,
                                },
                                Spiced: {
                                    name: "Spiced",
                                    value: false,
                                },
                            },
                        },
                        Vodka: {
                            name: "Vodka",
                            items: {
                                Plain: {
                                    name: "Plain",
                                    value: false,
                                },
                                Rye: {
                                    name: "Rye",
                                    value: false,
                                },
                                Potato: {
                                    name: "Potato",
                                    value: false,
                                },
                            },
                        }
                    },
                    Liqueurs: {
                        Vermouth: {
                            name: "Vermouth",
                            items: {
                                Sweet: {
                                    name: "Sweet",
                                    value: false,
                                },
                                Dry: {
                                    name: "Dry",
                                    value: false,
                                },
                            },
                        },
                        Other: {
                            name: "Other",
                            items: {
                                Amaretto: {
                                    name: "Amaretto",
                                    value: false,
                                },
                                Irish_Cream: {
                                    name: "Irish Cream",
                                    value: false,
                                },
                                Orange_Liqueur: {
                                    name: "Orange Liqueur",
                                    value: false,
                                },
                                St_Germain: {
                                    name: "St. Germain",
                                    value: false,
                                },
                                Maraschino_Liqueur: {
                                    name: "Maraschino Liqueur",
                                    value: false,
                                },
                                Galliano: {
                                    name: "Galliano",
                                    value: false,
                                },
                                Crème_de_Menthe: {
                                    name: "Crème de Menthe",
                                    value: false,
                                },
                                Crème_de_Cacao: {
                                    name: "Crème de Cacao",
                                    value: false,
                                },
                                Bénédictine: {
                                    name: "Bénédictine",
                                    value: false,
                                },
                            },
                        }
                    },
                    Mixers: {
                        Biters: {
                            name: "Biters",
                            items: {
                                angostura: {
                                    name: "Angostura",
                                    value: false,
                                },
                                Peychauds: {
                                    name: "Peychaud's",
                                    value: false,
                                },
                                orange: {
                                    name: "Orange",
                                    value: false,
                                },
                                chocolate: {
                                    name: "Chocolate",
                                    value: false,
                                },
                                grapefruit: {
                                    name: "Grapefruit",
                                    value: false,
                                },
                                peach: {
                                    name: "Peach",
                                    value: false,
                                },
                                lemon: {
                                    name: "Lemon",
                                    value: false,
                                },
                                cherry: {
                                    name: "Cherry",
                                    value: false,
                                },
                                plum: {
                                    name: "Plum",
                                    value: false,
                                },
                                mint: {
                                    name: "Mint",
                                    value: false,
                                },
                            },
                        },
                        Soda: {
                            name: "Soda",
                            items: {
                                Club_Soda: {
                                    name: "Club Soda",
                                    value: false,
                                },
                                Tonic: {
                                    name: "Tonic",
                                    value: false,
                                },
                                Ginger_Ale: {
                                    name: "Ginger Ale",
                                    value: false,
                                },
                                Ginger_Beer: {
                                    name: "Ginger Beer",
                                    value: false,
                                },
                                Lemon_Lime: {
                                    name: "Lemon Lime",
                                    value: false,
                                },
                                Cola: {
                                    name: "Cola",
                                    value: false,
                                },
                            },
                        },
                        Juice: {
                            name: "Juice",
                            items: {
                                Lemon: {
                                    name: "Lemon",
                                    value: false,
                                },
                                Lime: {
                                    name: "Lime",
                                    value: false,
                                },
                                Orange: {
                                    name: "Orange",
                                    value: false,
                                },
                                Cranberry: {
                                    name: "Cranberry",
                                    value: false,
                                },
                                Grapefruit: {
                                    name: "Grapefruit",
                                    value: false,
                                },
                                Pineapple: {
                                    name: "Pineapple",
                                    value: false,
                                },
                                Tomato: {
                                    name: "Tomato",
                                    value: false,
                                },
                            },
                        },
                        Other: {
                            name: "Other",
                            items: {
                                Simple_Syrup: {
                                    name: "Simple Syrup",
                                    value: false,
                                },
                                Agave_Syrup: {
                                    name: "Agave Syrup",
                                    value: false,
                                },
                                Demerara_Syrup: {
                                    name: "Demerara Syrup",
                                    value: false,
                                },
                                Grenadine: {
                                    name: "Grenadine",
                                    value: false,
                                },
                                Cream: {
                                    name: "Cream",
                                    value: false,
                                },
                                Coffee: {
                                    name: "Coffee",
                                    value: false,
                                },
                                Tea: {
                                    name: "Tea",
                                    value: false,
                                },
                                Tabasco: {
                                    name: "Tabasco",
                                    value: false,
                                },
                                Worcestershire: {
                                    name: "Worcestershire",
                                    value: false,
                                },
                            },
                        },
                    },
                    Garnish: {
                        Fruit: {
                            items: {
                                Orange: {
                                    name: "Orange",
                                    value: false,
                                },
                                Lemon: {
                                    name: "Lemon",
                                    value: false,
                                },
                                Lime: {
                                    name: "Lime",
                                    value: false,
                                },
                                Cherries: {
                                    name: "Cherries",
                                    value: false,
                                },
                            },
                        },
                        Other: {
                            items: {
                                Salt: {
                                    name: "Salt",
                                    value: false,
                                },
                                Olives: {
                                    name: "Olives",
                                    value: false,
                                },
                                Mint: {
                                    name: "Mint",
                                    value: false,
                                },
                                Celery: {
                                    name: "Celery",
                                    value: false,
                                },
                                Pickles: {
                                    name: "Pickles",
                                    value: false,
                                },
                                Whipped_Cream: {
                                    name: "Whipped Cream",
                                    value: false,
                                },
                            },
                        },
                    },
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
