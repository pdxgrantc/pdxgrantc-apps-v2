import React, { useState, useEffect } from 'react'

// Firebase
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function MyItems(props) {
    const user = props.user;

    const [userDoc, setUserDoc] = useState(null)

    useEffect(() => {
        const getUserDoc = async () => {
            if (user && user.uid) {
                const docRef = doc(db, "users", user.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setUserDoc(docSnap.data())
                } else {
                    console.log("No such document!")
                }
            }
        }
        getUserDoc()
    }, [user])

    return (
        <div>
        </div>
    )
}
