import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

// firebase
import { auth, db } from '../../firebase'
import { doc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'

// components
import Header from '../Static/Partials/Header/Header'

// component that takes a list name as a parameter
export default function List() {

    // get the list name from the url
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]
    const listName = listWithoutSpaces.replace("_", " ")

    const [listDescription, setListDescription] = useState('')

    useEffect(() => {
        const getListDescription = async () => {
            const docRef = doc(db, "lists", listWithoutSpaces)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setListDescription(docSnap.data().description)
            }
            else {
                setListDescription('List does not exist')
            }
        }
        getListDescription()
    }, [])


    return (
        <>
            <Helmet>
                <title>{listName}</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
                <div>
                    <h1>{listName}</h1>
                    <h2>{listDescription}</h2>
                </div>
            </div>
        </>
    )
}
