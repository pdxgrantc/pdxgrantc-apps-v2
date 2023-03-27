import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Collapse } from 'react-collapse'

// Firebase
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc } from 'firebase/firestore'

// Partials
import SignedOut from '../Static/SignedOut'
import Header from '../Static/Headers/Header'
import Footer from '../Static/Footers/Footer'


export default function Ingredients() {
    const [user] = useAuthState(auth);
    const [userDoc, setUserDoc] = useState(null)
    const [userSpirits, setUserSpirits] = useState(null)
    const [userLiqueurs, setUserLiqueurs] = useState(null)
    const [userMixers, setUserMixers] = useState(null)
    const [userGarnish, setUserGarnish] = useState(null)

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
                                            <TopItem name={"Mixers"} data={userMixers} />
                                            <TopItem name={"Liqueurs"} data={userLiqueurs} />
                                            <TopItem name={"Garnish"} data={userGarnish} />
                                        </>
                                        :
                                        <h2 className='text-[2.5rem]'>Loading...</h2>
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
                <div className='rounded-[4px] w-[100%] h-[100%]'>
                    <button
                        className='text-[2.5rem] pb-[.25rem] font-semibold hover:bg-text_grey/60 px-5 py-[.1rem] rounded-[4px]'
                        onClick={() => setIsOpen(!isOpen)}>
                        {props.name}
                    </button>
                    <Collapse isOpened={isOpen} className="">
                        <div className=''>
                            {children.map((child, index) => {
                                return (
                                    <BottomItem top={props.name} name={child} key={index} data={props.data[child]} />
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
                <div className=' rounded-[4px]'>
                    <button
                        className='ml-5 cursor-pointer text-[2rem] font-semibold hover:bg-text_grey/60 px-5 py-[.1rem] rounded-[4px]'
                        onClick={() => setIsOpen(!isOpen)}>
                        {props.name}
                    </button>
                    <Collapse isOpened={isOpen} class="">
                        <div className=''>
                            {children.map((child, index) => {
                                return (
                                    <Item top={props.top} bottom={props.name} key={index} data={props.data.items[child]} />
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

    /*
    const updateItem = async (item) => {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            docRef.update({
    */

    console.log(props.top + " " + props.bottom + " " + props.data.name)

    return (
        <>
            <button className='ml-10 flex gap-2 cursor-pointer hover:bg-text_grey/60 px-5 py-[.1rem] rounded-[4px]' onClick={() => setIsChecked(!isChecked)}>
                {isChecked ?
                    <img className='h-[1.3rem] py-[0.15rem] w-auto my-auto pt-[3px]' src={require('../Static/Images/CheckMark.png')} alt="I have it" /> :
                    <img className='h-[1.5rem] w-auto my-auto pt-[3px]' src={require('../Static/Images/CheckBox.png')} alt="I don't have it" />
                }
                <p className='whitespace-nowrap text-[1.5rem] align-middle h-fit my-auto'>{props.data.name}</p>
            </button>
        </>
    )
}
