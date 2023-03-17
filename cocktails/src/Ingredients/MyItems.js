import React, {  } from 'react'

// Firebase
import { db } from '../firebase'

export default function MyItems(props) {
    const user = props.user

    // get user document from firestore 9
    const docRef = doc(db, "users", user.uid)


    return (
        <div>MyItems</div>
    )
}
