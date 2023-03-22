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

    if (!userDoc) {
        return (
            <div className='text-[2rem] font-semibold'>
                Loading...
            </div>
        )
    }
    else {
        return (
            <div className='on_desktop:grid on_desktop:grid-cols-2'>
                <Garnish garnish={userDoc.garnish} />
            </div>
        )
    }
}


function Garnish(props) {
    const [isOpen, setIsOpen] = useState(true);
    const garnish = props.garnish

    if (props.garnish) {
        return (
            <div className="">
                <button
                    className='text-[2.5rem] font-semibold pb-[.25rem]'
                    onClick={() => setIsOpen(!isOpen)}>
                    Garnish
                </button>
                <Collapse isOpened={isOpen} className="">
                    <div className='pl-5'>
                        <Fruit fruit={garnish.fruit} />
                        <Other />
                    </div>
                </Collapse>
            </div>
        );
    }
}


function Fruit(props) {
    const [isOpen, setIsOpen] = useState(false);

        
    if (props.fruit) {
        console.log(props.fruit)
        return (
            <div className='cursor-pointer rounded-[4px]'>
                <button
                    className='text-[2rem] font-ssemibold'
                    onClick={() => setIsOpen(!isOpen)}>
                    Fruit
                </button>
                <Collapse isOpened={isOpen} className="">
                    <div className='grid grid-cols-2 pl-3'>
                        <p>Oranges</p>
                        <p>Lemons</p>
                        <p>Limes</p>
                        <p>Cherries</p>
                    </div>
                </Collapse>
            </div>
        )
    }
}

function Other() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Other
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='grid grid-cols-2 pl-3'>
                    <p>Salt</p>
                    <p>Olives</p>
                    <p>Mint</p>
                    <p>Celery</p>
                    <p>Pickles</p>
                    <p>Whipped Cream</p>
                </div>
            </Collapse>
        </div>
    )
}
