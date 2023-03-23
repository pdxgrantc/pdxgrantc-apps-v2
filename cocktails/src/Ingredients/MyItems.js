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
                } // else no such document
            }
        }
        getUserDoc()
    }, [user])

    if (userDoc) {
        return (
            <div className='on_desktop:grid on_desktop:grid-cols-2'>
                <Spirits Spirits={userDoc.Spirits} />
                <Liqueurs Liqueurs={userDoc.Liqueurs} />
                <Mixers Mixers={userDoc.Mixers} />
                <Garnish Garnish={userDoc.Garnish} />
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

function Spirits(props) {
    const [spiritsOpen, setSpiritsOpen] = useState(false)
    const [whiskeyOpen, setWhiskeyOpen] = useState(false)
    const [ginOpen, setGinOpen] = useState(false)
    const [tequilaOpen, setTequilaOpen] = useState(false)
    const [rumOpen, setRumOpen] = useState(false)
    const [vodkaOpen, setVodkaOpen] = useState(false)

    if (props.Spirits) {
        return (
            <div className="">
                <button
                    className='text-[2.5rem] font-semibold pb-[.25rem]'
                    onClick={() => setIsOpen(!isOpen)}>
                    Base Spirits
                </button>
                <Collapse isOpened={isOpen} className="">
                    <div className='pl-5'>
                        <div className="">
                            <button
                                className='text-[2.5rem] font-semibold pb-[.25rem]'
                                onClick={() => setIsOpen(!isOpen)}>
                                Base Spirits
                            </button>
                            <Collapse isOpened={isOpen} className="">
                                <div className='pl-5'>
                                    <Whisky />
                                    <Gin />
                                    <Tequila />
                                    <Rum />
                                    <Vodka />
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </Collapse>
            </div>
        )
    }
}

function Liqueurs(props) {
    const [liqueursOpen, setLiqueursOpen] = useState(false)
    const [vermouthOpen, setVermouthOpen] = useState(false)
    const [otherOpen, setOtherOpen] = useState(false)

    if (props.Liqueurs) {
        return (
            <></>
        )
    }
}

function Mixers(props) {
    const [mixersOpen, setMixersOpen] = useState(false)
    const [bittersOpen, setBittersOpen] = useState(false)
    const [sodasOpen, setSodasOpen] = useState(false)
    const [juicesOpen, setJuicesOpen] = useState(false)
    const [otherOpen, setOtherOpen] = useState(false)

    if (props.Mixers) {
        return (
            <></>
        )
    }
}

function Garnish(props) {
    const [garnishOpen, setGarnishOpen] = useState(false)
    const [fruitsOpen, setFruitsOpen] = useState(false)
    const [otherOpen, setOtherOpen] = useState(false)

    if (props.Garnish) {
        return (
            <></>
        )
    }
}
