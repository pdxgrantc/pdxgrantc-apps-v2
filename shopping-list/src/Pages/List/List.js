import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// firebase
import { auth, db } from '../../firebase'
import { collection, query, where, getDoc, getDocs } from 'firebase/firestore'

// component that takes a list name as a parameter
export default function List() {

    // get the list name from the url
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]
    const listName = listWithoutSpaces.replace("_", " ")

    return (
        <div>
            <h1>{listName}</h1>
        </div>
    )
}
