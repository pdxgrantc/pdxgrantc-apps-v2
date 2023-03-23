import React, { useState, useEffect } from 'react'
import Collapse from "react-collapse";

// Firebase
import { db, auth } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function MyItems() {
    const [user] = useAuthState(auth)

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

    if (userDoc) {
        return (
            <div className='on_desktop:grid on_desktop:grid-cols-2'>

            </div>
        )
    }
    else {
        return (
            <div className='text-[2rem] font-semibold'>
                Loading...
            </div>
        )
    }
}
