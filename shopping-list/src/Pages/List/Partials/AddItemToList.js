import React, { useState} from "react"
import { useLocation } from 'react-router-dom';

// firebase
import { db, auth } from '../../../firebase'
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'

export default function AddItemToList() {
    const [listItemName, setListTitle] = useState('')
    const [listItemCost, setListItemCost] = useState('')
    const [listItemQuantity, setListItemQuantity] = useState('')
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

        // create user object for users array
        const userInfo = {
            email: auth.currentUser.email,
            name: auth.currentUser.displayName,
            userId: auth.currentUser.uid
        }
        
        // add item to items array
        await updateDoc(listRef, {
            items: arrayUnion({
                name: listItemName,
                cost: listItemCost,
                quantity: listItemQuantity,
                users: [userInfo]
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
        setListItemQuantity('')
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
                <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
                    type='text'
                    placeholder='Quantity'
                    value={listItemQuantity}
                    onChange={(e) => setListItemQuantity(e.target.value)}
                />
                <button onClick={addListItem} class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Add</button>
            </div>
        </>
    )
}