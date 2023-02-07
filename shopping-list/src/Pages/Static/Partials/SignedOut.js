import React from 'react'
import { Helmet } from 'react-helmet'

// firebase
import { signInWithGoogle } from '../../../firebase'

export default function SignedOut() {
    return (
        <>
            <div class="on_mobile:hidden w-full h-max">
                <Desktop />
            </div>
            <div class="on_desktop:hidden h-full">
                <Mobile />
            </div>
        </>
    )
}

function Desktop() {
    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>

            <div class="m-auto mx-[7vw] vertical py-[12vh] bg-black">
                <div>
                    <h2 class="text-[3.25rem] text-center">You must be signed in</h2>
                    <h2 class="text-[3.25rem] text-center">to Google to use this app</h2>
                </div>
                <div class="h-[9vh]"></div>
                <div class="m-auto w-fit">
                    <button onClick={signInWithGoogle} class="m-auto cursor-pointer w-fit text-[2.75rem] border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[2.75vw] py-[.4vh] w-fit align-middle">Sign in With Google</button>
                </div>
            </div>
        </>
    )
}

function Mobile() {
    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div class="h-full bg-black">
                <div class="m-auto vertical py-[12vh] px-[10%] h-max bg-black">
                    <div>
                        <h2 class="text-[1.5rem] text-center">You must be signed in to Google to use this app</h2>
                    </div>
                    <div class="h-[90px]"></div>
                    <div class="m-auto w-fit">
                        <button onClick={signInWithGoogle} class="cursor-pointer mx-auto w-fit text-[1.25rem] border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[2.75vw] py-[.4vh] w-fit align-middle">Sign in With Google</button>
                    </div>
                </div>
            </div>
        </>
    )
}
