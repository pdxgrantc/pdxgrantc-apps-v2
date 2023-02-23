import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

// firebase
import { db } from '../../firebase'
import { doc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'

// components
import Header from '../Static/Partials/Header/Header'
import { ReactComponent as Pencil } from '../Static/Images/Pencil.svg'
import { ReactComponent as Trash } from '../Static/Images/Trash.svg'
import AddItemToList from './Partials/AddItemToList'

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
    }, [listWithoutSpaces])

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
                <div className="m-auto bg-main_bg_color text-text_white min-h-screen">
                    <Header />
                    <div className="w-[88%] m-auto bg-black px-[3%] py-[3vh]">
                        <div>
                            <h1 className="text-[4.5rem] text-center">This list does not exist.</h1>
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
                                    <h1 className="text-[3.5rem] font-semibold">{listName}</h1>
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
                                    <h2 className="text-[1.75rem] opacity-[.9]">{listDescription}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="h-[2.5vh] min-h-[15px]"></div>
                        <AddItemToList />
                        <div className="h-[2.5vh] min-h-[15px]"></div>
                        <Items />
                        <div></div>
                    </div>
                </div>
            </>
        )
    }
}

function Items() {
    const location = useLocation()
    const listWithoutSpaces = location.pathname.split('/')[2]

    const [list, setList] = useState([])

    useEffect(() => {
        const getList = async () => {
            const docRef = doc(db, "lists", listWithoutSpaces)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setList(docSnap.data())
            }
            else {
                setList([])
            }
        }
        getList(list)
    }, [list, listWithoutSpaces])

    const items = list.items

    console.log(items)


    return (
        <div className="flex flex-col gap-[30px]">
            <div className="grid grid-cols-2">
                <div>
                    <div className="grid grid-cols-2">
                        <div>
                            <h3 className="text-[2.25rem] whitespace-nowrap leading-10">Item Name</h3>
                        </div>
                        <div>
                            <h3 className="text-[2.25rem] whitespace-nowrap leading-10">Item Cost</h3>
                        </div>
                    </div>
                    <div className="pt-2">
                        {items.map((item) => {
                            return (
                                <div className="grid grid-cols-2">
                                    <div>
                                        <h3 className="text-[2.25rem] whitespace-nowrap leading-10">{item.name}</h3>
                                    </div>
                                    <div>
                                        <h3 className="text-[2.25rem] whitespace-nowrap leading-10">{item.cost}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3 className="text-[2.25rem] whitespace-nowrap leading-10">Users</h3>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-2">
                    <div>
                        <h3 className="text-[2.25rem] whitespace-nowrap leading-10">Total Cost</h3>
                    </div>
                    <div>
                        <h3 className="text-[2.25rem] whitespace-nowrap leading-10">
                            { }
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )

}