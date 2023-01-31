import React from 'react'
import { Link } from 'react-router-dom'

// Firebase
import { auth, signInWithGoogle, signOutUser } from '../../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function DesktopHeader() {

    // if user is null then user is not signed in


    return (
        <div class="flex justify-between h-full">
            <Link class="w-[20vw] bg-black pl-[3vw] text-[3.75rem] font-bold leading-[5.75rem] h-[10vh] cursor-pointer whitespace-nowrap" to="/">Ez Shop</Link>
            <div class="flex text-[2.75rem] font-semibold">
                <div class="flex h-[85%] cursor-pointer over:ease-in-out duration-[350ms]">
                    <section>
                        <SignInSwitch />
                    </section>
                </div>
            </div>
        </div>
    )
}

function SignInSwitch() {
    const [user] = useAuthState(auth);
    if (user) {
        return (
            <>
                <Link class="h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]" to={"/" + auth.currentUser.displayName}>Profile</Link>
                <SignOutComponent />
            </>
        )
    }
    else {
        return (
            <>
                <SignInComponent />
            </>
        )
    }
}


function SignInComponent() {
    return (
        <>
            <button onClick={signInWithGoogle} class="bg-button_accent_color h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]">Sign In</button>
        </>
    )
}

function SignOutComponent() {
    return auth.currentUser && (
        <>
            <button onClick={signOutUser} class="bg-button_accent_color h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]">Sign Out</button>
        </>
    )
}
