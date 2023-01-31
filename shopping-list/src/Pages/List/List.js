import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

// firebase
import { auth, db } from '../../firebase'
import { doc, setDoc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'

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

    if (listDescription === 'List does not exist') {
        return (
            <>
                <Helmet>
                    <title>List Doesn't Exist</title>
                </Helmet>
                <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                    <Header />
                    <div class="h-[5vh] min-h-[25px]"></div>
                    <div class="w-[88%] m-auto bg-black px-[3%] py-[3vh]">
                        <div>
                            <h1 class="text-[4.5rem] text-center">This list does not exist.</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {
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
                            <div>
                                <div>
                                    <h1 class="text-[3.5rem] font-semibold">{listName}</h1>
                                </div>
                                <div>
                                    <h2 class="text-[2.25rem]">{listDescription}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="h-[2.5vh] min-h-[15px]"></div>
                        <AddList />
                        <div class="h-[2.5vh] min-h-[15px]"></div>
                        <Items />
                        <div></div>
                    </div>
                </div>
            </>
        )
    }
}


function Items() {
    const [items, setItems] = useState([])
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]
    const listName = listWithoutSpaces.replace("_", " ")

    // total cost
    const [total, setTot] = useState(0)

    useEffect(() => {
        const getItems = async () => {
            const q = query(collection(db, "lists", listWithoutSpaces, "items"))
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setItems(items)
        }
        getItems()
    }, [])

    useEffect(() => {
        let total = 0
        items.forEach((item) => {
            total += item.cost
        })
        setTot(total)
    }, [items])


    if (items.length === 0) {
        return (
            <h3 class="text-[2.25rem] whitespace-nowrap leading-10">No items in list</h3>
        )
    }
    else {
        return (
            <div class="flex flex-col gap-[30px]">
                <div class="grid grid-cols-2">
                    <div>
                        <div class="grid grid-cols-2">
                            <div>
                                <h3 class="text-[2.25rem] whitespace-nowrap leading-10">Item Name</h3>
                            </div>
                            <div>
                                <h3 class="text-[2.25rem] whitespace-nowrap leading-10">Item Cost</h3>
                            </div>
                        </div>
                        {items.map((item) => (
                            <div class="grid grid-cols-2">
                                <div>
                                    <h3 class="text-[2.25rem] whitespace-nowrap leading-10">{item.name}</h3>
                                </div>
                                <div>
                                    <h3 class="text-[2.25rem] whitespace-nowrap leading-10">{item.cost}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="grid grid-cols-2">
                        <div>
                            <h3 class="text-[2.25rem] whitespace-nowrap leading-10">Total Cost</h3>
                        </div>
                        <div>
                            <h3 class="text-[2.25rem] whitespace-nowrap leading-10">
                                {total}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function AddList() {
    const [listItemName, setListTitle] = useState('')
    const [listItemCost, setListItemCost] = useState('')
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]
    const listName = listWithoutSpaces.replace("_", " ")

    const addListItem = async () => {
        const docRef = doc(db, "lists", listWithoutSpaces, "items", listItemName)
        // check if input fields are empty
        if (listItemName === '') {
            alert('Please fill in all fields')
            return
        }
        // check if item already exists
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            alert('Item already exists')
            return
        }
        // add item
        await setDoc(docRef, {
            name: listItemName,
            cost: parseInt(listItemCost)
        })
        // add price to list
        const listRef = doc(db, "lists", listWithoutSpaces)
        const listSnap = await getDoc(listRef)
        const listData = listSnap.data()
        const listPrice = listData.price
        const newPrice = listPrice + listItemCost
        await setDoc(listRef, {
            price: newPrice
        })
        // reset input fields
        setListTitle('')
        setListItemCost('')
    }


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
                    type='number'
                    placeholder='Item Cost'
                    value={listItemCost}
                    onChange={(e) => setListItemCost(e.target.value)}
                />
                <button onClick={addListItem} class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Add</button>
            </div>
        </>
    )
}