import React, { usec } from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

// firebase
import { auth, db } from '../../firebase'
import { doc, setDoc, collection, query, where, getDoc, getDocs, arrayUnion, updateDoc } from 'firebase/firestore'

// components
import Header from '../Static/Partials/Header/Header'
import { ReactComponent as Pencil } from '../Static/Images/Pencil.svg'
import { ReactComponent as Trash } from '../Static/Images/Trash.svg'

// component that takes a list name as a parameter
export default function List() {

    // get the list name from the url
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]
    const listName = listWithoutSpaces.replace("_", " ")

    const [listDescription, setListDescription] = useState('')

    // grabs the list description from the database and sets state
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

    // TODO delete list function make worky
    const confirmDelete = async () => {
        const response = window.confirm("Are you sure you want to delete this list?");

        if (response) {
            // delete items in list
            const itemsRef = collection(db, "lists", listWithoutSpaces, "items")
            const q = query(itemsRef, where("list", "==", listWithoutSpaces))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                doc.ref.delete()
            })
            // delete list
            const listRef = doc(db, "lists", listWithoutSpaces)
            listRef.delete()
        }
    }

    // when url is not a list in the database
    if (listDescription === 'List does not exist') {
        return (
            <>
                <Helmet>
                    <title>List Doesn't Exist</title>
                </Helmet>
                <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                    <Header />
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
                    <div class="w-[88%] m-auto bg-black px-[3%] py-[3vh]">
                        <div>
                            <div>
                                <div className='flex justify-between'>
                                    <h1 class="text-[3.5rem] font-semibold">{listName}</h1>
                                    <div className='flex gap-[1rem]'>
                                        <div className='flex justify-end gap-[.3rem] text-[1.5rem] my-auto align-middle'>
                                            <h3 className="align-middle h-fit my-auto">Edit</h3>
                                            <Pencil className="w-[3rem] h-[3rem] brightness-75 my-auto p-[0.1rem] hover:brightness-200 hover:cursor-pointer" />
                                        </div>
                                        <div className='flex justify-end gap-[.3rem] text-[1.5rem] my-auto align-middle'>
                                            <h3 className="align-middle h-fit my-auto">Delete</h3>
                                            <Trash onClick={confirmDelete} className="w-[2.75rem] h-[2.75rem] brightness-75 my-auto p-[0.1rem] hover:brightness-200 hover:cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="text-[1.75rem] opacity-[.9]">{listDescription}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="h-[2.5vh] min-h-[15px]"></div>
                        <AddItemToList />
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
    // reference to the list name
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]
    const listName = listWithoutSpaces.replace("_", " ")

    // pull list from database
    const [list , setList] = useState([])
    useEffect(() => {
        const getList = async () => {
            const docRef = doc(db, "lists", "Test")
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setList(docSnap.data())
            }
            else {
                setList('List does not exist')
            }
        }
        getList()
    }, [])

    // print list to console
    console.log(list)

    // TODO make this work
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const itemsRef = collection(db, "lists", listWithoutSpaces, "items")
            const q = query(itemsRef, where("list", "==", listWithoutSpaces))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                setItems(doc.data())
            })
        }
        getItems()
    }, [])
    

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
                    <div class="pt-2">
                        {items.map((item) => (
                            <div class="grid grid-cols-2">
                                <div>
                                    <h4 class="text-[1.75rem] whitespace-nowrap leading-10">{}</h4>
                                </div>
                                <div>
                                    <h4 class="text-[1.75rem] whitespace-nowrap leading-10">{}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 class="text-[2.25rem] whitespace-nowrap leading-10">Users</h3>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="grid grid-cols-2">
                    <div>
                        <h3 class="text-[2.25rem] whitespace-nowrap leading-10">Total Cost</h3>
                    </div>
                    <div>
                        <h3 class="text-[2.25rem] whitespace-nowrap leading-10">
                            {}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )

}

// create list item
function AddItemToList() {
    const [listItemName, setListTitle] = useState('')
    const [listItemCost, setListItemCost] = useState('')
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]

    const addListItem = async () => {
        // check if input fields are empty
        if (listItemName === '') {
            alert('Please fill in the name field')
            return
        }

        // get list object
        const listRef = doc(db, "lists", listWithoutSpaces)
        const listDoc = await getDoc(listRef)
        // check if item name already exists in items array
        for (let i = 0; i < listDoc.data().items.length; i++) {
            if (listDoc.data().items[i].name === listItemName) {
                alert('Item name already exists')
                return
            }
        }

        // add item to items array
        await updateDoc(listRef, {
            items: arrayUnion({
                name: listItemName,
                cost: listItemCost
            })
        })

        // add cost to total cost
        await updateDoc(listRef, {
            cost: listDoc.data().cost + parseFloat(listItemCost)
        })

       // update number of items
        await updateDoc(listRef, {
            numItems: listDoc.data().numItems + 1
        })

        // reset input fields
        setListTitle('')
        setListItemCost('')
    }


    return (
        <>
            <div class="flex justify-between gap-[30px]">
                <h3 class="text-[2.25rem] whitespace-nowrap leading-10">Add an Item:</h3>
                <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                    type='text'
                    placeholder='Item Name'
                    value={listItemName}
                    onChange={(e) => setListTitle(e.target.value)}
                />
                <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                    type='number'
                    step="0.01"
                    placeholder='Item Cost'
                    value={listItemCost}
                    onChange={(e) => setListItemCost(e.target.value)}
                />
                <button onClick={addListItem} class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Add</button>
            </div>
        </>
    )
}