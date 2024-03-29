import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Collapse } from 'react-collapse'

// Firebase
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc } from 'firebase/firestore'

// Partials
import SignedOut from '../Static/SignedOut'
// import MyItems from './MyItems'
import Spirits from './Menus/Spirits.js.old'
//import Liqueurs from './Menus/Liqueurs'
import Mixers from './Menus/Mixers.js.old'
import Garnish from './Menus/Garnish.js.old'
import Header from '../Static/Headers/Header'
import Footer from '../Static/Footers/Footer'

// SVGs
import { ReactComponent as CheckMark } from '../Static/SVG/CheckMark.svg'
import { ReactComponent as CheckBox } from '../Static/SVG/CheckBox.svg'


export default function Ingredients() {
    const [user] = useAuthState(auth);
    const [userDoc, setUserDoc] = useState(null)
    const [userSpirits, setUserSpirits] = useState(null)
    const [userLiqueurs, setUserLiqueurs] = useState(null)
    const [userMixers, setUserMixers] = useState(null)
    const [userGarnish, setUserGarnish] = useState(null)

    const Spirits = null
    const Liqueurs = null
    const Mixers = null
    const Garnish = null

    useEffect(() => {
        const getUserDoc = async () => {
            if (user && user.uid) {
                const docRef = doc(db, "users", user.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setUserDoc(docSnap.data().Garnish)
                    setUserSpirits(docSnap.data().Spirits)
                    setUserLiqueurs(docSnap.data().Liqueurs)
                    setUserMixers(docSnap.data().Mixers)
                    setUserGarnish(docSnap.data().Garnish)
                } // else no such document
            }
        }
        getUserDoc()
    }, [user])


    if (!user) {
        return (
            <>
                <div className="mx-auto bg-main_bg_color text-text_white min-h-[100vh] flex flex-col">
                    <Header />
                    <div className="w-full basis-auto grow">
                        <div className='mx-auto w-fit'>
                            <SignedOut />
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Helmet>
                    <title>My Ingredients</title>
                </Helmet>
                <div className="bg-main_bg_color text-text_white min-h-[100vh] flex flex-col">
                    <Header />
                    <div className="w-full basis-auto grow">
                        <div className='m-auto bg-black rounded-[10px] h-auto w-[90%] '>
                            <div className='w-[90%] m-auto py-[2rem]'>
                                <h1 className='text-[3.25rem] font-semibold pb-[1rem] m-auto'>My Ingredients</h1>
                                <div className='on_desktop:grid on_desktop:grid-cols-2'>
                                    {(userDoc) ?
                                        <>
                                            <TopItem name={"Spirits"} data={userSpirits} />
                                            <TopItem name={"Liqueurs"} data={userLiqueurs} />
                                            <TopItem name={"Mixers"} data={userMixers} />
                                            <TopItem name={"Garnish"} data={userGarnish} />
                                        </>
                                        :
                                        <h2>Loading...</h2>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}

function TopItem(props) {
    const [isOpen, setIsOpen] = useState(true)

    if ((props.data) && (props.name)) {
        const children = Object.keys(props.data)
        // return map of children over BottomItem
        return (
            <>
                <div className='rounded-[4px]'>
                    <button
                        className='text-[2.5rem] font-semibold pb-[.25rem]'
                        onClick={() => setIsOpen(!isOpen)}>
                        {props.name}
                    </button>
                    <Collapse isOpened={isOpen} className="">
                        <div className=''>
                            {children.map((child, index) => {
                                return (
                                    <BottomItem name={child} key={index} data={props.data[child]} />
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
            </>
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

function BottomItem(props) {
    const [isOpen, setIsOpen] = useState(false);

    if (props.name) {
        const children = Object.keys(props.data.items)
        return (
            <>
                <div className='cursor-pointer rounded-[4px]'>
                    <button
                        className='text-[2rem] font-ssemibold'
                        onClick={() => setIsOpen(!isOpen)}>
                        {props.name}
                    </button>
                    <Collapse isOpened={isOpen} className="">
                        <div className='grid grid-cols-2 pl-3'>
                            {children.map((child, index) => {
                                return (
                                    <Item key={index} data={props.data.items[child]} />
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
            </>
        )
    }
}

function Item(props) {
    const [isChecked, setIsChecked] = useState(props.data.value)

    return (
        <>
            <div className='flex justify-around gap-2'>
                <p className='whitespace-nowrap'>{props.data.name}</p>
                {isChecked ? <CheckMark className='w-5 h-auto' /> : <CheckBox />}
            </div>
        </>
    )
}