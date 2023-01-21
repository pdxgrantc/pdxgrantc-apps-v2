import React from 'react'
import { Helmet } from 'react-helmet'

// Firebase
import { auth, signInWithGoogle } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

// Partials
import Header from '../Static/Partials/Header/Header';
import LeftBar from './Partials/LeftBar';
import NewList from './Partials/NewList';


export default function Home() {
    const [user] = useAuthState(auth);
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
                <div class="h-[5vh]"></div>
                <div class="w-full h-[85vh] flex gap-[5vw]">
                    {user ? <SignedIn /> : <SignedOut />}
                </div>
            </div>
        </>
    )
}

function SignedIn() {
    return (
        <>
            <div class="w-[26vw] h-full">
                <LeftBar />
            </div>
            <div class="w-full bg-black">
                <NewList />
            </div>
        </>
    )
}

function SignedOut() {
    return (
        <>
            <div class="px-[5vw] vertical py-[12vh] w-fit mx-auto h-[90%] bg-black">
                <div>
                    <h2 class="text-[3.25rem] text-center">You must be signed in</h2>
                    <h2 class="text-[3.25rem] text-center">to Google to use this app</h2>
                </div>
                <div class="h-[9vh]"></div>
                <div class="m-auto w-fit">
                    <button onClick={signInWithGoogle} class="m-auto cursor-pointer w-fit text-[2.75rem] border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[2.75vw] py-[.4vh] w-fit align-middle">Sign In With Google</button>
                </div>
            </div>
        </>
    )
}
