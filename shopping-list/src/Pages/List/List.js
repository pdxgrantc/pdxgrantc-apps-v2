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
                <div class="h-[5vh] min-h-[25px]"></div>
                <div class="w-[88%] m-auto bg-black px-[3%] py-[3vh]">
                    <div>
                        <h1 class="text-[3.5rem] font-semibold">{listName}</h1>
                        <h2 class="text-[2.25rem]">{listDescription}</h2>
                    </div>
                    <div class="h-[2.5vh] min-h-[15px]"></div>
                    <Items />
                    <div class="h-[2.5vh] min-h-[15px]"></div>
                    <AddList />
                    <div></div>
                </div>
            </div>
        </>
    )
}


function Items() {
    return (
        <></>
    )
}

function AddList() {
    const [listItemName, setListTitle] = useState('')
    const [listItemCost, setListItemCost] = useState('')
    return (
        <>
            <div class="flex justify-between gap-[30px]">
                <h3 class="text-[2.25rem] whitespace-nowrap leading-10">New Item</h3>
                <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                    type='text'
                    placeholder='Item Name'
                    value={listItemName}
                    onChange={(e) => setListTitle(e.target.value)}
                />
                <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                    type='text'
                    placeholder='Item Cost'
                    value={listItemCost}
                    onChange={(e) => setListItemCost(e.target.value)}
                />
                <button class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Add</button>
            </div>
        </>
    )
}